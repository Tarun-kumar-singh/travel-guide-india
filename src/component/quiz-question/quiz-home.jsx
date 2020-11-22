import React, { useState, useEffect } from 'react';
import Questions from "../../DemoData/question";
import Question from "./question";
import Option from "./option";

const QuizHome = () => {

    const [qno, setQno] = useState(0) 
    const checkOption = (item) => {
    console.log(item)
    setQno(1)
    }
    return(
        <div>
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
    )
}

export default QuizHome;