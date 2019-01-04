import React, { Component } from 'react';
import './index.less';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CinemaList from '@/components/CinemaList/index.js'

class front extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newdata: {},
            date: [],
            change: 0,
            id: '',
            bool: true
        }
    }
    handleChange(i) {
        console.log(i.index)
        this.setState({
            change: i.index
        })
    }
    hideImg() {
        console.log(this.refs);
        this.setState({
            bool: !this.state.bool
        })
        if(this.state.bool === true) {
            this.refs.detail.style.display="none"
            this.refs.center.classList.add('center')
        } else {
            this.refs.detail.style.display=""
            this.refs.center.classList.remove('center')
        }
    }
    componentDidMount() {
        axios.get('./ss-detail/cinema.json').then((res) => {
            this.setState({
                date: res.data.showDays.dates
            })
        })
        const newId = this.props.location.search.slice(1)
        axios.get('http://10.36.140.90:4000/api/filmid/id',{
            params: {
              id: newId
            }
          }).then((res) => {
            this.setState({
                newdata: res.data.data[0],
                id: newId
            })
        })
    }
    render() {
        return (
        <div className="ss-my-front">
        {/* header */}
            <header className="navbarr">
            <div className="nav-wrap-left">
                <Link to="/films">
                    <i className="icon-back"></i>
                </Link>
            </div>
            <p className="nav-headerr">{this.state.newdata.nm}</p>
            </header>
        {/* detail */}
        <Link to={`/detail?${this.state.id}`}>
            <div className="detail box-flex" ref="detail">
            <div className="poster">
                <img alt="" src={this.state.newdata.img} />
            </div>
            <div className="content flex">
                <div className="title middle line-ellipsis">{this.state.newdata.nm}</div>
                <div className="title-en-name line-ellipsis">SS weilian</div>
                <div className="score line-ellipsis">
                <span>{this.state.newdata.sc}</span>
                </div>
                <div className="type line-ellipsis">
                <span>剧情 喜剧</span>
                <div className="type-group">
                    <img alt="" className="sd-imax" src=""/>
                </div>
                </div>
                <div className="src line-ellipsis">中国大陆/103分钟</div>
                <div className="pubDesc line-ellipsis">{this.state.newdata.rt}上映</div>
            </div>
            <div className="arrow-g">
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC"/>
            </div>
            </div>
        </Link>
        {/* showDays */}
        <div id="showDays">
            <ul id="timeline" className="mb-line-b">
            {
                this.state.date.map((item,index) => {
                    return (
                        <li data-day={item.date} id="showDay" className={ index===this.state.change?"chosen":null} onClick={this.handleChange.bind(this,{index})} key={index}>
                                {item.date}
                        </li>
                    )
                })
            }
            </ul>
            </div>
        {/* nav-wrap */}
            <div className="nav-wrap filter-nav-wrap" onClick = {this.hideImg.bind(this)}>
                <div className="tab mb-line-b">
                        <div className="item" data-tab=".region">全城<span className="drop"></span></div>
                        <div className="item" data-tab=".brand">品牌<span className="drop"></span></div>
                        <div className="item" data-tab=".special">特色<span className="drop"></span></div>
                </div>
                {/* <div class="close-tab">
                    <div class="tab-content">
                        <div class="page special">
                            <div id="special-content">
                                    <div class="item-title">特色功能</div>
                                    <div class="item-list">
                                        <div class="item chosen" data-id="-1" data-type="service">全部</div>
                                        <div class="item" data-id="4" data-type="service">会员卡</div>
                                        <div class="item" data-id="3" data-type="service">可改签</div>
                                        <div class="item" data-id="2" data-type="service">可退票</div>
                                    </div>
                                    <div class="item-title">特殊厅</div>
                                    <div class="item-list">
                                        <div class="item chosen" data-id="-1" data-type="hallType">全部</div>
                                        <div class="item" data-id="2" data-type="hallType">IMAX厅</div>
                                    </div>
                            </div>
                            <div id="special-btn">
                                <span class="btn" id="cancel-btn">重置</span>
                                <span class="btn" id="confirm-btn">确定</span>
                            </div>
                        </div>
                        <div class="page brand">
                            <div id="brand-content">
                                    <div class="item brand-list chosen" data-id="-1" data-type="brand">
                                        <span class="brand-name">全部</span>
                                        <span class="brand-count">259</span>
                                    </div>
                                    <div class="item brand-list" data-id="1079568" data-type="brand">
                                        <span class="brand-name">金逸影城</span>
                                        <span class="brand-count">8</span>
                                    </div>
                            </div>
                        </div>
                        <div class="page region">
                                <div id="region-tab">
                                    <ul class="tab">
                                        <li class="item chosen" data-type="region" data-subnav="#district">商区</li>
                                        <li class="item" data-type="region" data-subnav="#subway">地铁站</li>
                                    </ul>
                                </div>
                                <div id="region-list">
                                    <div id="region-sidenav">
                                        <div id="district">
                                            <div class="district-li item chosen" data-type="district" data-id="-1">全部(259)</div>
                                            <div class="district-li item" data-type="district" data-id="32">宝安区(79)</div>
                                        </div>
                                        <div id="subway">
                                            <div class="district-li item chosen" data-type="line" data-id="-1">全部(259)</div>
                                            <div class="district-li item" data-type="line" data-id="150">7号线(38)</div>
                                        </div>
                                    </div>
                                    <div id="region-list-item"></div>
                                    <div class="clearfix"></div>
                                </div>
                        </div>
                    </div>
                </div> */}
                <div ref="center"></div>
            </div>
            <CinemaList></CinemaList>
        </div>
        );
    }
}

export default front;
