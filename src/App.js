import React, { useState } from 'react';
import Nav from './Components/Nav';
// import UserInput from './Components/UserInput';
import Home from './Pages/Home';
import Flours from './Pages/Flours';
import Recipes from './Pages/Recipes';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/flour-calculator' component={Flours}></Route>
          <Route exact path='/recipes' component={Recipes}></Route>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;