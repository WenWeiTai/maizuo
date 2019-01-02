import React, { Component } from 'react'
import Header from '@/components/wwt-Hearder'
import { Button, WhiteSpace } from 'antd-mobile';
import './index.less';

export default class Card extends Component {
  render() {
    return (
      <div className='card'>
        <Header title='购物车'></Header>
        <WhiteSpace size="lg" />
        <div className='card-item'>
          购物车内容
        </div>
        <WhiteSpace size="lg" />
        <div className='price-block'>
          <Button type="primary">确定支付</Button>
        </div>
      </div>
    )
  }
}
