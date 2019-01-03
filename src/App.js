import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from './store';
import City from './views/City'
import Front from '@/views/DetailFront/index.js'
import Zk_Deraul from './views/Detail';
import './styles/base.less';
import LyjHome from './views/Home/HomeFilms';
import Center from './views/Center';
import Card from './views/Card';
import Cinema from './views/Cinema';
import user from './views/User';

class App extends React.Component {

  // 百度定位当前城市
  componentWillMount () {
    /* eslint-disable */
    var myCity = new BMap.LocalCity();
    myCity.get((result) => {
      let name = result.name.substr(0, result.name.length - 1);
      store.dispatch({
        type: 'SET_CURCITY',
        name
      })
      console.log('百度接口定位到当前城市为：',store.getState().city.curCity)
    })
  }

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
            <Route path="/cinema" component={Cinema}></Route>
            <Route path="/user" component={user}></Route>
            <Redirect to="/movie"></Redirect>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
