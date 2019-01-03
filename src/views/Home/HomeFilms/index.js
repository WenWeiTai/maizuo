import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import LyjHeadBar from '@/components/HeadBar';
import LyjFootBar from '@/components/FootBar';
import axios from 'axios';

class LyjHome extends React.Component{
  constructor (props) {
    super (props)
    this.state = {
      pageNum: 1, //当前页码
      pageSize: 5, //当前页数
      totalPage: 0, //总页数
      films:[],
      tatal: 0,

      loadMoreText: "点击加载...",
      tabs: [
        { id: 'films', name: '电影', href: '/films',icon:'iconfont-dianying1'},
        { id: 'cinema', name: '影院', href: '/cinema',icon:'iconfont-yingyuana'},
        { id: 'center', name: '我的', href: '/center',icon:'iconfont-wode'},
      ]
    }
  }


  // 组件挂载完成
  componentDidMount() {
    axios.get('http://10.36.140.90:4000/api/film/list',{
      params: {
        // 第二个参数是get请求的参数
        pageNum: this.state.pageNum,
        pageSize: this.state.pageSize
      }

    }).then(res=>{
      this.setState({
        films: res.data.data.film
      })
      console.log(res.data.data.film);
      console.log(this.state.films);

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
                        <span>深圳</span>
                        <i className="iconfont iconfont-arr_D"></i>
                    </Link>
                </div>

                <div className="lyj-filmsList">
                  <ul>
                    <li>正在热映</li>
                    <li>即将上映</li>
                  </ul>
                </div>

                <div className='lyj-filmsSearch'>
                  <Link to='/search?filmId'>
                      <i className="iconfont iconfont-magnifier"></i>
                  </Link>
                </div>
            </div>

            <div className="lyj-cityList">
                {
                  this.state.films.map((item,index) => {
                      return (
                        <Link to='/front?'>
                        <div className='ljy-List' key={index}>
                        <img src={item.img} alt="" />
                        <div className='lyj-filmsDetails'>
                          <div className='lyj-detailsList'>
                          <div className="lyj-title">
                            <h2>{item.nm}</h2>

                            <div className="lyj-3dBox">
                                <div className="lyj3d">{`${item.showst}D`}</div>
                                <div className="lyjIMAX">IMAX</div>
                            </div>
                          </div>

                          <p className="p1">观众评<span>{item.sc}</span></p>
                          <p className="p2">{`主演 : ${item.star}`}</p>
                          <p className="p3">{item.showInfo}</p>

                          </div>

                          <div className='lyj-gouPiao'>
                            <div className="gouPiao">购票</div>
                          </div>
                        </div>

                      </div>
                      </Link>

                       )
                  })
                }
            </div>
            <p className="p4">{this.state.loadMoreText}</p>
        </div>
        <LyjFootBar tabs={this.state.tabs}></LyjFootBar>
      </Fragment>
    )
  }
}
export default LyjHome;
