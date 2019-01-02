import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import City from './views/City'
import Front from '@/views/DetailFront/index.js'
import './styles/base.less';
import LyjHome from './views/Home/HomeFilms';

class App extends React.Component {
  // constructor () {
  //   super ()
  // }

  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/movie" component={ LyjHome }></Route>
            <Route path="/city" component={City}></Route>
            <Redirect to="/movie"></Redirect>
          </Switch>
        </Router>
        {/* <Front></Front> */}
      </div>
    )
  }
}

export default App;
