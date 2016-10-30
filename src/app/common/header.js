'use strict';

import React from 'react';
import NuevoLogo from './header-logo';
import NuevoSiteSelector from './site-selector';
import NuevoHeaderMenu from  './header-menu';
import NuevoSecondaryNav from  './secondary-nav';

class NuevoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.clients = [
      {
        id: "azp",
        name:"Azure Power",
        sites: ["AZP - 1","AZP - 2","AZP - 3"]

      },
      {
        id: "tps",
        name:"Tata Power",
        sites: ["TPS - 1","TPS - 2"]
      },
      {
        id: "lnc",
        name:"Lanco",
        sites: ["LNC - 1"]
      },
      {
        id: "jwt",
        name:"Juwi Torrent",
        sites: ["JWT - 1"]
      }
    ];
  }
  render() {
    let developers = [ "Azure Power", "Tata Power","Lanco","Juwi Torrent",
    "Vikram Solar","Acme","Sterling Wilson","Solairedirect","Premier Solar"];
    let clientsObject = [];

    this.clients.forEach(function(e,i){
       clientsObject.push(
         <a href="#" key={e.name} className="nuevo-site-nav-item">
          <p>
            {e.name}
          </p>
        </a>
      );
    });

    return (
      <div className="nuevo-header">
        <nav className="nuevo-primary-nav">
          <div className="nuevo-primary-nav-inner clearfix">
            <NuevoLogo toggleSidebar = {this.props.isSidebarOpen}/>
            <NuevoSiteSelector />
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
