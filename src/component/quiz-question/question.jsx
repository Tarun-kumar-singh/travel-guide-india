import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Option from "./option";
import Grid from '@material-ui/core/Grid';

const Question = () =>{

     const styles = useOverShadowStyles();

    return(
        <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
         <div>
             <div>
                 Where is the capital of India ? 
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
    )
 
}

export default Question;