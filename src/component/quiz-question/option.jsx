
import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      marginTop:'10px',
      padding: theme.spacing(2),
      cursor:'pointer'
    },
  }));
const Option = (props) =>{

     const styles = useOverShadowStyles();
     const classes = useStyles();

    return(
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
            <div 
            onClick={() => props.checkOption(props.itemIndex)}
 
            >
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs>
                            <Typography variant="body1" component="body1">      
                                {props.item}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
             </div> 
         </Grid>       
    )
 
}

export default Option;