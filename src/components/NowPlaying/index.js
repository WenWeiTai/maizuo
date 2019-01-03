import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';
class NowPlaying extends React.Component{
  render() {
    return (
      <div className="lyj-cityList">
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

    )
  }
}
export default NowPlaying;
