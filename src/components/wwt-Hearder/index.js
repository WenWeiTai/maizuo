import React, { Component } from 'react'

import './index.less'

class Hearder extends Component {
  constructor (props) {
    super ()
  }
  render() {
    return (
      <div className="header">
        <span>{ this.props.title }</span>
      </div>
    )
  }
}

export default Hearder