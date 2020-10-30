import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const DisplayQuestion = () => {

    const correctAsnwer = 1
    const handleChange = (event) => {
        console.log(event.target.value)
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
        </div>
    )

}   


export default DisplayQuestion;