import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Option from "./option";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GroupSizesColors from "./btnGroup"
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }));
const Question = () =>{

     const styles = useOverShadowStyles();
     const classes = useStyles();

    return(
        <div>
        <div>
            <GroupSizesColors/>
        </div>
           <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
         <div>
             <div>
             <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs>
            <Typography>      
               Where is the capital of India ? 
            </Typography>
          </Grid>
        </Grid>
      </Paper>
             </div>
             <Option
                 Option
                 item="Delhi"
                 />
            <Option
                 Option
                 item="Kolkata"
                 />
            <Option
                 Option
                 item="Patna"
                 />
            <Option
                 Option
                 item="Delhi"
                 />
         </div>
         </Grid>
    
        </div>
    )
 
}

export default Question;