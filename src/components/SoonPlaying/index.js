import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.less';



class SoonPlaying extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      filmData:[],
      pageNum: 1,    //当前页码
      pageSize: 5,   //当前页数
      totalPage: 0,  //总页数
      filmSoon:[],      //电影数据

    }
  }

  // 电影数据请求方法
  getFilmNameSoon() {
    axios.get('./b.json').then(res =>{
     let result = res.data;
     if(result.code === 0 ) {

          this.setState(() => ({
            // 原数组保存，和追加(concat：数组方法)
            filmSoon: result.data.list
          }))

    } else {
     alert(result.msg);
   }
  //  console.log(this.state.filmSoon);
 })
}

  // 点击加载更多
  // loadMore() {
  //   // 当前页码小于总页数,就对当前页码加 1
  //   if(this.state.pageNum < this.state.totalPage){
  //       this.state.pageNum++;
  //       this.getFilmName();//点击加载更多，调用ajax请求
  //   }
  // }

  // 组件创建方法调用
  componentDidMount() {
    this.addPreview();
    this.getFilmNameSoon();
  }

// 加载横向的电影
  addPreview() {
    axios.get('./a.json').then(res=>{
      let result =res.data;
      if(result.code===0) {
        this.setState({
          // 应该是result.data.list,如果是result.data,就会报上面的错
          filmData: result.data.list
        })
      }
    })
  }

  render() {
    return (
      <Fragment>
      <div className='lyj-filmsListBox'>
            <h2>最近最受期待</h2>
            <div className='cityHeng'>
                {
                  this.state.filmData.map((item,index) => {
                    return (
                    <div key={index} className="divFilm">
                        <img src={item.img} alt=""/>
                        <p className="p11">{`${item.wish}想看`}</p>
                        <h4 className="h5">{item.nm}</h4>
                        <p className="p33">{item.comingTitle}</p>
                    </div>
                    )
                  })
                }
            </div>
        </div>
      <div className="borderBox1"></div>
      <div className="lyj-cityListSon">
      {
        this.state.filmSoon.map((item,index) => {
            return (
              <Link to=" " key={index}>
              <p className="comingTitle">{item.comingTitle}</p>
              <div className='ljy-List'>
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

                <p className="p1"><span>{item.wish}</span> 人想看</p>
                <p className="p2">{`主演 : ${item.star}`}</p>
                <p className="p3">{`${item.rt} 上映`}</p>

                </div>

                <div className='lyj-gouPiao'>
                  <div className="gouPiao1" onClick={this.onChange}>预购</div>
                </div>
              </div>

            </div>
            </Link>
             )
        })
      }
  </div>
  </Fragment>

    )
  }
}
export default SoonPlaying;
