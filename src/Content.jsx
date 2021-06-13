import React, { useState } from 'react';

import clsx from 'clsx';
import {
    makeStyles
} from '@material-ui/core/styles';

import { topNavHeight } from './helper.js';
import NavTop from './Components/NavTop';
import NavBottom from './Components/NavBottom';
import Pages from './Pages/Pages'; 

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        minHeight: `calc(100vh - ${2 * theme.mixins.toolbar.minHeight}px)`,
        '@media (min-width:0px) and (orientation: landscape)': `calc(100vh - ${2 * theme.mixins.toolbar['@media (min-width:0px) and (orientation: landscape)'].minHeight}px)`,
        '@media (min-width:600px)': `calc(100vh - ${2 * theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginTop: 0
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
    const { 
        drawOpen, 
        toggleDraw, 
        redirectTo, 
        optionsList, 
        page,
        postId
    } = props;

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
                className={clsx(classes.content, { 
                    [classes.contentShift]: (drawOpen.open && drawOpen.anchor === 'top') 
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
            />
        </>
    );
}

export default Content;
