import React, { Component } from 'react'
import './index.less';

import { NavBar, Icon} from 'antd-mobile';
// import { StickyContainer, Sticky } from 'react-sticky';
import Usera from './Usera/inde';
export default class User extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          // rightContent={[
          //   <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          //   <Icon key="1" type="ellipsis" />,
          // ]}
        >猫眼电影</NavBar>
      <div>
      </div>
      <Usera></Usera>
      </div>
    )
  }
}
