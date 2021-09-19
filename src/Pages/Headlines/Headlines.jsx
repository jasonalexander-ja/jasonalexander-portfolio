import React, { useState } from 'react'; 

import { 
    Divider,
    Grid, 
    makeStyles,
    Typography, 
    CircularProgress, 
} from '@material-ui/core'; 

import { useHistory } from 'react-router';

import HeadlineDisplay from './HeadlineDisplay';

import CardLink from '../../Generic/CardLink';

import {
    dev
} from '../../helper';

const useStyles = makeStyles(theme => ({
    content: {
        padding: 0
    },
    divider: {
        marginTop: 5,
        marginBottom: 5,
    }
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

const Headline = () => {
    const history = useHistory();
    const redirectTo = uri => history.push(`/${uri}`);
    const classes = useStyles();
    const [pageState, setPageState] = useState({
        hasLoaded: false,
        pageData: []
    });

    const makePageContent = data => {
        if(data.length === 0)
            return (
                <Typography variant="h3">More to come...</Typography>
            );
        else 
            return data.map((record, iter) => (
                <CardLink 
                    {...record} 
                    key={`frontpage-item-${iter}`} 
                    redirectTo={redirectTo}
                />
            ));
    }

    if(!pageState.hasLoaded)
        getFrontPageData(setPageState);

    let content = pageState.hasLoaded ? makePageContent(pageState.pageData) : (
        <Grid 
            item 
            container 
            xs={12} 
            justify="center"
        >
            <CircularProgress color="secondary" />
        </Grid>
    );

    return (
        <Grid 
            item 
            container 
            className={classes.content} 
        >
            <Grid 
                item 
                container 
                xs={12} 
            >
                <Grid 
                    item 
                    lg={1} 
                    xs={false} 
                />
                <HeadlineDisplay redirectTo={redirectTo} />
                <Grid 
                    item 
                    lg={1} 
                    xs={false} 
                />
            </Grid>
            <Grid 
                item 
                xs={false} 
                lg={2} 
            />
            <Grid 
                container 
                item 
                xs={12} 
                lg={8} 
                justify="center" 
            >
                <Grid 
                    container 
                    item 
                    xs={12} 
                    spacing={1} 
                    justify="center" 
                    alignItems="stretch" 
                >
                    <Grid 
                        item 
                        xs={12} 
                    >
                        <Divider className={classes.divider} />
                    </Grid>
                    {content} 
                </Grid>
            </Grid>
            <Grid 
                item 
                xs={false} 
                lg={2} 
            />
        </Grid>
    );
}

export default Headline;
