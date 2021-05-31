import React from 'react';

import {
    makeStyles, 
    AppBar,
    Toolbar,
    IconButton,
    Hidden
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    footer: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center',
    },
}));

const Footer = (props) => {
    const classes = useStyles();

    return (
        <Hidden mdUp>
            <AppBar position="sticky" className={classes.footer}>
                <Toolbar>
                    <IconButton onClick={() => props.toggleDraw('bottom')}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Hidden>
    );
}

export default Footer;
