import React from 'react';
import Home from './Pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;