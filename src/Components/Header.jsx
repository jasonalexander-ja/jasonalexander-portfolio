import React, { useState } from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    IconButton,
    Button, 
    Hidden, 
    Menu, 
    FormControlLabel,
    Switch, 
    Fade, 
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const profileLinks = (
    <div>
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
    </div>
);

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginRight: 'auto',
        height: '100%',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1, 
    },
})); 

const Header = props => {
    const classes = useStyles();
    const [linksMenu, setLinksMenu] = useState(null);
    const [showThemeToggle, setShowThemeToggle] = useState(false);

    const { 
        redirectTo, 
        setDarkmode, 
        darkMode
    } = props;

    const openLinks = (event) => 
        setLinksMenu(event.currentTarget);

    const closeLinks = () => 
        setLinksMenu(null);

    return (
        <AppBar position="sticky" className={classes.appBar}>
            <Toolbar
                onMouseOver={() => setShowThemeToggle(true)}
                onMouseOut={() => setShowThemeToggle(false)}
            >
                <Hidden smDown>
                    <IconButton 
                        className={classes.menuButton}
                        onClick={() => props.toggleDraw('top')}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Button 
                    className={classes.title}
                    onClick={() => redirectTo('home')}
                >
                    <Typography variant="h6">
                        JSON's Node 
                    </Typography>
                </Button>
                <Hidden xsDown>
                    <Fade in={showThemeToggle}>
                        <FormControlLabel
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
                            labelPlacement="top"
                        />
                    </Fade>
                </Hidden>
                <Hidden xsDown>
                    {profileLinks}
                </Hidden>
                <Hidden smUp>
                    <Button 
                        onClick={openLinks}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Links 
                    </Button>
                    <Menu
                        anchorEl={linksMenu}
                        open={Boolean(linksMenu)}
                        onClose={closeLinks}
                    >
                        {profileLinks}
                    </Menu>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
