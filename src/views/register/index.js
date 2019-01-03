import React, { Component } from 'react';
import './index.less';
import { List, InputItem, Button, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';

class register extends Component {
  render() {
    return (
      <div className="ss-reg">
        <header className="navbarr">
          <div className="nav-wrap-left">
            <Link to='/login'>
              <span className="iconz iconfont">&#xe659;</span>
            </Link>
          </div>
          <h1 className="nav-header">猫眼电影</h1>
        </header>
        <List>
          <InputItem
            clear
            placeholder="请输入手机号"
          ></InputItem>
          <InputItem
            clear
            placeholder="请输入密码"
          ></InputItem>
        </List>
        <WhiteSpace />
        <Button type="primary">注册</Button><WhiteSpace />
        <div className="copyright">
          <span className="copyright">
            © 猫眼电影 客服电话：
            <a data-evt="ft/hotline" href="tel:4006705335">400-670-5335</a>
          </span>
        </div>
      </div>
    );
  }
}

export default register;
