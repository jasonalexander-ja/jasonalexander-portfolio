import React, { Button, CardActions } from '@material-ui/core';

import {
    Card, 
    CardContent,
    CardMedia,
    Typography,
    Grid, 
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    cardAction: {
        padding: '0', 
    }
}))

const CardLink = (props) => {
    const classes = useStyles();
    const { largeItem } = props;

    return (
        <Grid 
            item xs={12} 
            sm={6} 
            md={largeItem ? 8 : 4} 
            lg={largeItem ? 6 : 3} 
            xl={largeItem ? 4 : 2}
        >
            <Card className={classes.card}>
                <CardMedia 
                    className={classes.cardMedia}
                    image={props.imgSrc}
                    title={props.title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2"
                    >
                        {props.title}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="p"
                    >
                        {props.preview}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardAction}>
                    <Button 
                        fullWidth 
                        variant="contained" 
                        color="secondary"
                    >
                        Read
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default CardLink;
