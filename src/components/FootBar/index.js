import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.less';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class FootBar extends React.Component{
  render(){
    return (
      <ReactCSSTransitionGroup
      transitionEnter={true}
      transitionLeave={true}
      transitionEnterTimeout={2500}
      transitionLeaveTimeout={1500}
      transitionName="animated"
    >

          <ul className="ljy-footBar animated fadeInLeftBig" key="amache">
             {
              this.props.tabs.map( item => {
                return (
                  <li
                    className={ item.id }
                    key={ item.id }
                  >
                    <NavLink to={ item.href }>
                      <i className={`iconfont ${item.icon}`}></i>
                      <span>{ item.name }</span>
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
          </ReactCSSTransitionGroup>

    )
  }
}
export default FootBar;
