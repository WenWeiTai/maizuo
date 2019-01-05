import React, { Component } from 'react';
import './index.less';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CinemaList from '@/components/CinemaList/index.js'
import { Toast } from 'antd-mobile';


class front extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newdata: {},
            date: [],
            change: 0,
            id: '',
            bool: true,
            FalseData: ['全城','品牌','特色']
        }
    };
    loadingToast() {
        Toast.loading('Loading...', 1, () => {
          console.log('Load complete !!!')
    })}

    handleChange (i) {
        this.setState({
            change: i.index
        })
    }
    componentDidMount() {
        this.loadingToast()
        axios.get('./ss-detail/cinema.json').then((res) => {
            this.setState({
                date: res.data.showDays.dates
            })
        });
        axios.get('./ss-detail/data.json').then((res) => {
            // this.setState({
            //     date: res.data.showDays.dates
            // })
        });
        const newId = this.props.location.search.slice(1)
        axios.get('http://129.204.78.99:4000/api/filmid/id',{
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
            <div className="movie-background" style={{
              backgroundImage:`url(${this.state.newdata.img})`
            }} data-reactid=".232835nktzi.4.0.0.0"></div>
            <div className="movie-background"></div>
            <div className="movie-filter" data-reactid=".1j067h1tq6u.4.0.0.1"></div>
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
            <div className="nav-wrap filter-nav-wrap">
                <div className="tab mb-line-b">
                        {
                            this.state.FalseData.map((item,index) => {
                                return (
                                    <div className="item" key = {index}>
                                        {item}
                                        <span className="drop" ></span>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
            <CinemaList></CinemaList>
        </div>
        );
    }
}

export default front;
