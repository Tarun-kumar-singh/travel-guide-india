import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
const DisplayQuestion = () => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false)
    const correctAsnwer = 1
    const handleChange = (event) => {
        if(event.target.value == correctAsnwer){
            setError(false)
            handleClick()
        }
        else{
            setOpen(false)
            setError(true)
        }
    };

     const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
        setError(false)
      };

      const handleClick = () => {
        setError(false)
        setOpen(true);
      };

    return(
        <div>
            <FormControl component="fieldset">
            <FormLabel component="legend">Where is the capital of India ?</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
                <FormControlLabel value="1" control={<Radio />} label="Delhi" />
                <FormControlLabel value="2" control={<Radio />} label="Mumbai" />
                <FormControlLabel value="3" control={<Radio />} label="Kolkata" />
            </RadioGroup>
            </FormControl>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                This is a success message!
                </Alert>
            </Snackbar>  
            <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                        Wrong answer
                </Alert>
            </Snackbar>
        </div>
    )

}   


export default DisplayQuestion;