import React from 'react';

import {
    Drawer, 
    Tabs,
    Tab,
    FormControlLabel, 
    Switch, 
    Divider, 
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';

import { menuOptions } from '../Common/menuOptions'; 

import Footer from './Footer';

const useStyles = makeStyles(theme => ({
    optionsFlexContainer: {
        alignItems: 'stretch'
    },
    option: {
        maxWidth: 'none'
    }, 
    darkModeButton: {
        justifyContent: 'center',
        margin: '8px',
    },
    divider: {
        marginTop: 5,
        marginBottom: 5,
    }
}));

const NavBottom = (props) => {
    const classes = useStyles();

    const { 
        toggleDraw, 
        changeTab, 
        selectedTab,
        setDarkmode, 
        darkMode, 
    } = props;

    const {
        open,
        anchor
    } = props.open;

    const tabs = menuOptions.map(opt => 
        <Tab 
            className={classes.option} 
            label={opt.text} 
            key={`tab-bottom-opt-${opt.code}`} 
        />
    );

    const openFlag = anchor === 'bottom' && open;

    return (
        <Drawer 
            anchor='bottom' 
            open={openFlag} 
            onClose={() => props.toggleDraw('bottom')} 
        > 
            <Footer toggleDraw={toggleDraw} />
            <Tabs 
                orientation='vertical' 
                variant='scrollable' 
                value={selectedTab} 
                onChange={changeTab} 
                classes={{ 
                    flexContainerVertical: classes.optionsFlexContainer 
                }} 
            > 
                <div />
                {tabs}
            </Tabs>
            <Divider className={classes.divider} />
            <FormControlLabel
                className={classes.darkModeButton}
                value={darkMode}
                control={
                    <Switch 
                        color="secondary" 
                        size="small" 
                        onChange={event => setDarkmode(!darkMode)}
                        checked={darkMode}
                    />
                }
                label="Dark Mode"
                labelPlacement="start"
            />
        </Drawer>
    );
}

export default NavBottom;
