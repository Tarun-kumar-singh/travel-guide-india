import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import SearchByCityDispaly from './component/searchByCityDispaly';
import DisplayQuestion from "./component/quiz-question/displayQuestions";

function App() {
  
  return (
      <Router>
        <Switch>
        <Route exact path='/' component={SearchByCityDispaly}></Route> 
        <Route exact path='/quiz-question' component={DisplayQuestion}></Route> 

      </Switch>
      </Router>
  );
}

export default App;
