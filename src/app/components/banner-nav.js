import React from 'react';
import { Link, browserHistory } from 'react-router';
import enhanceWithClickOutside  from 'react-click-outside';

class NuevoBannerNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-banner">
        <div className="navbar-banner-inner">
          <a href="javascript:;" className="back" onClick={browserHistory.goBack} >
            <i className="material-icons">arrow_back</i>
          </a>
          <h1>Dashboard</h1>
        </div>
      </div>
    );
  }
}

export default NuevoBannerNav;
