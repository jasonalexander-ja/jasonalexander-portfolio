import React, { useState } from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    IconButton,
    Hidden,
    ButtonBase, 
    Menu, 
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
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1, 
    },
})); 

const Header = (props) => {
    const classes = useStyles();
    const [linksMenu, setLinksMenu] = useState(null);

    const openLinks = (event) => 
        setLinksMenu(event.currentTarget);

    const closeLinks = () => 
        setLinksMenu(null);

    return (
        <AppBar position="sticky" className={classes.appBar}>
            <Toolbar>
                <Hidden smDown>
                    <IconButton 
                        className={classes.menuButton}
                        onClick={() => props.toggleDraw('top')}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <div  className={classes.title}>
                    <ButtonBase>
                        <Typography variant="h6">
                            JSON's Node 
                        </Typography>
                    </ButtonBase>
                </div>
                <Hidden xsDown>
                    {profileLinks}
                </Hidden>
                <Hidden smUp>
                    <ButtonBase>
                    </ButtonBase>
                    <IconButton onClick={openLinks}>
                        <Typography variant="button">
                            Links 
                        </Typography>
                        <KeyboardArrowDownIcon />
                    </IconButton>
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
