import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import City from './views/City'
import Front from '@/views/DetailFront/index.js'
import Zk_Deraul from './views/Detail';
import './styles/base.less';
import LyjHome from './views/Home/HomeFilms';
import Center from './views/Center';
import Card from './views/Card';

class App extends React.Component {

  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/movie" component={ LyjHome }></Route>
            <Route path="/city-list" component={City}></Route>
            <Route path="/detail" component={Zk_Deraul}></Route>
            <Route path="/front" component={Front}></Route>
            <Route path="/center" component={Center}></Route>
            <Route path="/card" component={Card}></Route>
            <Redirect to="/movie"></Redirect>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
