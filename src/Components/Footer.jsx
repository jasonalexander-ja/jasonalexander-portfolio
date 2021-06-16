import React from 'react';

import {
    makeStyles, 
    AppBar,
    Toolbar,
    Hidden,
    ButtonBase, 
    Grid, 
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    footer: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center',
    }, 
    selectArea: {
        heigh: "100%",
        width: "100%"
    }, 
}));

const Footer = props => {
    const classes = useStyles();

    return (
        <Hidden mdUp>
            <AppBar position="sticky" className={classes.footer}>
                <ButtonBase 
                    className={classes.selectArea} 
                    onClick={() => props.toggleDraw('bottom')}
                >
                    <Toolbar>
                    <Grid container>
                        <Grid xs={12} item></Grid>
                        <Grid xs={12} item><MenuIcon /></Grid>
                        <Grid xs={12} item></Grid>
                    </Grid>
                    </Toolbar>
                </ButtonBase>
            </AppBar>
        </Hidden>
    );
}

export default Footer;
