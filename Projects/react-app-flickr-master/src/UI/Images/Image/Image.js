import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Init styles for Material UI components
const useStyles = makeStyles({
    media: {
        maxWidth: '100%',
    },
    marginTopPaper: {
        marginTop: 30,
    }
});
  
function Image(props) {
    // use classes
    const classes = useStyles();

    // creating component that receive url and text in order to create a reusable image componenet
    return (
        <Paper className={classes.marginTopPaper}>
            <img 
                className={classes.media}
                src={props.url}
                alt={props.text}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.text}
                </Typography>
            </CardContent>
        </Paper>
    );
}

export default Image;