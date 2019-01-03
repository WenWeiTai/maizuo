import React, { Fragment,Component } from 'react'
import './index.less'
import http from '../../rxdserver';
class index extends Component {
  constructor(props){
    super(props);
    this.state={
      List:[]
    }
  }
  //请求城市数据
  async getStudentList(){
    const res = await http.get('./rxd-city.json')
    let cityMap = {}; 
    //按首字母分类
    res.data.map((item)=>{
      let letter = item.py[0];
      if(!cityMap[letter]){
        cityMap[letter]=[]
      }
      cityMap[letter].push(item)
    })
    let keys = Object.keys(cityMap);
    //console.log(keys)
    //console.log(cityMap);
    //A-Z排序
    for(let i = 0;i < keys.length; i++){
      for(let j = i+1; j< keys.length; j++){
        if(keys[i]>keys[j]){
          let min = keys[i]
          keys[i] = keys[j]
          keys[j] = min;
        }
      }
    }
    //组装数据
    let last = keys.map(letter=>{
      return {
        key:letter.toUpperCase(),
        value: cityMap[letter]
      }
    })
    this.setState({List: last})
    console.log(this.state.List)
  }
  componentDidMount(){
    this.getStudentList()
  }
  render() {
    return (
      <div className="rxd-city">
        <section>
          <div className="locate">定位城市</div>
          <div className="city-list">
            <div className="location-city">定位失败，请点击重试</div>
          </div>
        </section>
        <div className="history-city-list">
          <div id="history">最近访问过的城市</div>
          <div className="city-list-inline">
            <div className="city-item">北京</div>
            <div className="city-item">上海</div>
            <div className="city-item">广州</div>
          </div>
        </div>
        <div className="hotcity">
          <div className="hot">热门城市</div>
          <div className="city-list-inline">
            <div className="city-item">上海</div>
            <div className="city-item">北京</div>
            <div className="city-item">广州</div>
            <div className="city-item">深圳</div>
            <div className="city-item">武汉</div>
            <div className="city-item">天津</div>
            <div className="city-item">西安</div>
            <div className="city-item">南京</div>
            <div className="city-item">杭州</div>
            <div className="city-item">成都</div>
            <div className="city-item">重庆</div>
          </div>
        </div>
        <div className="city-title">
            {
              this.state.List.map((item,index)=>{
                return (
                  <Fragment key={index}>
                    <div className="zimu" key={index}>{item.key}</div>
                    <ul key={item.key}>
                      {
                        item.value.map((result,indexs)=>{
                          return(
                            <li key={indexs}>{result.nm}</li>
                          )
                        })
                      }
                    </ul>
                  </Fragment>
                )
              })
            }
        </div>
        <div className="nav">
          <ul>
            {
              this.state.List.map((item,index)=>{
                return(
                  <li key={index}>{item.key}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default index;
