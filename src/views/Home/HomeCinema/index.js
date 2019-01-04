import React, { Component } from 'react'
import './index.less';
import Header from '@/components/wwt-Hearder';
import { SearchBar } from 'antd-mobile';
import CinemaList from '@/components/CinemaList/index.js'

export default class Cinema extends Component {
  constructor(props) {
    super(props);
    this.state={
      srar:''
    }
  }
  search=(i)=>{
    this.setState({
      srar:i
    })
    // console.log(i)
  }
  render() {
    return (
      <div className='cinema'>
        <Header title='影院'></Header>
        <SearchBar placeholder="搜影院" maxLength={16} onChange={this.search.bind(this)} value={this.state.srar}/>
        <CinemaList sea={this.state.srar}></CinemaList>
      </div>
    )
  }
}
