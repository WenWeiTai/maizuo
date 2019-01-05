import React, { Component } from 'react';
import './index.less';
import axios from 'axios';

class front extends Component {
    constructor(props) {
        super(props)
        this.state = {
            superdata: [],
            superdataColo: [],
            srarch:this.props.sea
        }
    }
    SeAe = (sea) => {
        let searc = [];
        searc = this.state.superdataColo.filter(item => {
            return item.nm.indexOf(sea) > -1;
        })
        this.setState({
            superdata: searc
        })
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.sea) {
            this.SeAe(nextProps.sea);
        } else {
            this.setState({
                superdata: this.state.superdataColo
            })
        }
    }

    componentDidMount() {
        axios.get('./ss-detail/cinema.json').then((res) => {
            this.setState({
                superdataColo: res.data.cinemas,
                superdata: res.data.cinemas
            })
        })
    }
    render() {
        return (
        <div className="ss-my-front">
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
                                                    return (<div key={keys} className={keys} >退</div>)
                                                }
                                            }
                                            else if(keys === 'buyout') {
                                                if(item.tag[keys] !== 0){
                                                    return (<div key={keys} className={keys} >买</div>)
                                                }
                                            }
                                            else if(keys === 'cityCardTag') {
                                                if(item.tag[keys] !== 0){
                                                    return (<div key={keys} className={keys} >信用卡</div>)
                                                }
                                            }
                                            else if(keys === 'deal') {
                                                if(item.tag[keys] !== 0){
                                                    return (<div key={keys} className={keys} >退</div>)
                                                }
                                            }
                                            else if(keys === 'endorse') {
                                                if(item.tag[keys] !== 0){
                                                    return (<div key={keys} className={keys} >改签</div>)
                                                }
                                            }
                                            else if(keys === 'hallType') {
                                                if(item.tag[keys] !== []) {
                                                    return (<div key={keys} className={keys}>{item.tag[keys]}</div>)
                                                }
                                            }
                                            else if(keys === 'vipTag') {
                                                if(item.tag[keys] !== []) {
                                                    return (<div key={keys} className={keys}>折扣卡</div>)
                                                }
                                            }
                                            else if(keys === 'snack') {
                                                if(item.tag[keys] !== []) {
                                                    return (<div key={keys} className={keys}>小吃</div>)
                                                }
                                            }
                                            return '';
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
