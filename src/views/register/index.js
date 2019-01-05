import React, { Component } from 'react';
import './index.less';
import { List, InputItem, Button, WhiteSpace, Toast } from 'antd-mobile';
import { Link } from 'react-router-dom';
import axios from 'axios';

class register extends Component {
  constructor () {
    super ()
    this.state = {
      phone: '',
      code: ''
    }
    this.changePhone = this.changePhone.bind(this)
    this.changeCode = this.changeCode.bind(this)
    this.sendRegister = this.sendRegister.bind(this)
  }

  changePhone (value) {
    this.setState({
      phone: value
    })
  }
  changeCode (value) {
    this.setState({
      code: value
    })
  }
  sendRegister () {
    if (!this.state.phone || !this.state.code) {
      Toast.info('请输入完整再注册', 2);
    } else {
      axios.post('http://129.204.78.99:4000/api/user/register',{
        params: {
          phone: this.state.phone,
          code: this.state.code
        }
      }).then(res => {
        console.log(res)


        if (res.data.code === 0) {
          Toast.info(res.data.msg + '返回登录', 3);
          this.props.history.replace('/login');
        } else {
          Toast.info(res.data.msg, 2);
        }
      })
    }
  }

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
            type='phone'
            value={this.state.phone}
            onChange={this.changePhone}
          ></InputItem>
          <InputItem
            clear
            placeholder="请输入密码"
            value1={this.state.code}
            onChange={this.changeCode}
            type='password'
          ></InputItem>
        </List>
        <WhiteSpace />
        <Button type="primary" onClick={this.sendRegister}>注册</Button><WhiteSpace />
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
