import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Movies from './components/Movies';
import Movie from './components/Movie';
import NoMatch from './components/NoMatch';

const App = () => (
  <div className="ui grid">
    <div className="four wide column">
      <NavBar />
    </div>
    <Switch>
      <div className="stretched twelve wide column">
        <div className="ui segment">
          <div className="ui container">
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/movies"
              component={Movies}
            />
            <Route
              exact
              path="/movies/:id"
              component={Movie}
            />
          </div>
        </div>
      </div>
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
