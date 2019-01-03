import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import './index.less';


class NowPlaying extends React.Component{

  render() {
    return (
      <Fragment>
      <div className='lyj-filmsListBox'>
            <h2>最近最受期待</h2>
            <div className='cityHeng'>
            <div>
              <img src={require('@/images/img1.jpg')} alt=""/>
              <p className="p11">42354想看</p>
              <h4 className="h5">喜剧之王</h4>
              <p className="p33">2月5号</p>
            </div>
            <div>
              <img src={require('@/images/img1.jpg')} alt=""/>
              <p className="p11">42354想看</p>
              <h4 className="h5">喜剧之王</h4>
              <p className="p33">2月5号</p>
            </div>
            <div>
              <img src={require('@/images/img1.jpg')} alt=""/>
              <p className="p11">42354想看</p>
              <h4 className="h5">喜剧之王</h4>
              <p className="p33">2月5号</p>
            </div>
            <div>
              <img src={require('@/images/img1.jpg')} alt=""/>
              <p className="p11">42354想看</p>
              <h4 className="h5">喜剧之王</h4>
              <p className="p33">2月5号</p>
            </div>
            <div>
              <img src={require('@/images/img1.jpg')} alt=""/>
              <p className="p11">42354想看</p>
              <h4 className="h5">喜剧之王</h4>
              <p className="p33">2月5号</p>
            </div>
            <div>
              <img src={require('@/images/img1.jpg')} alt=""/>
              <p className="p11">42354想看</p>
              <h4 className="h5">喜剧之王</h4>
              <p className="p33">2月5号</p>
            </div>
            <div>
              <img src={require('@/images/img1.jpg')} alt=""/>
              <p className="p11">42354想看</p>
              <h4 className="h5">喜剧之王</h4>
              <p className="p33">2月5号</p>
            </div>
            </div>
        </div>
      <div className="borderBox1"></div>
      <div className="lyj-cityListSon">
      {
        this.props.films.map((item,index) => {
            return (
              <Link to='/front?' key={index}>
              <div className='ljy-List'>
              <img src={require('@/images/img1.jpg')} alt="" />
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
export default NowPlaying;
