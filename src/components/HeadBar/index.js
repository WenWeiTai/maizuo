import React,{Fragment} from 'react';
import './index.less';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class HeadBar extends React.Component {
  render() {
    return (
      <Fragment>
      <ReactCSSTransitionGroup
        transitionEnter={true}
        transitionLeave={true}
        transitionEnterTimeout={2500}
        transitionLeaveTimeout={1500}
        transitionName="animated"
      >
          <div className="lyj-headBar animated fadeInLeftBig" key="amache">
            猫眼电影
          </div>

    </ReactCSSTransitionGroup>
    </Fragment>
    )
  }
}
export default HeadBar;
