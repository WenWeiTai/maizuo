import React, { Component } from 'react';
import './index.less'

class front extends Component {
  render() {
    return (
      <div className="my-front">
      {/* header */}
        <header className="navbar  ">
          <div className="nav-wrap-left">
              左箭头
          </div>
          <h1 className="nav-header">来电狂响</h1>
        </header>
      {/* detail */}
        <div className="detail box-flex">
          <div className="poster">
            <img alt="" src="//p1.meituan.net/148.208/movie/a596474c1c29118d908d1eff0fd4293f1017066.jpg" />
          </div>
          <div className="content flex">
            <div className="title middle line-ellipsis">来电狂响</div>
            <div className="title-en-name line-ellipsis">Bumblebee</div>
            <div className="score line-ellipsis">
              <span>157942人想看</span>
            </div>
            <div className="type line-ellipsis">
              <span>动作,冒险,科幻</span>
              <div className="type-group">
                  <img alt="" className="sd-imax" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAD+0lEQVRoge2aPUwUQRSAPy4YiZh4DbT8VJhIvA4KkyOhBq+Uyi2gFlssPAtoPW01cWm0RaxVTCi0EkOhFXe0WoiJGhJJ1uK9cefW/ZnF3K3R/ZLNDDNvfnhv5s3bvRkIggBgGLgIjACDlPSSE+AT8B74NhAEwXngCnCm0Gn9f/wAdgeBKf5O5T8regI9Ygi4DIwCUxXE7ZT0j2PgneZHKpQ+vwiONR2sFDqNEkoDFExpgIJx9f+TwDJwySprA0+A11bZCjCR0EcbeAp8zDnHKDWgBfj6oH/XgC3Np9EAVoE9TaNUtR+AJrCTMP4R4GkaZUv7iWvfhcsOmAQ2EOW/QZT+BlH0GjBtyU6o3L71gIRcC8B9YN5hzDSqQB0Yt8pqWtZ0aN9S2VpCfUPr68QbaE+fq4QLINr/VcQwO1mTcdkBS8A54B7w3CpfRHbFIqGiDU9i8tPALeAGshsOHMbOywVkVfoJ9Q1gLKMPo/RXiCLHgU6MzJzW2+PNIf/foZZn4rIDZoDvdCsfQtcz7DIQYqR1zS86tsnLF9J3QdyKtqkhL0mbhK7MS5D1dLwWYiTbdTWId02/4WKAReBaTPmspnl8+r7Kz2YJnpIWssIbMXVziFvZTGlvDOQjykxbyeYMuaCyW5q/qXVO5I2C5hGXtIG4n4/A45x9tBGX1gt8TeNWuqdpM6FtFTHcIaHv9hGDerEtpH4T2TV1JMjICgK6OK0BTDS0Tf6ophe+39BBFFJHVrxhHLiO+PVOQtsGsoJtBfqaeiljbiXknchrgDXEJd1CIiFzCOdhMqd8XpqaelbZaqQurZ1vlXUQo0WjLkPVkrfPA2eyDDCMRC+jkfJ9wpWS1wATyKHeKzqI0q4THo4e8gFsJ6HNHGF09BkIrKeu5XFuzfj9O3SfB85khaGTSOTSRsIrm2+I+4kaJ415lX+Ro81paAIvEaUc8btrieJpeo/46GVVZVYjZXXE2E0tayChaYvsiAvINsA+slonkJ1gx/tGmW2XgVR+RfvLe3DnZYcwgjnSvJ8gW0V2yyHJSqsiC9DTfmrAXcTteJach0RAN3QOmbvB5UXsgXa4jvj9AySMNJ8cHsa0WbLyxoWNIspf488/R7jQBB4RuogkPE3TdkiL0AAm5DRtO5bcEbIL3iKGGifjfcDFAM8Rd7OMvJTNaHkbUX70LRi6DdBGFL5t9dUPfMQIVdKVa1Z92mrtIGdIXeXGkGgrrs0eYvDbOoe4d5JfDARBsJAmEMMw/VHiv/qTpGEBTvc5ul8r+L+g/D2gYEoDFExpgIKpIDe1SvrLWU1PKsg1uZL+MUT4a9yn8mpicfwAdgf0cu555IpieTm395jLuR+Arz8BrLjpSMoYSlEAAAAASUVORK5CYII="/>
              </div>
            </div>
            <div className="src line-ellipsis">美国/114分钟</div>
            <div className="pubDesc line-ellipsis">2019-01-04大陆上映</div>
          </div>
          <div className="arrow-g">
            <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC"/>
          </div>
        </div>
      {/* showDays */}
      <div id="showDays">
          <ul id="timeline" className="mb-line-b">
              <li data-day="2019-01-03" className="showDay chosen">
                  明天01月03日
              </li>
              <li data-day="2019-01-04" className="showDay">
                  后天01月04日
              </li>
              <li data-day="2019-01-05" className="showDay">
                  周六01月05日
              </li>
              <li data-day="2019-01-06" className="showDay">
                  周日01月06日
              </li>
              <li data-day="2019-01-07" className="showDay">
                  周一01月07日
              </li>
              <li data-day="2019-01-08" className="showDay">
                  周二01月08日
              </li>
              <li data-day="2019-01-09" className="showDay">
                  周三01月09日
              </li>
              <li data-day="2019-01-10" className="showDay">
                  周四01月10日
              </li>
              <li data-day="2019-01-11" className="showDay">
                  周五01月11日
              </li>
              <li data-day="2019-01-12" className="showDay">
                  周六01月12日
              </li>
              <li data-day="2019-01-13" className="showDay">
                  周日01月13日
              </li>
              <li data-day="2019-02-03" className="showDay">
                  周日02月03日
              </li>
          </ul>
        </div>
      {/* nav-wrap */}
        <div className="nav-wrap filter-nav-wrap">
          <div className="tab mb-line-b">
                <div className="item" data-tab=".region">全城<span className="drop"></span></div>
                <div className="item" data-tab=".brand">品牌<span className="drop"></span></div>
                <div className="item" data-tab=".special">特色<span className="drop"></span></div>
          </div>
        </div>
      {/* cinema-list */}
        <div className="cinema-list cinema" data-id="1206875" data-date="2019-01-03" >
            <div className="list-wrap">
                <div className="item mb-line-b" data-id="15406" data-bid="dp_wx_home_cinema_list">
                    <div className="title-block box-flex middle">
                        <div className="title line-ellipsis">
                            <span>幕森国际影城</span>
                            <span className="price-block">
                                <span className="price">34</span><span className="q">元起</span>
                            </span>
                        </div>
                        <div className="location-block box-flex">
                            <div className="flex line-ellipsis">宝安区福永街道128号怀德村委旁汇隆城5层</div>
                            <div className="distance">800m</div>
                        </div>
                        <div className="flex"></div>
                        <div className="label-block">
                            <div className="vipTag">折扣卡</div>
                        </div>
                        <div className="discount-block">
                            <div className="discount-label normal card">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt=""/>
                            </div>
                            <div className="discount-label-text">限时¥14.9促销开卡，首单更优惠</div>
                        </div>
                        <div className="min-show-block  disabled  J-fload" data-bid="dp_wx_buy_cinema_list_spread">
                            <span>近期场次：</span>
                            <span className="time-line">次日00:00</span>
                        </div>
                    </div>
                </div>
                <div className="item mb-line-b" data-id="15406" data-bid="dp_wx_home_cinema_list">
                    <div className="title-block box-flex middle">
                        <div className="title line-ellipsis">
                            <span>幕森国际影城</span>
                            <span className="price-block">
                                <span className="price">34</span><span className="q">元起</span>
                            </span>
                        </div>
                        <div className="location-block box-flex">
                            <div className="flex line-ellipsis">宝安区福永街道128号怀德村委旁汇隆城5层</div>
                            <div className="distance">800m</div>
                        </div>
                        <div className="flex"></div>
                        <div className="label-block">
                            <div className="vipTag">折扣卡</div>
                        </div>
                        <div className="discount-block">
                            <div className="discount-label normal card">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt=""/>
                            </div>
                            <div className="discount-label-text">限时¥14.9促销开卡，首单更优惠</div>
                        </div>
                        <div className="min-show-block  disabled  J-fload" data-bid="dp_wx_buy_cinema_list_spread">
                            <span>近期场次：</span>
                            <span className="time-line">次日00:00</span>
                        </div>
                    </div>
                </div>
                <div className="item mb-line-b" data-id="15406" data-bid="dp_wx_home_cinema_list">
                    <div className="title-block box-flex middle">
                        <div className="title line-ellipsis">
                            <span>幕森国际影城</span>
                            <span className="price-block">
                                <span className="price">34</span><span className="q">元起</span>
                            </span>
                        </div>
                        <div className="location-block box-flex">
                            <div className="flex line-ellipsis">宝安区福永街道128号怀德村委旁汇隆城5层</div>
                            <div className="distance">800m</div>
                        </div>
                        <div className="flex"></div>
                        <div className="label-block">
                            <div className="vipTag">折扣卡</div>
                        </div>
                        <div className="discount-block">
                            <div className="discount-label normal card">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt=""/>
                            </div>
                            <div className="discount-label-text">限时¥14.9促销开卡，首单更优惠</div>
                        </div>
                        <div className="min-show-block  disabled  J-fload" data-bid="dp_wx_buy_cinema_list_spread">
                            <span>近期场次：</span>
                            <span className="time-line">次日00:00</span>
                        </div>
                    </div>
                </div>
                <div className="item mb-line-b" data-id="15406" data-bid="dp_wx_home_cinema_list">
                    <div className="title-block box-flex middle">
                        <div className="title line-ellipsis">
                            <span>幕森国际影城</span>
                            <span className="price-block">
                                <span className="price">34</span><span className="q">元起</span>
                            </span>
                        </div>
                        <div className="location-block box-flex">
                            <div className="flex line-ellipsis">宝安区福永街道128号怀德村委旁汇隆城5层</div>
                            <div className="distance">800m</div>
                        </div>
                        <div className="flex"></div>
                        <div className="label-block">
                            <div className="vipTag">折扣卡</div>
                        </div>
                        <div className="discount-block">
                            <div className="discount-label normal card">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt=""/>
                            </div>
                            <div className="discount-label-text">限时¥14.9促销开卡，首单更优惠</div>
                        </div>
                        <div className="min-show-block  disabled  J-fload" data-bid="dp_wx_buy_cinema_list_spread">
                            <span>近期场次：</span>
                            <span className="time-line">次日00:00</span>
                        </div>
                    </div>
                </div>
                <div className="item mb-line-b" data-id="15406" data-bid="dp_wx_home_cinema_list">
                    <div className="title-block box-flex middle">
                        <div className="title line-ellipsis">
                            <span>幕森国际影城</span>
                            <span className="price-block">
                                <span className="price">34</span><span className="q">元起</span>
                            </span>
                        </div>
                        <div className="location-block box-flex">
                            <div className="flex line-ellipsis">宝安区福永街道128号怀德村委旁汇隆城5层</div>
                            <div className="distance">800m</div>
                        </div>
                        <div className="flex"></div>
                        <div className="label-block">
                            <div className="vipTag">折扣卡</div>
                        </div>
                        <div className="discount-block">
                            <div className="discount-label normal card">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt=""/>
                            </div>
                            <div className="discount-label-text">限时¥14.9促销开卡，首单更优惠</div>
                        </div>
                        <div className="min-show-block  disabled  J-fload" data-bid="dp_wx_buy_cinema_list_spread">
                            <span>近期场次：</span>
                            <span className="time-line">次日00:00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="locatebanner">
                <img className="locatebanner-arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACI0lEQVRoQ+2Z4VHDMAxGlQ3KBLABMAFsUDYAJkCdAJgAbQBswAbABLABMAFsYE53Mee2VmLZsZXekT/c0TT2iz8/y24HO351O95/+AdoNYKIuOi67tw5d0xEF77d2Y8AIh4AwDUAnAHAAgAuiehh9gCr1WrpnEMAOA1G+YuIGOjvmtUIBDHhjq91tO/xLRHdzA4gEhNpau0R0c9sAISYSJ1/DCev2RxIiIkEwPZ53/yw2RxQxCQG8EpE4WRuN4mVMZHe/po6q8+BgpjEALbUWQ2gMCbS299S5+QAE8UkWZ2TAEwcE5U6iwAqxUSlziyAyjFRqTMZoFFM1OocBWgcE7U6RQCDmGSpc3AE+rfPpSwv3Ud9WXsotVTp/1tVp9ROci2EiAzjgRiOIfcrAESrzmKA2AN4kvdQHoz/nhRCRavOKgDSQ4MY8u5JAyRWnU0BfGOIyKcH94oREatOKwCO1FsiwGDVaQLAjSKiSwQYrDotAXgbmKLhZHWOrsSJbyzpNkR8AoDlyM0qdbYGYBPxydrQpVJnawBe9J4Heq9WZ2sAXrE/BgDU6mwKMGKiLHVaALwIK3KWOi0ACACuIjHKUqcFAJ82320AZKvTAiBmomx1WgBw2f0dNFykzuYAvYk+gw1QkTqtALyJitVpBeBLimJ1WgH4zU2xOq0AeHODsZ+Jkspa4abkU4mSRvx3+WQj9jNRybObApR0VPruP0CNt6p55i/PKfMxjSGtyAAAAABJRU5ErkJggg==" alt=""/>
                <span className="locatebanner-content">定位失败，请稍后重试</span>
                <div className="locatebanner-refresh-wrap">
                    <img alt="" className="locatebanner-refresh" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEUElEQVRoQ91aTVbbSBCuEkjbkBMMc4KBE4ScgOQEMzlB8ILWYxWy4qm8sHOCkBMETjDkBHFOEDjBMFt+VHmfX8tPltQ/tuzgpJcgdddX9VV16SszbcgqiuIVEY2Y+coY8ybWLI59cN3PicgVEb3AOar6Ps/z05gzNwnABREdWgDXeZ7/uREARORFmqbfBoPBrc8gEfmHiD5WzzDzy+PjY0TFu1YWARjKzAeqekBEe0S04zj5SlUnRDTJsuyyAjYajXbu7u6umfmZjcKnPM8Ban0Azs7OdpMkecvMOMhlsM8AROWCmT/B20VRnDPz3/aFW2PM87UAgOFbW1vviCjooZABtf+DLt+I6G31N1V9nec5csO5FqaQiOAAVIhlPL4Anumjl8YYlNf+ACxHPzKzd0NVhRenXkuSZC4JVXW3yhFm/isGTZqmz30FICoCMP7+/v5fm5ytc2E0M48fHx+vTk5OrmMMs/kDCh5Viet4740x5ty1ZxCA5ftXB2VuQCffASEwNrJHHiBfjDGobJ3LC8DneVWNKnM+ANb4Q1vFOo0MneMFICKgTdfG3rCGvD4cDnFfoFw6q5iq/k9E4yzLxkvlQFEU4OaoaUzsDekCYSn53QNySss0TS9Ctzf26IyAh/e9PI8D0XUy8+cOAF9UdRyq+y2HdnmicSNOHwlxMUSb6v82r9BK/FHtW5blaWz1CgJwhPjGGLMba2ToOYB4eHjY297ensTQxLdfi0Jd3iei3tQJgVr2/y0AIvJfo+Z76/CyB6/qvTkAjgTbWO+3qpCIjOvdIB4I9SKr8uSy+8xFoP5dajfcaPp0RUDrnljk43pZD/Z9bxaBrvIZ80HR14C+788A2P4Evc9s9W0b+hoX874XABHtG2Nwa27s+r0B/FIUAkdEpFmFgqrAU3OreRPf1r9Pf6kyaiMwE1itZ4OyxqZF4JSZIVjN1qa0EsPhEMIvWvAP9Ra82UpA04QCUV9P3sw1erSJMWa/MrCrnYauM/1asgsDh5dPRZWuDsEYM7O764Om9TH/lC1FxwfWXIPZAtCUueF5VY0eOKwyUiLSonTzbupUJYqiaCUzEX0wxkBB+2lLRJCPAFGtVnvvFLZEpJkL2OSnJbSIYFrTFL5avZkTQFd3at2w9gaviwGuS9UrLTqotNZIFEWBUescVaF+53lep9KMU0F12iGzILGhog1WlRBW8IJiN6fFwvgsyw5c+lEQAAz0gECeDBaVA5ugPVOfmzRN95YSd5uHuEBUl52qntenjqHI2AvqUFVx77RUP3i+LMtXIckxKgKVMZjlgjq+iYqqXiRJMinLEiPTuWkNM++UZXnAzOCzc2gBHTbLsqMY2XEhAABiPYeRz/RnASteN4jIIpRcGEAjGgh/1LDOB7QaZsT+PqK+19IAqk1wX5RliQsHuv90yr7AusREs8+MrTeAurHoXTBGtUnZqtvoqYjoGuPXmN9BxDjiB9YfOU/rFhCmAAAAAElFTkSuQmCC" data-bid="{{pageConfig.locate_bid}}"/>
                </div>
            </div>
        </div>
      {/*  */}
    </div>
    );
  }
}

export default front;
