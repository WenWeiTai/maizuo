import React, { Component } from 'react'
import './index.less'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

export default class Zk_Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zk_xq:{}
    }
  }

  componentWillMount() {
    let Idd=this.props.location.search.split('?')[1]
    Toast.loading('加载中',1)
    axios.get('http://129.204.78.99:4000/api/filmid/id',{
      params: {
        id:Idd
      }
    }).then((response) => {
      // console.log(response.data.data[0]);/
      this.setState({
        zk_xq:response.data.data[0]
      })
      // this.setState.zk_xq = response.data.detailMovie.nm;
      // console.log(this.state.zk_xq)
      // Toast.hide()
    })
  }
  goback=()=>{
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <Link to={`/front?${this.props.location.search.split('?')[1]}`}><i className="iconfont iconfont-zuojiantou"></i></Link>
          <div>{ this.state.zk_xq.nm}</div>
        </div>
        <div className="movie-page">
          <section className="movie-header">
            <div className="movie">
            <div className="movie-background" style={{
              backgroundImage:`url(${this.state.zk_xq.img})`
            }} data-reactid=".232835nktzi.4.0.0.0"></div>
              <div className="movie-background"></div>
              <div className="movie-filter" data-reactid=".1j067h1tq6u.4.0.0.1"></div>

              <div className="movie-container">
                <div className="zk_logo">
                  <a href="1">
                    <img src={this.state.zk_xq.img}alt="" />
                  </a>
                </div>
                <div className="zk_text">
                  <div className="zk_reactid">{ this.state.zk_xq.nm}</div>
                  <div className="zk_movie-ename">Kill Mobile</div>
                  <div className="zk_movie-score">
                    <div className="zk_released-score">
                      <div className="zk_rating">
                        <img className="img noneBg" src="//ms0.meituan.net/canary/img/star-full-new.png" alt="" />
                        <img className="img noneBg" src="//ms0.meituan.net/canary/img/star-full-new.png" alt="" />
                        <img className="img noneBg" src="//ms0.meituan.net/canary/img/star-full-new.png" alt="" />
                        <img className="img noneBg" src="//ms0.meituan.net/canary/img/star-full-new.png" alt="" />
                        <img className="img noneBg" src="//ms0.meituan.net/canary/img/star-half-new.png" alt="" />
                        <span>{this.state.zk_xq.sc}</span>
                      </div>
                      <div className="zk_score-num">
                        <span>(</span>
                        <span>17.9万</span>
                        <span>人评分)</span>
                      </div>
                    </div>
                  </div>
                  <div className="zk_movie-category" data-reactid=".7fg3449b50.4.0.0.2.1.3"><span className="movie-cat" data-reactid=".7fg3449b50.4.0.0.2.1.3.0">剧情,喜剧</span></div>
                  <div className="zk_movie-content-row" data-reactid=".7fg3449b50.4.0.0.2.1.4"><span data-reactid=".7fg3449b50.4.0.0.2.1.4.0">中国大陆</span><span data-reactid=".7fg3449b50.4.0.0.2.1.4.1"> / </span><span data-reactid=".7fg3449b50.4.0.0.2.1.4.2"><span data-reactid=".7fg3449b50.4.0.0.2.1.4.2.0">140</span><span data-reactid=".7fg3449b50.4.0.0.2.1.4.2.1"> 分钟</span></span><span data-reactid=".7fg3449b50.4.0.0.2.1.4.3"></span></div>
                  <div className="zk_movie-content-row" data-reactid=".7fg3449b50.4.0.0.2.1.5">2018-12-28大陆上映</div>
                </div>
              </div>
            </div>
          </section>
          <section className=" zk_section-seperate section-expander}" data-reactid=".4uvxkaf2ra.4.1">
            <a href="#/card" className="zk_btn-block" data-event="pay" data-reactid=".4uvxkaf2ra.4.1.0">
              <span data-reactid=".4uvxkaf2ra.4.1.0.1">特惠购票</span>
            </a>
            <div data-event="intro" data-bid="b_y93QJ" data-view-bid="b_y93L0" data-lab="{movie_id:1240159}" className="zk_text-expander text-expander-disable-false text-expander-expand-false" data-reactid=".4uvxkaf2ra.4.1.2" data-view-sended="1">
              <div className="text-expander-content" data-reactid=".4uvxkaf2ra.4.1.2.0">
                <p data-reactid=".4uvxkaf2ra.4.1.2.0.0">七位好友在聚会中玩了一个游戏，将手机交出，分享所有来电、短信、微信、甚至广告弹窗，掀开了一场啼笑皆非的情感风暴。</p>
              </div>
              <div className="zk_text-expander-button" data-reactid=".4uvxkaf2ra.4.1.2.1">
                <i className="icon icon-chevron-down" data-reactid=".4uvxkaf2ra.4.1.2.1.0"></i>
              </div>
            </div>
          </section>
          <section className="zk_section-seperate">
            <h3>观影小贴士</h3>
            <div className="zk_tip">
              <img src="//p1.meituan.net/mmdb/e49359ae45d86640f5f050b002413b601915.png" alt="" />
              <span>已于2016年购买原作版权</span>
            </div>
            <div className="zk_tip">
              <img src="//p0.meituan.net/mmdb/8f52014d6b15bf93415d10cdcd16cbf52917.png" alt="" />
              <span>有2个彩蛋，分别在字幕前、后出现</span>
            </div>
          </section>
          {/* 演员列表 */}
          <section className="zk_section-seperate">
            <ul className="zk_movie-celebrities">
              <li>
                <a href="1" className="zk_link">
                  <img src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/cefba5ab52c4e633a66a39e78468b8f037d7c0ab3f875dbd837233361b609178c2fee3ff7fad12e4270188c20c6676fa?pictype=scale&from=30113&version=3.3.3.3&uin=502374689&fname=3FA47E1A1E6AE9D32804417E576AD90D.jpg&size=750" alt="" />
                  <span>老温</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/cefba5ab52c4e633a66a39e78468b8f037d7c0ab3f875dbd837233361b609178c2fee3ff7fad12e4270188c20c6676fa?pictype=scale&from=30113&version=3.3.3.3&uin=502374689&fname=3FA47E1A1E6AE9D32804417E576AD90D.jpg&size=750" alt="" />
                  <span>老温</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/cefba5ab52c4e633a66a39e78468b8f037d7c0ab3f875dbd837233361b609178c2fee3ff7fad12e4270188c20c6676fa?pictype=scale&from=30113&version=3.3.3.3&uin=502374689&fname=3FA47E1A1E6AE9D32804417E576AD90D.jpg&size=750" alt="" />
                  <span>老温</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/cefba5ab52c4e633a66a39e78468b8f037d7c0ab3f875dbd837233361b609178c2fee3ff7fad12e4270188c20c6676fa?pictype=scale&from=30113&version=3.3.3.3&uin=502374689&fname=3FA47E1A1E6AE9D32804417E576AD90D.jpg&size=750" alt="" />
                  <span>老温</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/cefba5ab52c4e633a66a39e78468b8f037d7c0ab3f875dbd837233361b609178c2fee3ff7fad12e4270188c20c6676fa?pictype=scale&from=30113&version=3.3.3.3&uin=502374689&fname=3FA47E1A1E6AE9D32804417E576AD90D.jpg&size=750" alt="" />
                  <span>老温</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/cefba5ab52c4e633a66a39e78468b8f037d7c0ab3f875dbd837233361b609178c2fee3ff7fad12e4270188c20c6676fa?pictype=scale&from=30113&version=3.3.3.3&uin=502374689&fname=3FA47E1A1E6AE9D32804417E576AD90D.jpg&size=750" alt="" />
                  <span>老温</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/cefba5ab52c4e633a66a39e78468b8f037d7c0ab3f875dbd837233361b609178c2fee3ff7fad12e4270188c20c6676fa?pictype=scale&from=30113&version=3.3.3.3&uin=502374689&fname=3FA47E1A1E6AE9D32804417E576AD90D.jpg&size=750" alt="" />
                  <span>老温</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/cefba5ab52c4e633a66a39e78468b8f037d7c0ab3f875dbd837233361b609178c2fee3ff7fad12e4270188c20c6676fa?pictype=scale&from=30113&version=3.3.3.3&uin=502374689&fname=3FA47E1A1E6AE9D32804417E576AD90D.jpg&size=750" alt="" />
                  <span>老温</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="http://img0.imgtn.bdimg.com/it/u=3539825298,2957623822&fm=26&gp=0.jpg" alt="" />
                  <span>老温</span>
                  <span>韩笑</span>
                </a>
              </li>
            </ul>
            <a href="1" className="z-link">
              <h4>全体演职人员</h4>
              <i>></i>
            </a>
          </section>
          {/* 媒体库 */}
          <section className="zk_section-seperate">
            <h3 style={{ fontWeight: 700 }}>媒体库</h3>
            <ul className="zk_movie-stages">
              <li className="zk_stage-img-container">
                <a href="1">
                  <img src="//p0.meituan.net/movie/7cd07f4fc08a0ee93cb5917c35716c42197374.jpg@250w_140h_1e_1c.webp" alt="" />
                </a>
              </li>
              <li className="zk_stage-img-container">
                <a href="1">
                  <img src="//p0.meituan.net/movie/36cd843de33b8930564362ba70f467fb7104330.jpg@180w_140h_1e_1c.webp" alt="" />
                </a>
              </li>
              <li className="zk_stage-img-container">
                <a href="1">
                  <img src="//p0.meituan.net/movie/7cd07f4fc08a0ee93cb5917c35716c42197374.jpg@250w_140h_1e_1c.webp" alt="" />
                </a>
              </li>
              <li className="zk_stage-img-container">
                <a href="1">
                  <img src="//p0.meituan.net/movie/36cd843de33b8930564362ba70f467fb7104330.jpg@180w_140h_1e_1c.webp" alt="" />
                </a>
              </li>
              <li className="zk_stage-img-container">
                <a href="1">
                  <img src="//p0.meituan.net/movie/7cd07f4fc08a0ee93cb5917c35716c42197374.jpg@250w_140h_1e_1c.webp" alt="" />
                </a>
              </li>
              <li className="zk_stage-img-container">
                <a href="1">
                  <img src="//p0.meituan.net/movie/36cd843de33b8930564362ba70f467fb7104330.jpg@180w_140h_1e_1c.webp" alt="" />
                </a>
              </li>
              <li className="zk_stage-img-container">
                <a href="1">
                  <img src="//p0.meituan.net/movie/7cd07f4fc08a0ee93cb5917c35716c42197374.jpg@250w_140h_1e_1c.webp" alt="" />
                </a>
              </li>
              <li className="zk_stage-img-container">
                <a href="1">
                  <img src="//p0.meituan.net/movie/36cd843de33b8930564362ba70f467fb7104330.jpg@180w_140h_1e_1c.webp" alt="" />
                </a>
              </li>
            </ul>
            <div className="zk-link-group">
              <a href="1">
                <h4>
                  <span>视屏</span>
                  <i>></i>
                  <span className="zk_link-num">18</span>
                </h4>
              </a>
              <a href="1" className="zk_link">
                <h4>
                  <span>视屏</span>
                  <i>></i>
                  <span className="zk_link-num">18</span>
                </h4>
              </a>
            </div>
          </section>
          <section className="zk_panel">
            <div className="zk_panel-title">
              <h2>资讯</h2>
            </div>
            <div className="zk_panel-content">
              <a href="1">
                <img src="//p1.meituan.net/movie/03d11d59def5ce5a0d57b737c631c52c1845544.png@200w_150h_1e_1c.webp" alt="" />
                <i>></i>
                <div className="zk_news-wrapper ">
                  <div className="zk_news-content">《来电狂响》曝马丽删减片段及“放不下”海报，获口碑票房双冠军</div>
                </div>
              </a>
            </div>
          </section>
          {/* 排行 */}
          <a href="1" className="zk_link">
            <section className="zk_panel">
              <div className="zk_panel-content">
                <div className="zk-movie-box">
                  <div className="zk_cell">
                    <p className="zk_num">1</p>
                    <p className="zk_desc">昨日票房排行</p>
                  </div>
                  <div className="zk_cell">
                    <p className="zk_num">16,895</p>
                    <p className="zk_desc">首周票房(万)</p>
                  </div>
                  <div className="zk_cell">
                    <p className="zk_num">40,345</p>
                    <p className="zk_desc">累计票房(万)</p>
                  </div>
                </div>
                <div className="zk-more">
                  <i>></i>
                </div>
              </div>
            </section>
          </a>
        </div>
        {/* 底部 */}
        <div className="zk-footer">
                          <div className="zk_footer-misc">
                          <div className="zk_copyright">
                          <span>
                            <span>© 猫眼电影 客服电话: </span>
                            <a href="1">1010-5335</a>
                          </span>
                          </div>
                          <p className="zk_icp">
                            <a href="1"><span>京ICP备16022489号-1</span></a>
                            <a href="1"><span>京公网安备11010502030881号</span></a>
                          </p>
                          <p className="zk_sankuai">
                          <a href="1"><span>北京猫眼文化传媒有限公司</span></a>
                          </p>
                          </div>
        </div>
      </div>
    )
  }
}
