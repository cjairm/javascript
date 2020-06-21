import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Init styles for Material UI components
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: 15
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    // use classes
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {/* NAVBAR */}
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Image fetcher
                </Typography>
            </Toolbar>
        </AppBar>
        {/* NAVBAR */}
    </div>
  );
}