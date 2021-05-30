import React, { useState } from 'react'; 

import { 
    Grid, 
    makeStyles,
    Typography, 
} from '@material-ui/core'; 

import LineItem from '../Generic/LineItem';

import {
    dev
} from '../helper';

const useStyles = makeStyles(theme => ({
    content: {
        padding: 10
    },
}));

const getFrontPageData = async stateSetter => {
    const pageData = await fetch(`${dev ? '/TestData' : '/api'}/FrontPage${dev ? '.json' : ''}`)
        .then(res => res.json())
        .then(data => data.list)
        .catch(e => {
            console.log(`Error getting front page data: ${e}`);
            return [];
        });
    stateSetter({
        hasLoaded: true,
        pageData: pageData
    });
}

const makePageContent = data => {
    if(data.length === 0)
        return (
            <Typography variant="h3">More to come...</Typography>
        );
    else 
        return data.map((record, iter) => (
            <LineItem 
                {...record}
                key={`frontpage-item-${iter}`}
            />
        ));
}

const Headline = () => {
    const classes = useStyles();
    const [pageState, setPageState] = useState({
        hasLoaded: false,
        pageData: []
    });

    const hasContent = pageState.pageData.length > 0;

    if(!pageState.hasLoaded)
        getFrontPageData(setPageState);

    let content = makePageContent(pageState.pageData);

    return (
        <Grid item container className={classes.content}>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
                <Grid container item spacing={3} justify={`${hasContent ? 'flex-start' : 'center'}`}>
                    {content}
                </Grid>
            </Grid>
            <Grid item xs={false} sm={2} />
        </Grid>
    );
}

export default Headline;
