import React, { Component } from 'react';
import './index.less';
import axios from 'axios';
import { Link } from 'react-router-dom';

class front extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newdata: {},
            superdata: [],
            date:[]
        }
    }
    componentDidMount() {
        axios.get('./ss-detail/phone.json').then((res) => {
            this.setState({
                newdata: res.data.detailMovie
            })
        })
        axios.get('./ss-detail/cinema.json').then((res) => {
            this.setState({
                superdata: res.data.cinemas,
                date: res.data.showDays.dates
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
            <div className="detail box-flex">
            <div className="poster">
                <img alt="" src="//p1.meituan.net/148.208/movie/a596474c1c29118d908d1eff0fd4293f1017066.jpg" />
            </div>
            <div className="content flex">
                <div className="title middle line-ellipsis">{this.state.newdata.nm}</div>
                <div className="title-en-name line-ellipsis">{this.state.newdata.enm}</div>
                <div className="score line-ellipsis">
                <span>{this.state.newdata.sc}</span>
                </div>
                <div className="type line-ellipsis">
                <span>{this.state.newdata.cat}</span>
                <div className="type-group">
                    <img alt="" className="sd-imax" src=""/>
                </div>
                </div>
                <div className="src line-ellipsis">{this.state.newdata.src}/{this.state.newdata.dur}分钟</div>
                <div className="pubDesc line-ellipsis">{this.state.newdata.pubDesc}</div>
            </div>
            <div className="arrow-g">
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC"/>
            </div>
            </div>
        {/* showDays */}
        <div id="showDays">
            <ul id="timeline" className="mb-line-b">
            {
                this.state.date.map((item,index) => {
                    return (
                        <li data-day={item.date} className="showDay chosen" key={index}>
                                {item.date}
                        </li>
                    )
                })
            }
            </ul>
            </div>
        {/* nav-wrap */}
            <div className="nav-wrap filter-nav-wrap">
            <div className="tab mb-line-b">
                    <div className="item" data-tab=".region">全城<span className="drop"></span></div>
                    <div className="item" data-tab=".brand">品牌<span className="drop"></span></div>
                    <div className="item" data-tab=".special">特色<span className="drop"></span></div>
            </div>
            </div>
        {/* cinema-list */}
            <div className="cinema-list cinema" data-id="1206875" data-date="2019-01-03" >
                <div className="list-wrap">
                {
                    this.state.superdata.map((item,index) => {
                        return (
                            <div className="item mb-line-b" data-id="15406" data-bid="dp_wx_home_cinema_list" key = {index}>
                                <div className="title-block box-flex middle">
                                    <div className="title line-ellipsis">
                                        <span>{item.nm}</span>
                                        <span className="price-blockk">
                                            <span className="price">{item.sellPrice}</span><span className="q">元起</span>
                                        </span>
                                    </div>
                                    <div className="location-block box-flex">
                                        <div className="flex line-ellipsis">{item.addr}</div>
                                        <div className="distance">{item.distance}</div>
                                    </div>
                                    <div className="flex"></div>
                                    <div className="label-block">
                                    {
                                        Object.keys(item.tag).map(keys => {
                                            if(keys === 'allowRefund') {
                                                if(item.tag[keys] !== 0){
                                                    return (<div key="1" className={keys} >退</div>)
                                                }
                                            }
                                            else if(keys === 'buyout') {
                                                if(item.tag[keys] !== 0){
                                                    return (<div key="1" className={keys} >买</div>)
                                                }
                                            }
                                            else if(keys === 'cityCardTag') {
                                                if(item.tag[keys] !== 0){
                                                    return (<div key="1" className={keys} >信用卡</div>)
                                                }
                                            }
                                            else if(keys === 'deal') {
                                                if(item.tag[keys] !== 0){
                                                    return (<div key="1" className={keys} >退</div>)
                                                }
                                            }
                                            else if(keys === 'endorse') {
                                                if(item.tag[keys] !== 0){
                                                    return (<div key="1" className={keys} >改签</div>)
                                                }
                                            }
                                            else if(keys === 'hallType') {
                                                if(item.tag[keys] !== []) {
                                                    return (<div key="1" className={keys}>{item.tag[keys]}</div>)
                                                }
                                            }
                                            else if(keys === 'vipTag') {
                                                if(item.tag[keys] !== []) {
                                                    return (<div key="1" className={keys}>折扣卡</div>)
                                                }
                                            }
                                            else if(keys === 'snack') {
                                                if(item.tag[keys] !== []) {
                                                    return (<div key="1" className={keys}>小吃</div>)
                                                }
                                            }
                                        })
                                    }
                                    </div>
                                    <div className="discount-block">
                                        <div className="discount-label normal card">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt=""/>
                                        </div>
                                        <div className="discount-label-text">23213{item.promotion.cardPromotionTag}</div>
                                    </div>
                                    <div className="min-show-block  disabled  J-fload" data-bid="dp_wx_buy_cinema_list_spread">
                                        <span>近期场次：</span>
                                        <span className="time-line">{item.showTimes}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        {/*  */}
        </div>
        );
    }
}

export default front;
