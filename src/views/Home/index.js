import React, { Component } from 'react';
import './index.less';
import { Route, Switch, Redirect } from 'react-router-dom';
import Films from './HomeFilms';
import Cinema from './HomeCinema';
import Center from './HomeCenter';
import LyjFootBar from '@/components/FootBar';

class Home extends Component {
  constructor () {
    super ()
    this.state = {
      tabs1: [
        { id: 'films', name: '电影', href: '/films',icon:'iconfont-dianying1'},
        { id: 'cinema', name: '影院', href: '/cinema',icon:'iconfont-yingyuana'},
        { id: 'center', name: '我的', href: '/center',icon:'iconfont-wode'},
      ]
    }
  }
  render() {
    return (
      <div className='home'>
        <Switch>
          <Route path='/films' component={ Films }></Route>
          <Route path='/cinema' component={ Cinema }></Route>
          <Route path='/center' component={ Center }></Route>
          <Redirect to='/films' component={ Films }></Redirect>
        </Switch>
        <LyjFootBar tabs={this.state.tabs1}></LyjFootBar>
      </div>
    )
  }
}

export default Home;
