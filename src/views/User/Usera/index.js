import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

import React, { Component } from 'react'

export default class usera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs :[
        { title: '美团账号登录' },
        { title: '手机验证登录' }
      ]
    }
  }
  render() {
    return (
      <div>
        <Sticky>
     {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
   </Sticky>)
        <WhiteSpace />
    <StickyContainer>
      <Tabs tabs={this.state.tabs}
        initalPage={'t2'}
        renderTabBar={renderTabBar}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of first tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of second tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of third tab
        </div>
      </Tabs>
    </StickyContainer>
    <WhiteSpace />
      </div>
    )
  }
}


// function renderTabBar(props) {
//   return (<Sticky>
//     {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
//   </Sticky>);
// }
// const tabs = [
//   { title: 'First Tab' },
//   { title: 'Second Tab' },
//   { title: 'Third Tab' },
// ];

// const TabExample = () => (
//   <div>
//     <WhiteSpace />
//     <StickyContainer>
//       <Tabs tabs={tabs}
//         initalPage={'t2'}
//         renderTabBar={renderTabBar}
//       >
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//           Content of first tab
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//           Content of second tab
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//           Content of third tab
//         </div>
//       </Tabs>
//     </StickyContainer>
//     <WhiteSpace />
//   </div>
// );

// ReactDOM.render(<TabExample />, mountNode);