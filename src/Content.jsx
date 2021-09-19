import React, { useState } from 'react';

import clsx from 'clsx';
import {
    makeStyles, 
    useTheme, 
} from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import { useHistory } from 'react-router';

import { menuOptions } from './Common/menuOptions';

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
    const theme = useTheme();
    const isSM = window.innerWidth < theme.breakpoints.values.md;    
    const history = useHistory();
    const redirectTo = uri => history.push(`/${uri}`);
    
    const { 
        drawOpen, 
        toggleDraw,
        setDarkmode, 
        darkMode, 
    } = props;
    const drawerShift = (drawOpen.open && drawOpen.anchor === 'top');
    
    // The index of the tab as it appears in the list, to the tab name URI
    const indexToTabName = index => {
        for(let option in menuOptions) {
            let value = menuOptions[option];
            if(value.index === index)
                return value.code;
        }
        return '';
    };

    const tabNameToIndex = tabName => {
        for(let option in menuOptions) {
            let value = menuOptions[option];
            if(tabName.startsWith(value.code))
                return value.index;
        }
        return 0;
    };

    // Store the currently selected tab
    const [selectedTab, setSelectedTab] = useState(1);
    const changeTab = (_event, tabNo) => { 
        redirectTo(indexToTabName(tabNo));
        setSelectedTab(tabNo); 
    };

    // The URI will take precedence over the actual selected tab 
    let location = window.location.pathname.substring(1);
    let tabName = indexToTabName(selectedTab);
    if(!location.startsWith(tabName) && tabName)
        setSelectedTab(tabNameToIndex(location));

    // The height of the header/footer changes depending on the screen size/orientation
    // as defined in the theme, we need to account for that in the min size for the main content  
    const minWidth0Landscape = useMediaQuery('@media (min-width:0px) and (orientation: landscape)');
    const minWidth600 = useMediaQuery('@media (min-width:600px)');

    let toolBarHeight = 0;
    if(minWidth0Landscape && !minWidth600)
        toolBarHeight = theme.mixins.toolbar['@media (min-width:0px) and (orientation: landscape)'].minHeight;
    else if(minWidth600)
        toolBarHeight = theme.mixins.toolbar['@media (min-width:600px)'].minHeight;
    else 
        toolBarHeight = theme.mixins.toolbar.minHeight;
    // If we are on a small screen, then there will also be a footer 
    toolBarHeight = isSM ? toolBarHeight * 2 : toolBarHeight;
    // We also need to take into account the top menu when it's open 
    toolBarHeight = drawerShift ? toolBarHeight + topNavHeight : toolBarHeight;

    return (
        <>
            <NavTop
                open={drawOpen}
                selectedTab={selectedTab} 
                changeTab={changeTab}
            />
            <main
                className={clsx(classes.content, { 
                    [classes.contentShift]: drawerShift 
                })} 
                style={{
                    minHeight: `calc(100vh - ${toolBarHeight}px)`
                }}
            >
                <Pages />
            </main>
            <NavBottom
                open={drawOpen} 
                toggleDraw={toggleDraw} 
                selectedTab={selectedTab} 
                changeTab={changeTab}
                setDarkmode={setDarkmode}
                darkMode={darkMode}
            />
        </>
    );
}

export default Content;
