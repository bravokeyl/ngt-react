import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';

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
              <Link to="/h"><i className="material-icons">home</i> <span>Home</span></Link>
            </li>
            <li className="menu__item">
              <Link to="/c">
                  <i className="material-icons">dashboard</i> <span>Collections</span>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/d">
                  <i className="material-icons">file_download</i> <span>Downloads</span>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/l">
                  <i className="material-icons">store</i> <span>Logs</span>
              </Link>
            </li>
        </ul>
        </div>
      </div>
    );
  }
}

export default NuevoSidebar;
