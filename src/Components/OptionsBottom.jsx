import React, { useState } from 'react';

import {
    Drawer, 
    Tabs,
    Tab,
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';

import Footer from './Footer';

const useStyles = makeStyles(theme => ({
    optionsFlexContainer: {
        alignItems: 'stretch'
    },
    option: {
        maxWidth: 'none'
    }, 
}));

const OptionsBottom = (props) => {
    const [tabNo, changeTabEvent] = useState(0); 
    const classes = useStyles();

    const {
        open,
        anchor
    } = props.open;
    const { toggleDraw } = props;
    const openFlag = anchor === 'bottom' && open;

    const changeTab = (event, newValue) => 
        changeTabEvent(newValue);

    return (
        <Drawer 
            anchor='bottom' 
            open={openFlag} 
            onClose={() => props.toggleDraw('bottom')} 
        > 
            <Tabs 
                orientation='vertical' 
                variant='scrollable' 
                value={tabNo} 
                onChange={changeTab} 
                classes={{ 
                    flexContainerVertical: classes.optionsFlexContainer 
                }} 
            > 
                <Footer toggleDraw={toggleDraw} />
                <Tab className={classes.option} label='Home Page' />
                <Tab className={classes.option} label='Hardware/Embedded' />
                <Tab className={classes.option} label='Web' />
                <Tab className={classes.option} label='Rust' />
                <Tab className={classes.option} label='CPU Design' />
                <Tab className={classes.option} label='Nottinghack' />
                <Tab className={classes.option} label='Anvil-Lib' />
                <Tab className={classes.option} label='Norenth' />
                <Tab className={classes.option} label='Contact' />
                <Tab className={classes.option} label='CV' />
            </Tabs>
        </Drawer>
    );
}

export default OptionsBottom;
