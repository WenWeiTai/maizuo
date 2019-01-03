import { Tabs, WhiteSpace } from 'antd-mobile';
import React, { Component } from 'react'
import { List, InputItem, Button } from 'antd-mobile';
// import { createForm } from 'rc-form';
import './index.less';
import Userb from './Userab';

export default class usera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { title: '美团账号登录' },
        { title: '手机验证登录' }
      ]
    }
  }
  render() {
    return (
      <div>
        <WhiteSpace />
        <Tabs tabs={this.state.tabs} initialPage={0} animated={false} useOnPan={false}>
          <div className="zk_userk" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <List>
              <InputItem
                // {...getFieldProps('autofocus')}
                clear
                placeholder="账户名/手机号/Email"
                ref={el => this.autoFocusInst = el}
              ></InputItem>
              <InputItem
                // {...getFieldProps('autofocus')}
                clear
                placeholder="请输入您的密码"
                ref={el => this.autoFocusInst = el}
              ></InputItem>
              <Button type="warning" disabled>登录</Button><WhiteSpace />
            </List>
            <Userb></Userb>
          </div>
          <div className="zk_userk" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <List>
              <InputItem
                // {...getFieldProps('autofocus')}
                clear
                placeholder="手机号"
                ref={el => this.autoFocusInst = el}
              ></InputItem>
              <InputItem
                // {...getFieldProps('autofocus')}
                clear
                placeholder="请输入您的密码"
                ref={el => this.autoFocusInst = el}
              ></InputItem>
              <Button type="warning" disabled>登录</Button><WhiteSpace />
            </List>
            <Userb></Userb>
          </div>
        </Tabs>
        <WhiteSpace />
      </div>
    )
  }
}


