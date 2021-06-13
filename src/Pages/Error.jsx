import React from 'react';

import { 
    Grid, 
    Typography 
} from '@material-ui/core';

const Error = () => {
    
    return (
        <Grid item container>
            <Grid md={2} xs={false} item />
            <Grid md={8} xs={12} item>
                <Typography variant="h1" color="secondary">Oops!</Typography>
                <Typography variant="h5">It doesn't look like this page exists :(</Typography>
            </Grid>
            <Grid md={2} xs={false} item />
        </Grid>
    );
}

export default Error;
