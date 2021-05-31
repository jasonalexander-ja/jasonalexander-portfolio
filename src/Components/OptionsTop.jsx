import React, { useState } from 'react';

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

import { sidebarHeight } from '../helper.js';

const useStyles = makeStyles(theme => ({
    optionsBody: {
        height: sidebarHeight, 
        display: 'flex',
        alignItems: 'flex-end', 
    },
    drawerContainer: {
        height: sidebarHeight,
        overflow: 'auto',
    }
}));

const OptionsTop = (props) => {
    const [tabNo, changeTabEvent] = useState(0);
    const classes = useStyles();

    const changeTab = (event, newValue) => 
        changeTabEvent(newValue);

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
            >
                <Toolbar id='spacer' />
                <div className={classes.optionsBody}>
                    <Tabs 
                        value={tabNo} 
                        onChange={changeTab}
                        variant='scrollable'
                    >
                        <Tab label='Home Page' />
                        <Tab label='Hardware/Embedded' />
                        <Tab label='Web' />
                        <Tab label='Rust' />
                        <Tab label='CPU Design' />
                        <Tab label='Nottinghack' />
                        <Tab label='Anvil-Lib' />
                        <Tab label='Norenth' />
                        <Tab label='Contact' />
                        <Tab label='CV' />
                    </Tabs>
                </div>
            </Drawer>
        </Hidden> 
    )
}

export default OptionsTop;
