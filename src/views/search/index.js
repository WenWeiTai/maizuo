import React, { Component } from 'react'
import './index.less'
import {NavLink} from 'react-router-dom'
export default class index extends Component {
  render() {
    return (
      <div className="search">
        <header>
          <NavLink to="/movie" className="nav-wrap-left"><i className="iconfont iconfont-zuojiantou"></i></NavLink>
          <h1 className="nav-header">来电狂响</h1>
        </header>
        <div className="main">
          <div className="search-header">
            <div className="ipt-wrapper">
              <i className="iconhead iconfont iconfont-magnifier"></i>
              <input type="text" className="search-ipt" placeholder="搜电影、搜影院" />
              <i className="iconfoot iconfont iconfont-del2"></i>
            </div>
            <div className="cancel">取消</div>
          </div>
        </div>
        <div className="hot-search">
          <h3>热门搜索</h3>
          <div className="hot-movies-wrap"></div>
        </div>
        <div className="search-result">
          <h3>电影/电视剧/综艺</h3>
          <div className="list">
            <div className="movie cell">
              <img src={require('../../images/img1.jpg')} alt=""/>
              <div className="info">
                <div className="name-score">
                  <h4>情圣2</h4>
                  <span className="score">
                    <span>8.9分</span>
                  </span>
                </div>
                <div className="detail-section">
                  <div className="detail-items">
                    <p className="ename">qing sheng 2</p>
                    <p className="catogary">喜剧，爱情</p>
                    <p className="release">2019-02-05</p>
                  </div>
                  <div className="wantlock">想看</div>
                </div>
              </div>
            </div>
          </div>
          <div className="more-movies">查看全部25478部影视剧</div>
        </div>
      </div>
    )
  }
}
