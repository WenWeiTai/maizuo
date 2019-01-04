import React, { Component } from 'react'
import './index.less';

import { NavBar} from 'antd-mobile';
// import { StickyContainer, Sticky } from 'react-sticky';
import Usera from './Usera/inde';
class User extends Component {
  constructor (props) {
    super (props)
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
          // icon={<Icon type="left" />}
          onClick={this.goback}
        >猫眼电影</NavBar>
      <div>
      </div>
      <Usera {...this.props}></Usera>
      </div>
    )
  }
}

export default User;
