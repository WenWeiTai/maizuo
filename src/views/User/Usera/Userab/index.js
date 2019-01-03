import React, { Component , Fragment} from 'react'
import './index.less'

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <ul className="zk_subline">
        <li>
          <a href="1">立即注册</a>
        </li>
        <li>
        <a href="1">找回密码</a>
        </li>
        </ul>
        <div className="copyright">
      <span>© 猫眼电影 客服电话：<a href="1">400-670-5335</a></span>
        </div>
      </Fragment>
    )
  }
}
