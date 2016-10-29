'use strict';

import React from 'react';


class NuevoSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: ''
    };
  }
  handleClickOutside() {
    this.setState ({
      open: false
    });
  }
  render() {
    return (
      <div className={"nuevo-sidebar"}>
        <div className="menu">
          <ul className="menu__items">
            <li className="menu__item">
              <a href="#">
                  <i className="material-icons">home</i> <span>Home</span>
              </a>
            </li>
            <li className="menu__item">
              <a href="#">
                  <i className="material-icons">dashboard</i> <span>Collections</span>
              </a>
            </li>
            <li className="menu__item">
              <a href="#">
                  <i className="material-icons">file_download</i> <span>Downloads</span>
              </a>
            </li>
            <li className="menu__item">
              <a href="#">
                  <i className="material-icons">store</i> <span>Collections</span>
              </a>
            </li>
        </ul>
        </div>
      </div>
    );
  }
}

export default NuevoSidebar;
