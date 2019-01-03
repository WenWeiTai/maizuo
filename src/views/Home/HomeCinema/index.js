import React, { Component } from 'react'
import './index.less';
import Header from '@/components/wwt-Hearder';
import { SearchBar } from 'antd-mobile';

export default class Cinema extends Component {
  render() {
    return (
      <div className='cinema'>
        <Header title='影院'></Header>
        <SearchBar placeholder="搜影院" maxLength={16} />
      </div>
    )
  }
}
