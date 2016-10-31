/*eslint-disable no-console*/
'use strict';

import React from 'react';
import { Link } from 'react-router';

class NuevoClientSitesSelectorP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      siteSelected: this.props.siteSelected
    };
    this.siteSelect = this.siteSelect.bind(this);
  }

  siteSelect(e){
    this.props.updateSite(e.target.text);
    this.setState({siteSelected: e.target.text});
    localStorage.setItem('selectedSite', JSON.stringify(e.target.text));
  }

  render() {
    console.log("Rendering Site Component", this.state,"Props",this.props);
    let sitesObject = [];
    let self = this;
    this.props.sites.forEach(function(e,i){
      let path = "/"+(e.toLowerCase().split('-')[0]).trim()+"/"+parseInt(i+1);
       sitesObject.push(
         <Link to={{ pathname: path, query: { b: "n" } }} key={i}
         className="nuevo-site-nav-item" onClick={self.siteSelect}>
         {e}
         </Link>
      );
    });
    return (
      <div className="nuevo-site-nav">
          <a href="javascript:;" className="nuevo-site-nav-item clearfix">
            <p>
              {this.props.siteSelected}
            </p>
          </a>
          <div className="nuevo-site-nav-items-dropdown">
          {sitesObject}
          </div>
      </div>
    );
  }
}

NuevoClientSitesSelectorP.propTypes = {
  sites: React.PropTypes.array.isRequired,
  siteSelected: React.PropTypes.string,
  updateSite: React.PropTypes.func
};

export default NuevoClientSitesSelectorP;
