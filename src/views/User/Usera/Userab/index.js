import React, { Component , Fragment} from 'react'
import { Link } from 'react-router-dom';
import './index.less'

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <ul className="zk_subline">
          <li>
            <Link to='/register'>立即注册</Link>
          </li>
          <li>
            <Link to='/'>返回首页</Link>
          </li>
        </ul>
        <div className="copyright">
      <span>© 猫眼电影 客服电话：<a href="1">400-670-5335</a></span>
        </div>
      </Fragment>
    )
  }
}
