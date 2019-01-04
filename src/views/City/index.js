import React, { Fragment,Component } from 'react'
import './index.less'
import http from '../../rxdserver';
import { Toast } from 'antd-mobile'
import store from '@/store';
class index extends Component {
  constructor(props){
    super(props);
    this.state={
      hotCity:['北京','上海','广州','深圳','武汉','天津','西安','南京','杭州','成都','重庆'],
      List:[],
      CurCity:store.getState().city.curCity
    }
    // 监听仓库当期状态
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        CurCity:store.getState().city.curCity
      })
    })
  }
  getTodo (data) {
    store.dispatch({
      type:'SET_CURCITY',
      name:data
    })
    this.props.history.goBack()
    //console.log('点击了div',data)
  }
  CitytipS() {
    Toast.loading('Loading',1.5)
  }
  getTodos (i) {
    store.dispatch({
      type:'SET_CURCITY',
      name:i
    })
    this.props.history.goBack()
   // console.log('点击了li',i)
  }
  // 组件销毁取消监听
  componentWillUnmount () {
    this.unsubscribe()
  }
  componentWillMount () {
    this.CitytipS()
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
    // console.log(this.state.List)
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
            <div className="location-city">{ this.state.CurCity }</div>
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
          {
            this.state.hotCity.map((item,index)=>{
              return (
                <div className="city-item" key={index} onClick={this.getTodo.bind(this,item)}>{item}</div>
              )
            })
          }
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
                            <li key={indexs} onClick={this.getTodos.bind(this,result.nm)}>{result.nm}</li>
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
