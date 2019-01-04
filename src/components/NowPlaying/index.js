import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import store from '@/store';
class NowPlaying extends React.Component{
  // constructor(props) {
  //   super(props)
  // }

onChange(filmname,id,e) {
  // 父级是a 标签所以是阻止默认行为
  e.preventDefault();

  let storeState = store.getState().shopCard;

  let index = -1;

  // 判断仓库是否存在相同影片id的数据
  let hasId = storeState.some((item, i) => {
    if (id === item.filmId) {
      // 相同则保存下标
      index = i;
      return true;
    } else {
      return false;
    }
  })

  if (hasId) {
    storeState[index].filmNum++
  } else {
    let obj = {
      filmId: id,
      filmName: filmname,
      filmPrice: parseInt(30 + Math.random() * 60),
      filmNum: 1
    }
    storeState = [...storeState,obj]
  }

  store.dispatch({
    type: 'SET_ADD',
    obj: storeState
  })

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
                  <div className="gouPiao" onClick={this.onChange.bind(this,item.nm, item.id)}>购票</div>
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
