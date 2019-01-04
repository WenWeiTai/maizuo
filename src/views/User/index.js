import React, { Component } from 'react'
import './index.less';

import { NavBar, Icon} from 'antd-mobile';
// import { StickyContainer, Sticky } from 'react-sticky';
import Usera from './Usera/inde';
class User extends Component {
  constructor () {
    super ()
    this.goback = this.goback.bind(this);
  }

  goback () {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onClick={this.goback}
        >猫眼电影</NavBar>
      <div>
      </div>
      <Usera></Usera>
      </div>
    )
  }
}

export default User;
