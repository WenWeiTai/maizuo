import React from 'react';
import Front from '@/views/DetailFront/index.js'
import './styles/base.less';

class App extends React.Component {
  // constructor () {
  //   super ()
  // }

  render () {
    return (
      <div>
        {/* 主页 */}
        <Front></Front>
      </div>
    )
  }
}

export default App;
