import React, { Component } from 'react';
import './index.less';

class register extends Component {
  render() {
    return (
      <div className="ss-reg">
        <header className="navbarr">
          <div className="nav-wrap-left">
            <span className="iconz iconfont">&#xe659;</span>
          </div>
          <h1 className="nav-header">猫眼电影</h1>
        </header>
        <form method="" action="" className="reg-form">
          <dl className="list">
          <dd className="dd-padding">
            <ol className="crumbs">
              <li className="active item">输入手机号</li>
              <li className="item">输入验证码</li>
              <li className="item">设置密码</li>
            </ol>
          </dd>
        </dl>
          <div className="center"></div>
          <dl className="listt">
            <dd className="dd-padding">
              <input className="input" placeholder="请输入" />
            </dd>
          </dl>
          <p className="btn-wrapper">
              <label>
                  <input className="term" type="checkbox" />
                  我已阅读并同意
                  <a className="iti" href="//i.meituan.com/about/terms">《美团网用户协议》</a>
              </label>
          </p>
          <div className="btn-wrapper">
              <button type="submit" className="btn btn-block btn-larger">获取验证码</button>
          </div>
        </form>
        <div className="copyright">
          <span className="copyright">
            © 猫眼电影 客服电话：
            <a data-evt="ft/hotline" href="tel:4006705335">400-670-5335</a>
          </span>
        </div>
        <div className="wright"></div>
      </div>
    );
  }
}

export default register;
