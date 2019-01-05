import { Tabs, WhiteSpace } from 'antd-mobile';
import React, { Component } from 'react'
import { List, InputItem, Button, Toast } from 'antd-mobile';
import './index.less';
import Userb from './Userab';
import axios from 'axios';
import store from '@/store';

export default class usera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { title: '美团账号登录' },
        { title: '手机验证登录' }
      ],
      phone: '',
      code: ''
    }
    this.changePhone = this.changePhone.bind(this)
    this.changeCode = this.changeCode.bind(this)
    this.login = this.login.bind(this);
  }

  login () {
    // this.props.history.replace('/card')
    // return
    if (!this.state.phone || !this.state.code) {
      Toast.info('请输入完整信息', 2);
    } else {
      axios.post('http://129.204.78.99:4000/api/user/login',{
        params: {
          phone: this.state.phone,
          code: this.state.code
        }
      }).then(res => {
        console.log(res)


        if (res.data.code === 0) {
          // 登录成功
          Toast.info(res.data.msg, 3);
          // 将登录成功的状态存到localStorage
          localStorage.setItem('islogin',true)
          // 修改仓库的登录状态
          store.dispatch({
            type: 'SET_LOGIN',
            name: true
          })

          this.props.history.replace('/card');
        } else {
          Toast.info(res.data.msg, 2);
        }
      })
    }
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

  render() {
    return (
      <div>
        <WhiteSpace />
        <Tabs tabs={this.state.tabs} initialPage={0} animated={false} useOnPan={false}>
          <div className="zk_userk" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <List>
              <InputItem
                clear
                placeholder="账户名/手机号/Email"
                type='phone'
                value={this.state.phone}
                onChange={this.changePhone}
              ></InputItem>
              <InputItem
                clear
                placeholder="请输入您的密码"
                type='password'
                value1={this.state.code}
                onChange={this.changeCode}
              ></InputItem>
              <Button type="warning" onClick={this.login}>登录</Button><WhiteSpace />
            </List>
            <Userb></Userb>
          </div>
          <div className="zk_userk" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <List>
              <InputItem
                clear
                placeholder="手机号"
              ></InputItem>
              <InputItem
                clear
                placeholder="请输入您的密码"
              ></InputItem>
              <Button type="warning">登录</Button><WhiteSpace />
            </List>
            <Userb></Userb>
          </div>
        </Tabs>
        <WhiteSpace />
      </div>
    )
  }
}
