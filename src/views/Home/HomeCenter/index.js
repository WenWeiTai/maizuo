import React, { Component } from 'react'

import './index.less';

import Header from '@/components/wwt-Hearder';

import { NavLink } from 'react-router-dom';

class Center extends Component {
  constructor () {
    super ()
    this.state = {
      username: ''
    }
  }
  componentWillMount () {
    this.setState({
      username: localStorage.getItem('islogin') ? '已登录' : '未登录'
    })
  }
  render() {
    return (
      <div className="my-center">
        <Header title='我的'></Header>
        <div className='user'>
          <h1 className='username'>{ this.state.username }</h1>
        </div>
        <div className='container'>
          <div className='group'>
            <div className='mb-outline-tb'>
              <div className='orders'>
                <div className='title'>我的订单</div>
                <div className='list'>
                  <div className='order-item movie'>
                    <NavLink to='/card'>
                      <p>电影</p>
                    </NavLink>
                  </div>
                  <div className='order-item store'>
                    <NavLink to='/card'>
                      <p>商城</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='group'>
            <div className='mb-outline-tb'>
              <div className='coupon item mb-line-b'>
                <NavLink to='/card'>
                  <span>在线观影</span>
                </NavLink>
              </div>
              <div className='coupon item mb-line-b'>
                <NavLink to='/card'>
                  <span>优惠券</span>
                </NavLink>
              </div>
              <div className='coupon item mb-line-b'>
                <NavLink to='/card'>
                  <span>折扣卡</span>
                </NavLink>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Center;