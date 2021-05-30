import React from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    IconButton,
    Hidden,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles(theme => ({
    title: {
        marginLeft: 5,
        flexGrow: 1,
    }
})); 

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Hidden xsDown>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Typography variant="h6" className={classes.title}>
                    JSON's Node 
                </Typography>
                <IconButton aria-label="GitHub" href="https://github.com/jasonalexander-ja">
                    <GitHubIcon />
                </IconButton>
                <IconButton aria-label="Twitter" href="https://twitter.com/crashtestdev">
                    <TwitterIcon />
                </IconButton>
                <IconButton aria-label="YouTube" href="https://www.youtube.com/channel/UCrIlmyMGXPzWLyukoxQWYlA">
                    <YouTubeIcon />
                </IconButton>
                <IconButton aria-label="Telegram" href="https://t.me/crashtestdev">
                    <TelegramIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
