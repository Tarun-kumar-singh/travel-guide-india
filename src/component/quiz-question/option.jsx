
import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';


const Option = (props) =>{

     const styles = useOverShadowStyles();

    return(
        <div style={{width:'27vw', padding:'30px'}}>
            <Box borderRadius={24} height={100} classes={styles}>
                {props.item}
            </Box>
        </div>
    
    )
 
}

export default Option;