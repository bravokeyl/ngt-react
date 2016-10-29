'use strict';

import React from 'react';
import NuevoLogo from './header-logo';
import NuevoHeaderMenu from  './header-menu';
import NuevoSecondaryNav from  './secondary-nav';

class NuevoHeader extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.isSidebarOpen);
  }
  render() {
    return (
      <div className="nuevo-header">
      <nav className="nuevo-primary-nav">
        <div className="nuevo-primary-nav-inner clearfix">
          <NuevoLogo toggleSidebar={this.props.isSidebarOpen}/>
          <div className="nuevo-site-nav">
            <a href="javascript:;" className="nuevo-site-nav-item clearfix">
              <p>
                Azure Power<strong>1</strong>
              </p>
            </a>
            <div className="nuevo-site-nav-items-dropdown">
              <a href="#" className="nuevo-site-nav-item clearfix">
                <p>
                  Azure Power <strong>1</strong>
                </p>
              </a>
              <a href="#" className="nuevo-site-nav-item clearfix">
                <p>
                  Azure Power <strong>2</strong>
                </p>
              </a>
              <a href="#" className="nuevo-site-nav-item clearfix">
                <p>
                  Azure Power <strong>3</strong>
                </p>
              </a>
            </div>
          </div>
          <NuevoHeaderMenu />
        </div>
      </nav>
      <NuevoSecondaryNav />
    </div>
    );
  }
}

NuevoHeader.propTypes = {
  isSidebarOpen : React.PropTypes.bool.isRequired
};

export default NuevoHeader;
