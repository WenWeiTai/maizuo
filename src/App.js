import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Zk_Deraul from './views/Detail';

import './styles/base.less';

class App extends React.Component {
  render () {
    return (
      <div>
      <Router>
        <Switch>
          <Route path="/detail" component={Zk_Deraul}></Route>
        </Switch>
      </Router>
      </div>
    )
  }
}

export default App;