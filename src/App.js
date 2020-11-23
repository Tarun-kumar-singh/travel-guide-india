import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import SearchByCityDispaly from './component/searchByCityDispaly';
import DisplayQuestion from "./component/quiz-question/displayQuestions";
import Question from "./component/quiz-question/question";
import QuizHome from "./component/quiz-question/quiz-home";

function App() {

  return (
      <Router>
        <Switch>
        <Route exact path='/' component={SearchByCityDispaly}></Route> 
        <Route exact path='/quiz-question' component={DisplayQuestion}></Route> 
        <Route exact path='/quiz-question-2' component={QuizHome}></Route> 

      </Switch>
      </Router>
  );
}

export default App;
