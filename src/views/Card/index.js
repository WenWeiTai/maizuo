import React, { Component } from 'react'
import Header from '@/components/wwt-Hearder'
import { Button, WhiteSpace } from 'antd-mobile';
import './index.less';
import store from '@/store'

class Card extends Component {
  constructor () {
    super ()
    this.state = {
      dataArr: ''
    }
    this.addShop = this.addShop.bind(this);
  }
  componentWillMount () {
    // 获取仓库的islogin，false为未登录，ture为登录
    console.log(store.getState().isLogin.islogin)
    if (!store.getState().isLogin.islogin) {
      this.props.history.replace('/login')
    }

    let arr = store.getState().shopCard;
    console.log(arr);
    this.setState({
      dataArr: arr
    })
  }

  // 增加
  addShop () {
    
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
              {
                this.state.dataArr.map( (item, index) => {
                  return (
                  <li key={index}>
                    <span className="filmname">{item.name}</span>
                    <span className="price">￥<i>{item.price}</i></span>
                    <span className="change-film-num">
                      <i className="reduce-film">-</i>
                      <span className="film-num">{item.num}</span>
                      <i className="add-film" onClick={this.addShop}>+</i>
                    </span>
                  </li>
                  )
                })
              }
            </ul>
            <div className="buy">
              <p>合计：<i>0</i>元</p>
              <p>结算</p>
            </div>
          </div>
        </div>
        <WhiteSpace size="lg" />
        <div className='price-block'>
          <Button type="primary" onClick={()=>{this.props.history.goBack()}}>确定支付</Button>
        </div>
      </div>
    )
  }
}


export default Card;