import React, { useState } from 'react';

import {
    CardMedia, 
    Grid,
    Typography, 
    CardActionArea
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';

import Carousel from 'react-material-ui-carousel'; 

import {
    dev
} from '../../helper.js';

const useStyles = makeStyles(theme => ({
    image: {
        width: '100%', 
        height: '40vh', 
        opacity: 0.3, 
    },
    textArea: { 
        position: 'absolute', 
        width: '100%',
        height: '40vh',
        top: 0, 
        left: 0, 
        paddingTop: '15px',
        paddingLeft: '15px',
        paddingRight: '15px', 
        display: 'flex',
        alignItems: 'flex-start',
        overflow: 'hidden'
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px', 
        }
    },
    body: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px', 
        }
    }
}));

const getHeadlineDisplayData = async (setState) => {
    const items = await fetch(`/${dev ? 'TestData/' : ''}HeadlineDisplay.json`)
        .then(res => res.json())
        .then(json => json.list ? json.list : [])
        .catch(err => []);
    setState({
        items: items, 
        hasLoaded: true, 
    });
}

const HeadlineDisplay = () => {
    const classes = useStyles();
    const [state, setState] = useState({ items: [], hasLoaded: false });
    if(!state.hasLoaded)
        getHeadlineDisplayData(setState);

    const items = state.items.map((item, index) => 
        <div 
            key={`${item.bgImage}-${index}`}
        >
            <CardMedia 
                className={classes.image} 
                image={item.bgImage} 
            >
            </CardMedia>
            <CardActionArea className={classes.textArea}>
                    <Grid container>
                        <Grid item lg={1} xs={false} />
                        <Grid item lg={10} xs={12}>
                            <Typography className={classes.title} variant="h2">
                                {item.title}
                            </Typography>
                            <Typography className={classes.body} variant="h5">
                                {item.desc}
                            </Typography>
                            <Typography className={classes.body} variant="h5" color="secondary">
                                Learn More
                            </Typography>
                        </Grid>
                        <Grid item lg={1} xs={false} />
                    </Grid>
            </CardActionArea>
        </div>
    );
    
    return (
        <Grid item lg={10} xs={12}>
            <Carousel animation="slide">
                {items}
            </Carousel>
        </Grid>
    );
}

export default HeadlineDisplay;
