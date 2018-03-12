import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
