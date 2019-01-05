import React,{ Fragment } from 'react';
import './index.less';
import LyjHeadBar from '@/components/HeadBar';
import NowPlaying from '@/components/NowPlaying';
import SoonPlaying from '@/components/SoonPlaying';
import CityFilms from '@/components/CityFilms';
import { Tabs, WhiteSpace } from 'antd-mobile';
import axios from 'axios';
import store from '@/store';
import { Toast } from 'antd-mobile';



class LyjHome extends React.Component{
  constructor (props) {
    super (props)
    this.state = {
      pageNum: 1,    //当前页码
      pageSize: 5,   //当前页数
      totalPage: 0,  //总页数
      films:[],      //电影数据

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
    this.loadMore = this.loadMore.bind(this);
  }
  // 组件销毁取消监听
  componentWillUnmount () {
    this.unsubscribe()
  }

  // 组件挂载完成，调用ajax请求
  componentDidMount() {
    this.getFilmName();
  }


  getFilmName() {
    Toast.loading('加载中..',0.5);
    axios.get('http://129.204.78.99:4000/api/film/list',{
     params: {
       pageNum: this.state.pageNum,
       pageSize: this.state.pageSize
     }

   }).then(res =>{
     let result = res.data;

     this.setState(() => ({
      // Math.ceil:想上取整(数据库的总页数/当前页数)
       totalPage: Math.ceil(result.data.tatal / this.state.pageSize)
     }))

     if(this.state.pageNum >= this.state.totalPage) {
          this.setState(() => ({
            loadMoreText: this.loadMoreText = '别拉了，我是有底线的...'
          }))
     }
     if(result.code === 0 ) {

          this.setState(() => ({
            // 原数组保存，和追加(concat：数组方法)
            films: this.state.films.concat(result.data.film)
          }))

    } else {
     alert(result.msg);
   }

 })
}


  // 点击加载更多
  loadMore() {
    // 当前页码小于总页数,就对当前页码加 1
    if(this.state.pageNum < this.state.totalPage){
        this.state.pageNum++;
        this.getFilmName();//点击加载更多，调用ajax请求
    }
  }

  render() {
    return (
      <Fragment>
          <LyjHeadBar></LyjHeadBar>
        <div className="lyj-homeFilm">
           <CityFilms tabs={this.state.tabs} curCity={this.state.curCity}></CityFilms>

            <div>
                <WhiteSpace />
                <Tabs tabs={this.state.tabs} initialPage={0} animated={false} useOnPan={false} swipeable={false}>

                  <div style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                     {/* 传递组件的props 过去 */}
                      <NowPlaying {...this.props} films={this.state.films}></NowPlaying>
                  </div>
                  <div style={{ alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                      <SoonPlaying films={this.state.films}></SoonPlaying>
                  </div>
                </Tabs>
                <WhiteSpace />
              </div>
            <p className="p4" onClick={this.loadMore}>{this.state.loadMoreText}</p>
        </div>

      </Fragment>

    )
  }
}
export default LyjHome;
