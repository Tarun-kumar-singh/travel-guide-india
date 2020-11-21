import { CallToActionSharp } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';



const Question = () =>{

    const [timeLeft, setTimeLeft] = useState(5);



    useEffect(() => {
        timeLeft > 0 && setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        if(timeLeft === 0){
            console.log('Hello')
        }
       }, [timeLeft]);

    return(
        <div>
            <div>{timeLeft}</div>
            <div>
            </div>
        </div>
    )
}

export default Question;