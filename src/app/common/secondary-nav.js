'use strict';

import React from 'react';
import enhanceWithClickOutside  from 'react-click-outside';

class NuevoSecondaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.profileHandleClick = this.profileHandleClick.bind(this);
  }
  profileHandleClick(e) {
    this.setState ({
      open: !this.state.open
    });
  }
  handleClickOutside() {
    this.setState ({
      open: false
    });
  }
  render() {
    return (
      <div className="secondary-navbar">
        <div className="secondary-navbar-inner">
          <ul className="secondary-navbar__list-items clearfix">
            <li className="secondary-navbar__list-item navigation__dropdown active">
              <a href="#">
                North Block
              </a>
            </li>
            <li className="secondary-navbar__list-item navigation__dropdown">
              <a href="#">
                South Block
              </a>
            </li>
            <li className="secondary-navbar__list-item navigation__dropdown">
              <a href="#">
                West Block
              </a>
            </li>
            <li className="secondary-navbar__list-item navigation__dropdown">
              <a href="#">
                East Block
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default enhanceWithClickOutside(NuevoSecondaryNav);
