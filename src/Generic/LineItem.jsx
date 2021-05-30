import React from '@material-ui/core';

import {
    Card, 
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid, 
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    media: {
        height: 140,
    },
}))

const LineItem = (props) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card variant="outlined">
                <CardActionArea>
                    <CardMedia 
                        className={classes.media}
                        image={props.imgSrc}
                        title={props.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.preview}
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">
                            Learn More
                        </Button>
                    </CardActions> */}
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default LineItem;
