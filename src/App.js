import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import SearchByCityDispaly from './component/searchByCityDispaly';
import Editor from "./component/editor";


function App() {
  
  return (
      <Router>
        <Switch>
        <Route exact path='/' component={SearchByCityDispaly}></Route> 
        <Route exact path='/editor' component={Editor}></Route>       

      </Switch>
      </Router>
  );
}

export default App;
