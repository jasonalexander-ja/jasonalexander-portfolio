import React from 'react';

import { 
    Paper,
    makeStyles,
    Typography, 
} from '@material-ui/core';

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
            <Typography variant="h1">Hello World</Typography>
        </Paper>
    );
}
