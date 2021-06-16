import React, { useState } from 'react';

import clsx from 'clsx';
import {
    makeStyles
} from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import { topNavHeight } from './helper.js';
import NavTop from './Components/NavTop';
import NavBottom from './Components/NavBottom';
import Pages from './Pages/Pages'; 

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        minHeight: `calc(100vh - ${2 * theme.mixins.toolbar.minHeight}px)`,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginTop: 0
    },
    contentHeight1: {
        [theme.breakpoints.down('sm')]: {
            minHeight: `calc(100vh - ${2 * theme.mixins.toolbar.minHeight}px)`,
        },
        minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    },
    contentHeight2: {
        [theme.breakpoints.down('sm')]: {
            minHeight: `calc(100vh - ${2 * theme.mixins.toolbar['@media (min-width:0px) and (orientation: landscape)'].minHeight}px)`,
        },
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:0px) and (orientation: landscape)'].minHeight}px)`,
    },
    contentHeight3: {
        [theme.breakpoints.down('sm')]: {
            minHeight: `calc(100vh - ${2 * theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
        },
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    },
    contentHeightShifted1: {
        [theme.breakpoints.down('sm')]: {
            minHeight: `calc(100vh - ${2 * theme.mixins.toolbar.minHeight}px - ${topNavHeight}px)`,
        },
        minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - ${topNavHeight}px)`,
    },
    contentHeightShifted2: {
        [theme.breakpoints.down('sm')]: {
            minHeight: `calc(100vh - ${2 * theme.mixins.toolbar['@media (min-width:0px) and (orientation: landscape)'].minHeight}px - ${topNavHeight}px)`,
        },
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:0px) and (orientation: landscape)'].minHeight}px - ${topNavHeight}px)`,
    },
    contentHeightShifted3: {
        [theme.breakpoints.down('sm')]: {
            minHeight: `calc(100vh - ${2 * theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px - ${topNavHeight}px)`,
        },
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px - ${topNavHeight}px)`,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginTop: topNavHeight,
        },
    },
}));

const Content = props => {
    const classes = useStyles();
    const setContentHeight2 = useMediaQuery('@media (min-width:0px) and (orientation: landscape)');
    const setContentHeight3 = useMediaQuery('@media (min-width:600px)');
    
    const { 
        drawOpen, 
        toggleDraw, 
        redirectTo, 
        optionsList, 
        page,
        postId, 
        setDarkmode, 
        darkMode, 
    } = props;
    const drawerShift = (drawOpen.open && drawOpen.anchor === 'top');

    let contentHeightClassName;
    if(setContentHeight2 && !setContentHeight3)
        contentHeightClassName = drawerShift ? classes.contentHeightShifted2 : classes.contentHeight2;
    else if(setContentHeight3)
        contentHeightClassName = drawerShift ? classes.contentHeightShifted3 : classes.contentHeight3;
    else 
        contentHeightClassName = drawerShift ? classes.contentHeightShifted1 : classes.contentHeight1;

    const tabNameToIndex = name  => {
        for(let option in optionsList) {
            let value = optionsList[option];
            if(value.code === name)
                return value.index;
        }
        return 0;
    }
    
    const indexToTabName = index => {
        for(let option in optionsList) {
            let value = optionsList[option];
            if(value.index === index)
                return value.code;
        }
        return '';
    }

    const [selectedTab, setSelectedTab] = useState(tabNameToIndex(page));
    const changeTab = (_event, tabNo) => { 
        redirectTo(indexToTabName(tabNo));
        setSelectedTab(tabNo); 
    }

    // The URI takes precedence over the UI 
    let pageTabNo = tabNameToIndex(page);
    if(pageTabNo !== selectedTab)
        setSelectedTab(pageTabNo);

    return (
        <>
            <NavTop
                open={drawOpen} 
                selectedTab={selectedTab} 
                changeTab={changeTab}
                optionsList={optionsList}
            />
            <main
                className={clsx(classes.content, contentHeightClassName, { 
                    [classes.contentShift]: drawerShift 
                })} 
            >
                <Pages 
                    page={page} 
                    redirectTo={redirectTo}
                    postId={postId}
                />
            </main>
            <NavBottom
                open={drawOpen} 
                toggleDraw={toggleDraw} 
                selectedTab={selectedTab} 
                changeTab={changeTab}
                optionsList={optionsList}
                setDarkmode={setDarkmode}
                darkMode={darkMode}
            />
        </>
    );
}

export default Content;
