import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.less';

class FootBar extends React.Component{
  render(){
    return (
          <ul className="ljy-footBar">
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

    )
  }
}
export default FootBar;
