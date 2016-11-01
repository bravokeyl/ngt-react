import React from 'react';
import NuevoLogo from './header-logo';
// import NuevoSiteSelector from './site-selector';
import NuevoHeaderMenu from  './header-menu';
import NuevoSecondaryNav from  './secondary-nav';

class NuevoHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className="nuevo-header">
        <nav className="nuevo-primary-nav">
          <div className="nuevo-primary-nav-inner clearfix">
            <NuevoLogo toggleSidebar = {this.props.isSidebarOpen}/>
          
            <NuevoHeaderMenu />
          </div>
        </nav>
        <NuevoSecondaryNav />
      </div>
    );
  }
}

NuevoHeader.propTypes = {
  isSidebarOpen : React.PropTypes.bool.isRequired,
  isSuperAdmin: React.PropTypes.bool
};

export default NuevoHeader;
