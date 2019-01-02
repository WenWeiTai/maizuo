import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import City from './views/City'
import './styles/base.less';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Route path="/city" component={City}></Route>
      </Router>
    )
  }
}

export default App;
