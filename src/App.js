import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './component/Header'
import Home from './component/pages/Home'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
