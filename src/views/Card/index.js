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
          <div class="shoppingTrolley-box">
            <ul class="list-ul">
              <li class="list-info">
                <span class="filmname">影片名称</span>
                <span class="price">单价</span>
                <span class="change-film-num">数量</span>
              </li>
              <li>
                <span class="filmname">海王</span>
                <span class="price">￥<i>100</i></span>
                <span class="change-film-num">
                  <i class="reduce-film">-</i>
                  <span class="film-num">1</span>
                  <i class="add-film">+</i>
                </span>
              </li>
            </ul>
            <div class="buy">
              <p>合计：<i>0</i>元</p>
              <p>结算</p>
            </div>
          </div>
        </div>
        <WhiteSpace size="lg" />
        <div className='price-block'>
          <Button type="primary">确定支付</Button>
        </div>
      </div>
    )
  }
}
