import React from 'react';

import clsx from 'clsx';
import {
    makeStyles
} from '@material-ui/core/styles';

import { sidebarHeight } from './helper.js';
import OptionsTop from './Components/OptionsTop';
import Headline from './Pages/Headlines/Headlines';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    content: {
        flexGrow: 1,
        //padding: theme.spacing(1),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginTop: 0
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginTop: sidebarHeight,
        },
    },
}))

const Content = (props) => {
    const classes = useStyles();
    const { drawOpen } = props;
    
    return (
        <div className={classes.root}>
            <OptionsTop
                open={drawOpen}
            />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: (drawOpen.open && drawOpen.anchor === 'top')
                })}
            >
                <Headline />
            </main>
        </div>
    );
}

export default Content;
