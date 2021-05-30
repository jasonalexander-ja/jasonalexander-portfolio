import React from 'react';

import { 
    Paper,
    makeStyles, 
} from '@material-ui/core';

import Header from './Generic/Header';
import Headline from './Pages/Headline';

const useStyles = makeStyles(theme => ({
    background: {
        color: "white"
    }
}));

export default function App(props) {
    const classes = useStyles();

    return (
        <Paper
            square={true}
            className={classes.background}
            style={{
                height: "100vh"
            }}
        >
            <Header />
            <Headline />
        </Paper>
    );
}
