import React, { useState, useEffect } from 'react';
import Questions from "../../DemoData/question";
import Question from "./question";
import Option from "./option";
import SnackBar from "./snackBar";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "../lightMode/globalStyles";
import { lightTheme, darkTheme } from "../lightMode/theme"
const QuizHome = () => {
    const [theme, setTheme] = useState('dark');
    const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
  }
    const [qno, setQno] = useState(0) 
    const checkOption = () => {
        if(qno === 1){
            return
        }
        setQno(qno+1)
    }
    return(
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>

            <div>
            <SnackBar
                />
         <Question
            question={Questions[qno].question}
        />

        {
            Questions[qno].options.map((el, index) => {
               return (
                        <Option
                        key={index}
                         item={el}
                         checkOption={checkOption}
                        />
                    )
            })
        }
       
        </div>
        </ThemeProvider>
    )
}

export default QuizHome;