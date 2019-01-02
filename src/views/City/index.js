import React, { Component } from 'react'
import './index.less'
class index extends Component {
  constructor(props){
    super(props);
    this.state={
      Listdata:[
        '定位','最近','热门','A','B','C','D','E',
        'F','G','H','I','J','K','L','M','N','O','P','Q',
        'R','S','T','U','V','W','X','Y','Z'
      ]
    }
  }
  render() {
    return (
      <div className="rxd-city">
        <section>
          <div className="locate">定位城市</div>
          <div className="city-list">
            <div className="location-city">定位失败，请点击重试</div>
          </div>
        </section>
        <div className="history-city-list">
          <div id="history">最近访问过的城市</div>
          <div className="city-list-inline">
            <div className="city-item">北京</div>
            <div className="city-item">上海</div>
            <div className="city-item">广州</div>
          </div>
        </div>
        <div className="hotcity">
          <div className="hot">热门城市</div>
          <div className="city-list-inline">
            <div className="city-item">上海</div>
            <div className="city-item">北京</div>
            <div className="city-item">广州</div>
            <div className="city-item">深圳</div>
            <div className="city-item">武汉</div>
            <div className="city-item">天津</div>
            <div className="city-item">西安</div>
            <div className="city-item">南京</div>
            <div className="city-item">杭州</div>
            <div className="city-item">成都</div>
            <div className="city-item">重庆</div>
          </div>
        </div>
        <div className="city-title">
          <div className="zimu">A</div>
          <ul>
            <li>鞍山</li>
            <li>安阳</li>
            <li>安庆</li>
            <li>安康</li>
            <li>鞍山</li>
            <li>安阳</li>
            <li>安庆</li>
            <li>安康</li>
            <li>鞍山</li>
            <li>安阳</li>
            <li>安庆</li>
            <li>安康</li>
            <li>鞍山</li>
            <li>安阳</li>
            <li>安庆</li>
            <li>安康</li>
          </ul>
        </div>
        <div className="nav">
          <ul>
            {
              this.state.Listdata.map((item,index)=>{
                return (
                  <li className="nav-list" key={index}>
                    {item}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default index;
