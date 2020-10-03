import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const WhiteCircularProgress = withStyles({
    root: {
      color: "green"
    }
  })(CircularProgress);
const Loader = () => {

    return(    
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
        <div style={{marginTop:'100px'}}>
            <WhiteCircularProgress size='80px' thickness={2}/>
        </div>

    </Grid>
    )
}


export default Loader