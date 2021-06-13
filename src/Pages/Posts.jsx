import React from 'react';

import {
    Typography
} from '@material-ui/core';

const Posts = props => {
    const {
        postId
    } = props;

    return (
        <>
            <Typography variant="h1">{postId}</Typography>
        </>
    );
}

export default Posts;
