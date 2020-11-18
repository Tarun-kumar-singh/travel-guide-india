import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
const DisplayQuestion = () => {

    const questioCollection = [{
    Q: 'Wher is tche capital of India ?',
    'option-1':'Delhi',
    'option-2':'Mumbai',
    'option-3':'Kolkata',
    rightAnswer: 'option-1'
    }]

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false)

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
        setLoader(true)
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

            <Backdrop className={classes.backdrop} open={loader}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )

}   


export default DisplayQuestion;