import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './component/Header'


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
