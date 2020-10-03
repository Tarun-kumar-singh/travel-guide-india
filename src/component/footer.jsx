import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position:'fixed',
    bottom:0
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
 
}));

 function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
              <Grid item >
              <Typography variant="subtitle1">Powered By: Travel Guide, India</Typography>
         </Grid>
      </Paper>
    </div>
  );
}

export default Footer