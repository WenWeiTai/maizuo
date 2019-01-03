import React, { Component } from 'react'

import './index.less';

import Header from '@/components/wwt-Hearder';

class Center extends Component {
  render() {
    return (
      <div className="my-center">
        <Header title='我的'></Header>
        <div className='user'>
          <img alt=""/>
        </div>
        <div className='container'>
          <div className='group'>
            <div className='mb-outline-tb'>
              <div className='orders'>
                <div className='title'>我的订单</div>
                <div className='list'>
                  <div className='order-item movie'>
                    <a href="javascript:;"><p>电影</p></a>
                  </div>
                  <div className='order-item store'>
                    <a><p>商城</p></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='group'>
            <div className='mb-outline-tb'>
              <div className='coupon item mb-line-b'>
                <a>
                  <span>在线观影</span>
                </a>
              </div>
              <div className='coupon item mb-line-b'>
                <a>
                  <span>优惠券</span>
                </a>
              </div>
              <div className='coupon item mb-line-b'>
                <a>
                  <span>折扣卡</span>
                </a>
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