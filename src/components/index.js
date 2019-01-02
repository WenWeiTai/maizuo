import React from 'react';

import LyjHeadBar from './HeadBar';
import LyjFootBar from './FootBar';

class HeadBar extends React.Component {
  render() {
    return (
      <div>
        <LyjHeadBar></LyjHeadBar>
        <LyjFootBar></LyjFootBar>
      </div>
    )
  }
}
export default HeadBar;
