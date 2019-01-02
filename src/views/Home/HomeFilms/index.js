import React,{ Fragment } from 'react';
import './index.less';
import LyjHeadBar from '@/components/HeadBar';
import LyjFootBar from '@/components/FootBar';


class LyjHome extends React.Component{
  render() {
    return (
      <Fragment>
        <LyjHeadBar></LyjHeadBar>
        <div className="lyj-homeFilm">
            <div className="lyj-cityFilmList">
                <div className="lyj-xzCity">
                  <span>深圳</span>
                  <i className="iconfont">*</i>

                </div>

                <div className="lyj-filmsList">
                  <ul>
                    <li>正在热映</li>
                    <li>即将上映</li>
                  </ul>
                </div>

                <div className='lyj-filmsSearch'>
                    <i className="iconfont">*</i>
                </div>
            </div>
        </div>
        <LyjFootBar></LyjFootBar>
      </Fragment>
    )
  }
}
export default LyjHome;
