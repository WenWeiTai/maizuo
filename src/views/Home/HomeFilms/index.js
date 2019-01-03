import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import LyjHeadBar from '@/components/HeadBar';
import NowPlaying from '@/components/NowPlaying';
import SoonPlaying from '@/components/SoonPlaying';
import { Tabs, WhiteSpace } from 'antd-mobile';
import axios from 'axios';
import store from '@/store';

class LyjHome extends React.Component{
  constructor (props) {
    super (props)
    this.state = {
      pageNum: 1, //当前页码
      pageSize: 5, //当前页数
      totalPage: 0, //总页数
      films:[],
      tatal: 0,
      isShow:false,
      loadMoreText: "点击加载...",
      tabs:[
        { title: '正在上映' },
        { title: '即将上映' }
      ],
      curCity: store.getState().city.curCity
    }
    // 监听仓库当前城市状态
    this.unsubscribe = store.subscribe(() => {
      console.log('主页定位——仓库状态有更新')
      this.setState({
        curCity: store.getState().city.curCity
      })
    })
  }
  // 组件销毁取消监听
  componentWillUnmount () {
    this.unsubscribe()
  }

  // 组件挂载完成
  componentDidMount() {
    axios.get('http://10.36.140.90:4000/api/film/list',{
    // axios.get('http://192.168.1.113:4000/api/film/list',{
      params: {
        // 第二个参数是get请求的参数
        pageNum: this.state.pageNum,
        pageSize: this.state.pageSize
      }

    }).then(res=>{
      this.setState({
        films: res.data.data.film
      })
  })

  }
  render() {
    return (
      <Fragment>
        <LyjHeadBar></LyjHeadBar>
        <div className="lyj-homeFilm">
            <div className="lyj-cityFilmList">
                <div className="lyj-xzCity">
                    <Link to='/city-list'>
                        <span>{ this.state.curCity }</span>
                        <i className="iconfont iconfont-arr_D"></i>
                    </Link>
                </div>
                <div className="lyj-filmsList">
                  <ul>
                    {
                      this.state.tabs.map((item,index) => {
                        return (
                          <li key={index}>{item.title}</li>
                          )
                      })
                    }
                        {/* <li>即将上映</li> */}
                  </ul>
                </div>
                <div className='lyj-filmsSearch'>
                  <Link to='/search?filmId'>
                      <i className="iconfont iconfont-magnifier"></i>
                  </Link>
                </div>
            </div>
            <div>
                <WhiteSpace />
                <Tabs tabs={this.state.tabs} initialPage={0} animated={false} useOnPan={false}>

                  <div style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                      <NowPlaying films={this.state.films}></NowPlaying>
                  </div>
                  <div style={{ alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                      <SoonPlaying films={this.state.films}></SoonPlaying>
                  </div>
                </Tabs>
                <WhiteSpace />
              </div>
            <p className="p4">{this.state.loadMoreText}</p>
        </div>
      </Fragment>
    )
  }
}
export default LyjHome;
