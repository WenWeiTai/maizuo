import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

class CityFilms extends React.Component{
  render() {
    return(
      <div className="lyj-cityFilmList" >
      <div className="lyj-xzCity">
          <Link to='/city-list'>
              <span>{ this.props.curCity }</span>
              <i className="iconfont iconfont-arr_D"></i>
          </Link>
      </div>
      <div className="lyj-filmsList">
        <ul>
          {/* {
            this.props.tabs.map((item,index) => {
              return (
                <li key={index}>{item.title}</li>
                )
            })
          } */}
              {/* <li>即将上映</li> */}
        </ul>
      </div>
      <div className='lyj-filmsSearch'>
        <Link to='/search?filmId'>
            <i className="iconfont iconfont-magnifier"></i>
        </Link>
      </div>
  </div>


    )
  }
}
export default CityFilms;
