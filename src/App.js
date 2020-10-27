import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import SearchByCityDispaly from './component/searchByCityDispaly';
import ResponsiveDrawer from "./component/sideDrawer";

function App() {
  
  return (
      <Router>
        <Switch>
        <Route exact path='/' component={SearchByCityDispaly}></Route> 
        <Route exact path='/sideDrawer' component={ResponsiveDrawer}></Route> 

      </Switch>
      </Router>
  );
}

export default App;
