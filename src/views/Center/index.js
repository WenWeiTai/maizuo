import React, { Component } from 'react'

import './index.less';

import Header from '@/src/components/wwt-Header';

class Center extends Component {
  render() {
    return (
      <div className="my-center">
        <Header title={'我的'}></Header>
      </div>
    )
  }
}

export default Center;