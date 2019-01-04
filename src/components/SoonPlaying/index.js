import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.less';



class SoonPlaying extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      filmData:[]
    }
  }

  // 组件创建
  componentDidMount() {
    this.addPreview();
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
      // console.log(this.state.filmData);
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
        this.props.films.map((item,index) => {
            return (
              <Link to='/front?' key={index}>
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

                <p className="p1">观众评<span>{item.sc}</span></p>
                <p className="p2">{`主演 : ${item.star}`}</p>
                <p className="p3">{item.showInfo}</p>

                </div>

                <div className='lyj-gouPiao'>
                  <div className="gouPiao" onClick={this.onChange}>购票</div>
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
