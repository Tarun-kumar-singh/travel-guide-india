import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';


const SnackBar = (props) =>{
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState('TransitionDown');
    
      const handleClose = () => {
        setOpen(false);
      };
    return(
        <Snackbar
        open={props.isOpen}
        onClose={handleClose}
        TransitionComponent={transition}
        message={props.message}
        key={transition ? transition.name : ''}
      />
    )
}

export default SnackBar;