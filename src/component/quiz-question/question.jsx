import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Option from "./option";
 
const Question = () =>{

     const styles = useOverShadowStyles();

    return(
         <div className="options">
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
    )
 
}

export default Question;