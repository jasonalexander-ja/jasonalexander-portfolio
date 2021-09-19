import React from 'react';

import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';

import { Route } from 'react-router-dom'; 

import { menuOptions } from '../Common/menuOptions';

const useStyles = makeStyles(() => ({
    content: {
        height: '100%'
    },
}))

export const Pages = () => {
    const classes = useStyles();

    let options = [...menuOptions];
    options.sort((firstElem, secondElem) => firstElem.index - secondElem.index);

    console.log(options);

    let routes = options.map(opt =>
        <Route 
            path={`/${opt.code}`}
            component={opt.component}
            key={`page-route=${opt.code}`}
        />
    );

    return (
        <Grid container className={classes.content}>
            {routes}
        </Grid>
    );
}

export default Pages;
//