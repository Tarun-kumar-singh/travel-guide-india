import React, { useState, useEffect } from 'react';
import Questions from "../../DemoData/question";
import Question from "./question";
import Option from "./option";
import SnackBar from "./snackBar";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "../lightMode/globalStyles";
import { lightTheme, darkTheme } from "../lightMode/theme"
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { AddIcCall } from '@material-ui/icons';

const musicCorrectUrl="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
const musicWrongUrl="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
const QuizHome = () => {

    const [theme, setTheme] = useState('light');
    const [checked, setChecked] = useState(false);
    const [qno, setQno] = useState(0) 
    const [isCorrect, setIsCorrect] = useState(undefined)
    const [isSnackbarOpen, setisSnackbarOpen] = useState(false)

    const wrongAnswerAudio = new Audio(musicWrongUrl)
    const rightAnswerAudio = new Audio(musicCorrectUrl)

    const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
      setChecked(() => theme === 'light' ? true : false)  
    }
 
    const nextQuestion = () => {
        setisSnackbarOpen(false)
        if(qno === 1){
            return
        }
        setQno(qno+1)
    }

    const checkAnswer = (item) => {
        if(Questions[qno].righOption === item){
            rightAnswerAudio.play()
            setIsCorrect('Correct')
            setisSnackbarOpen(true)
            return
        }
        wrongAnswerAudio.play()
        setIsCorrect('Wrong')
        setisSnackbarOpen(true)
    }

    
    return(
        <React.Fragment>
            <Tooltip title="Dark mode">
                <Switch
                    checked={checked}
                    onChange={themeToggler}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </Tooltip>
         <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>

            <div>
            <SnackBar
             message={isCorrect}
             isOpen={isSnackbarOpen}
                />
         <Question
            question={Questions[qno].question}
        />

        {
            Questions[qno].options.map((el, index) => {
               return (
                        <Option
                         key={index}
                         itemIndex={index}
                         item={el}
                         checkOption={checkAnswer}
                        />
                    )
            })
        }
             <Button variant="contained" onClick={nextQuestion}>Next</Button>

        </div>
        </ThemeProvider>
        </React.Fragment>
    )
}

export default QuizHome;