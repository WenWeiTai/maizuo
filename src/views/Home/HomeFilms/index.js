import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import LyjHeadBar from '@/components/HeadBar';
import LyjFootBar from '@/components/FootBar';

class LyjHome extends React.Component{
  constructor (props) {
    super (props)
    this.state = {
      tabs: [
        { id: 'films', name: '电影', href: '/films'},
        { id: 'cinema', name: '影院', href: '/cinema'},
        { id: 'center', name: '我的', href: '/center'},
      ]
    }
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
                <Link to='/front'>
                  <div className='ljy-List'>
                    <img src={require('@/images/img1.jpg')} alt="" />
                    <div className='lyj-filmsDetails'>
                      <ul className='lyj-detailsList'>
                      <div className="lyj-title">
                        <h2>大黄蜂</h2>

                        <div className="lyj-3dBox">
                            <div className="lyj3d">3D</div>
                            <div className="lyjIMAX">IMAX</div>
                        </div>
                      </div>
                      <p><span>241534</span>想看</p>


                      </ul>

                      <div className='lyj-gouPiao'>
                        <div>购票</div>
                      </div>
                    </div>

                  </div>
                </Link>
            </div>
        </div>
        <LyjFootBar tabs={this.state.tabs}></LyjFootBar>
      </Fragment>
    )
  }
}
export default LyjHome;
