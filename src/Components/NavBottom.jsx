import React from 'react';

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

const NavBottom = (props) => {
    const classes = useStyles();

    const { 
        toggleDraw, 
        changeTab, 
        selectedTab, 
        optionsList
    } = props;

    const {
        open,
        anchor
    } = props.open;

    const tabs = optionsList.map(opt => 
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
            <Tabs 
                orientation='vertical' 
                variant='scrollable' 
                value={selectedTab} 
                onChange={changeTab} 
                classes={{ 
                    flexContainerVertical: classes.optionsFlexContainer 
                }} 
            > 
                <Footer toggleDraw={toggleDraw} />
                {tabs}
            </Tabs>
        </Drawer>
    );
}

export default NavBottom;
