import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import store from '@/store';
class NowPlaying extends React.Component{
  constructor(props) {
    // 接收props 指向
    super(props)
  }

onChange(filmname,e) {
  // 父级是a 标签所以是阻止默认行为
  e.preventDefault();
  // 将点击的数据添加到store
  console.log(filmname,parseInt(30 + Math.random() * 60),1)
  var data = { name: filmname, price: parseInt(30 + Math.random() * 60), num: 1 }
  store.dispatch({
    type: 'SET_ADD',
    obj: data
  })

  // 存到localStorage
  localStorage.setItem('data', JSON.stringify(data))

  this.props.history.push('/card');
}

  render() {
    return (
      <div className="lyj-cityList">
      {
        this.props.films.map((item,index) => {
            return (
              <Link to={`/front?${item.id}`} key={index}>
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
                {/* 父级是a 标签所以是阻止默认行为 */}
                  <div className="gouPiao" onClick={this.onChange.bind(this,item.nm)}>购票</div>
                </div>
              </div>

            </div>
            </Link>
             )
        })
      }
  </div>

    )
  }
}
export default NowPlaying;
