import React from 'react';

import {
    Hidden,
    Drawer,
    Toolbar,
    Tabs,
    Tab, 
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';

import { topNavHeight } from '../helper.js';

const useStyles = makeStyles(theme => ({
    optionsBody: {
        height: topNavHeight, 
        display: 'flex',
        alignItems: 'flex-end', 
    },
    drawerContainer: {
        height: topNavHeight,
        overflow: 'auto',
    },
    dropDown: {
        borderBottom: 0, 
    }
}));

const NavTop = (props) => {
    const classes = useStyles();
    const { 
        changeTab, 
        selectedTab, 
        optionsList,  
    } = props;

    const tabs = optionsList.map(opt => 
        <Tab 
            label={opt.text}
            key={`tab-bottom-opt-${opt.code}`} 
        />
    );

    const {
        open,
        anchor
    } = props.open;

    const openFlag = anchor === 'top' && open;

    return (
        <Hidden smDown>
            <Drawer 
                variant='persistent'
                anchor='top'
                open={openFlag} 
                classes={{
                    paper: classes.dropDown
                }}
            >
                <Toolbar />
                <div className={classes.optionsBody}>
                    <Tabs 
                        value={selectedTab} 
                        onChange={changeTab}
                        variant='scrollable'
                    >
                        <div></div>
                        {tabs}
                    </Tabs>
                </div>
            </Drawer>
        </Hidden> 
    )
}

export default NavTop;
