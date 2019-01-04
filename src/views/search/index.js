import React, { Component } from 'react'
import './index.less'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import { Toast } from 'antd-mobile'
export default class index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Moveval:[],
      useData:[],
      iptval:''
    }
  }
  gotoNext(){
    this.props.history.goBack()
  }
  tipS() {
    Toast.loading('Loading',1.5)
  }
  componentDidMount () {
    this.tipS();
    axios.get('./sy.json')
    .then(res=>{
      this.setState({Moveval:res.data})
     // console.log(this.state.Movevalat);
    })
  }
  SeAe = (sea) => {
    let searc = [];
    //console.log(sea)
    searc = this.state.Moveval.filter(item => {
        return item.nm.indexOf(sea) > -1;
    })
    this.setState({
      useData: searc
    })
}
  onChange (e) {
    let newValue = e.target.value;
    this.setState({iptval: newValue});
    this.SeAe(newValue);
  }
  onDelte () {
    this.refs.xxx.value = ''
    this.state.iptval = ''
  }
  render() {
    return (
      <div className="search">
        <header>
          <NavLink to="/movie" className="nav-wrap-left"><i className="iconfont iconfont-zuojiantou"></i></NavLink>
          <h1 className="nav-header">猫眼电影</h1>
        </header>
        <div className="main">
          <div className="search-header">
            <div className="ipt-wrapper">
              <i className="iconhead iconfont iconfont-magnifier"></i>
              <input type="text" className="search-ipt" onChange={this.onChange.bind(this)} placeholder="搜电影、搜影院" ref="xxx"/>
              <div className={this.state.iptval === ''? "haha":"icon-rex"} onClick={this.onDelte.bind(this)}>
                <i className="iconfoot iconfont iconfont-del2"></i>
              </div>
            </div>
            <div className="cancel" onClick={this.gotoNext.bind(this)}>取消</div>
          </div>
        </div>
        <div className="hot-search">
          <h3>热门搜索</h3>
          <div className="hot-movies-wrap"></div>
        </div>
        <div className={this.state.iptval === ''? "haha":'search-result'}>
          <h3>电影/电视剧/综艺</h3>
          <div className="list">
          {
          this.state.useData.map((item,index) => {
            return (
              <div className="movie cell" key={index}>
                <img src={item.img} alt=""/>
                <div className="info">
                  <div className="name-score">
                    <h4>{item.nm}</h4>
                    <span className="score">
                      <span>{item.sc}</span>
                    </span>
                  </div>
                  <div className="detail-section">
                    <div className="detail-items">
                      <p className="ename">主演: {item.star}</p>
                      <p className="catogary">{item.showInfo}</p>
                      <p className="release">{item.rt}</p>
                    </div>
                    <div className="wantlock">想看</div>
                  </div>
                </div>
              </div>
            )
          })
        }
          </div>
          <div className="more-movies">查看全部2112部影视剧</div>
        </div>
      </div>
    )
  }
}
