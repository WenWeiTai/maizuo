import React, { Component } from 'react'
import './index.less'
import axios from 'axios'

export default class Zk_Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zk_xq:{}
    }
  }

  componentWillMount() {
    axios.get('./zk_detail.json').then((response) => {
      console.log(response);
      this.setState({
        zk_xq:response.data.detailMovie
      })
      // this.setState.zk_xq = response.data.detailMovie.nm;
      console.log(this.state.zk_xq)
    })
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <a href="a">《</a>
          <div>{ this.state.zk_xq.nm}</div>
        </div>
        <div className="movie-page">
          <section className="movie-header">
            <div className="movie">
              {/* <div class="movie-background" style={background-image:url(http://p1.meituan.net/177.249/movie/a596474c1c29118d908d1eff0fd4293f1017066.jpg);}data-reactid=".16dqbxfag38.4.0.0.0"></div> */}
              <div className="movie-background"></div>
              {/* <div className="movie-background" style="background-image:url(http://p1.meituan.net/177.249/movie/a596474c1c29118d908d1eff0fd4293f1017066.jpg);" data-reactid=".7fg3449b50.4.0.0.0"></div> */}
              <div className="movie-filter" data-reactid=".1j067h1tq6u.4.0.0.1"></div>

              <div className="movie-container">
                <div className="zk_logo">
                  <a href="1">
                    <img src={this.state.zk_xq.albumImg}alt="" />
                  </a>
                </div>
                <div className="zk_text">
                  <div className="zk_reactid">{ this.state.zk_xq.nm}</div>
                  <div className="zk_movie-ename">{ this.state.zk_xq.enm}</div>
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
                        <span>{(this.state.zk_xq.snum/10000 ).toFixed(2)}万</span>
                        <span>人评分)</span>
                      </div>
                    </div>
                  </div>
                  <div className="zk_movie-category" data-reactid=".7fg3449b50.4.0.0.2.1.3"><span className="movie-cat" data-reactid=".7fg3449b50.4.0.0.2.1.3.0">{this.state.zk_xq.cat}</span></div>
                  <div className="zk_movie-content-row" data-reactid=".7fg3449b50.4.0.0.2.1.4"><span data-reactid=".7fg3449b50.4.0.0.2.1.4.0">{this.state.zk_xq.src}</span><span data-reactid=".7fg3449b50.4.0.0.2.1.4.1"> / </span><span data-reactid=".7fg3449b50.4.0.0.2.1.4.2"><span data-reactid=".7fg3449b50.4.0.0.2.1.4.2.0">{this.state.zk_xq.dur}</span><span data-reactid=".7fg3449b50.4.0.0.2.1.4.2.1"> 分钟</span></span><span data-reactid=".7fg3449b50.4.0.0.2.1.4.3"></span></div>
                  <div className="zk_movie-content-row" data-reactid=".7fg3449b50.4.0.0.2.1.5">{this.state.zk_xq.pubDesc}</div>
                </div>
              </div>
            </div>
          </section>
          <section className=" zk_section-seperate section-expander}" data-reactid=".4uvxkaf2ra.4.1">
            <a href="/cinema/movie/1240159?_v_=yes" className="zk_btn-block" data-event="pay" data-reactid=".4uvxkaf2ra.4.1.0">
              <span data-reactid=".4uvxkaf2ra.4.1.0.1">特惠购票</span>
            </a>
            <div data-event="intro" data-bid="b_y93QJ" data-view-bid="b_y93L0" data-lab="{movie_id:1240159}" className="zk_text-expander text-expander-disable-false text-expander-expand-false" data-reactid=".4uvxkaf2ra.4.1.2" data-view-sended="1">
              <div className="text-expander-content" data-reactid=".4uvxkaf2ra.4.1.2.0">
                <p data-reactid=".4uvxkaf2ra.4.1.2.0.0">{this.state.zk_xq.dra}</p>
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
                  <img src="//p0.meituan.net/moviemachine/fa92882745cfc214b1fcbd2062d639dc34054.jpg@130w_180h.webp" alt="" />
                  <span>马丽</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="//p0.meituan.net/moviemachine/fa92882745cfc214b1fcbd2062d639dc34054.jpg@130w_180h.webp" alt="" />
                  <span>马丽</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="//p0.meituan.net/moviemachine/fa92882745cfc214b1fcbd2062d639dc34054.jpg@130w_180h.webp" alt="" />
                  <span>马丽</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="//p0.meituan.net/moviemachine/fa92882745cfc214b1fcbd2062d639dc34054.jpg@130w_180h.webp" alt="" />
                  <span>马丽</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="//p0.meituan.net/moviemachine/fa92882745cfc214b1fcbd2062d639dc34054.jpg@130w_180h.webp" alt="" />
                  <span>马丽</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="//p0.meituan.net/moviemachine/fa92882745cfc214b1fcbd2062d639dc34054.jpg@130w_180h.webp" alt="" />
                  <span>马丽</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="//p0.meituan.net/moviemachine/fa92882745cfc214b1fcbd2062d639dc34054.jpg@130w_180h.webp" alt="" />
                  <span>马丽</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="//p0.meituan.net/moviemachine/fa92882745cfc214b1fcbd2062d639dc34054.jpg@130w_180h.webp" alt="" />
                  <span>马丽</span>
                  <span>韩笑</span>
                </a>
              </li>
              <li>
                <a href="1" className="zk_link">
                  <img src="//p0.meituan.net/moviemachine/fa92882745cfc214b1fcbd2062d639dc34054.jpg@130w_180h.webp" alt="" />
                  <span>马丽</span>
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
