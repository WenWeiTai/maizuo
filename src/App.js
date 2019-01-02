import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './styles/base.less';
import LyjHome from './views/Home/HomeFilms';

class App extends React.Component {

  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/movie" component={ LyjHome }></Route>
            <Redirect to="/movie"></Redirect>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
