import React from 'react';

import {
    Typography
} from '@material-ui/core';

import { Route } from 'react-router-dom'; 

const Posts = props => {
    const { 
        match, 
    } = props;
    const { params } = match;
    const { postId } = params;

    console.log(props);

    return (
        <>
            <Typography variant="h1">{postId}</Typography>
            <Route
                path="/post/:postId"
                component={props => <h1>{props.postId}</h1>}
            />
        </>
    );
}

export default Posts;
