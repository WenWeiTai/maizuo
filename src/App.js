import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import './styles/base.less';
import City from './views/City'
import Rxdsearch from './views/search';
import Front from '@/views/DetailFront/index.js'
import Zk_Deraul from './views/Detail';
import Card from './views/Card';
import Login from './views/User';
import Register from './views/register/index.js';
import Home from './views/Home';

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
      <Router>
        <Switch>
          <Route path="/city-list" component={City}></Route>
          <Route path="/detail" component={Zk_Deraul}></Route>
          <Route path="/front" component={Front}></Route>
          <Route path="/card" component={Card}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/search" component={Rxdsearch}></Route>
          <Route path="/" component={ Home }></Route>
        </Switch>
      </Router>

    )
  }
}

export default App;
