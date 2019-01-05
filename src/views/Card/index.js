import React, { Component } from 'react'
import Header from '@/components/wwt-Hearder'
import { Button, WhiteSpace } from 'antd-mobile';
import './index.less';
import store from '@/store'

class Card extends Component {
  constructor () {
    super ()
    this.state = {
      dataArr: localStorage.getItem('shopCard') ? JSON.parse(localStorage.getItem('shopCard')) : [],
      total: 0,
      num: 0
    }

    // 监听仓库更新
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        dataArr: localStorage.getItem('shopCard') ? JSON.parse(localStorage.getItem('shopCard')) : []
      })
    })

  }
  componentWillMount () {
    // 获取仓库的islogin，false为未登录，ture为登录
    if (!store.getState().isLogin.islogin) {
      this.props.history.replace('/login')
    }
  }

  // 销毁监听
  componentWillUnmount () {
    this.unsubscribe()
  }

  // 增加
  addShop (index) {

    let storeState = store.getState().shopCard

    ++storeState[index].filmNum

    store.dispatch({
      type: 'SET_ADD',
      obj: storeState
    })
  }

  // 减少
  reduceShop (index) {
    let storeState = store.getState().shopCard

    --storeState[index].filmNum

    // 当数量为0时，删除影片
    if (storeState[index].filmNum === 0) {
      storeState.splice(index, 1)
    }

    store.dispatch({
      type: 'SET_ADD',
      obj: storeState
    })
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
                    <span className="filmname">{item.filmName}</span>
                    <span className="price">￥<i>{item.filmPrice}</i></span>
                    <span className="change-film-num">
                      <i className="reduce-film" onClick={this.reduceShop.bind(this, index)}>-</i>
                      <span className="film-num">{item.filmNum}</span>
                      <i className="add-film" onClick={this.addShop.bind(this, index)}>+</i>
                    </span>
                  </li>
                  )
                })
              }
            </ul>
            <div className="buy">
              <p>合计：<i>{ this.state.total }</i>元</p>
            </div>
          </div>
        </div>
        <WhiteSpace size="lg" />
        <div className='price-block'>
          <Button type="primary" onClick={()=>{this.props.history.push('/')}}>确定支付</Button>
        </div>
      </div>
    )
  }
}

export default Card;