import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';

import Headlines from './Headlines/Headlines'; 
import CV from './CV/CV'; 
import Error from './Error';
import Posts from './Posts';

const useStyles = makeStyles(theme => ({
    content: {
        height: '100%'
    },
}))

export const Pages = props => {
    const classes = useStyles()
    const { 
        page, 
        redirectTo, 
        postId 
    } = props;

    // A dict of page components with their respective URI name 
    const pagesDict = {
        "home": (<Headlines redirectTo={redirectTo} />),
        "cv": (<CV redirectTo={redirectTo} />),
        "hardware-embedded": (<Typography>hardware-embedded</Typography>),
        "post": (<Posts postId={postId} />)
    };

    // Get the selected page component, else show an error 
    let pageProp = pagesDict[page] ? 
        pagesDict[page] : 
        (
            <Error />
        );

    return (
        <Grid container className={classes.content}>
            { pageProp }
        </Grid>
    );
}

export default Pages;
