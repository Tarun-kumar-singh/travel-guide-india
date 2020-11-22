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
const Question = (props) =>{

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
        <div style={{marginTop:'10px'}}>
        <Typography variant="h5" component="h5">      
            {props.question}     
       </Typography>
        </div>
        </Grid>
        </div>
    )
 
}

export default Question;