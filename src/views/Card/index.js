import React, { Component } from 'react'
import Header from '@/components/wwt-Hearder'
import { Button, WhiteSpace } from 'antd-mobile';
import './index.less';
import store from '@/store'

class Card extends Component {
  componentWillMount () {
    // 获取仓库的islogin，false为未登录，ture为登录
    console.log(store.getState().isLogin.islogin)
    if (!store.getState().isLogin.islogin) {
      this.props.history.replace('/login')
    }
  }

  render() {
    return (
      <div className='card'>
        <Header title='购物车'></Header>
        <WhiteSpace size="lg" />
        <div className='card-item'>
          <div className="shoppingTrolley-box">
            <ul className="list-ul">
              <li className="list-info">
                <span className="filmname">影片名称</span>
                <span className="price">单价</span>
                <span className="change-film-num">数量</span>
              </li>
              <li>
                <span className="filmname">海王</span>
                <span className="price">￥<i>100</i></span>
                <span className="change-film-num">
                  <i className="reduce-film">-</i>
                  <span className="film-num">1</span>
                  <i className="add-film">+</i>
                </span>
              </li>
              <li>
                <span className="filmname">海王</span>
                <span className="price">￥<i>100</i></span>
                <span className="change-film-num">
                  <i className="reduce-film">-</i>
                  <span className="film-num">1</span>
                  <i className="add-film">+</i>
                </span>
              </li>
            </ul>
            <div className="buy">
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


export default Card;