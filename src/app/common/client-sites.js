/*eslint-disable no-console*/
'use strict';

import React from 'react';

class NuevoClientSitesSelectorP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSite: this.props.siteSelected
    };
    this.siteSelect = this.siteSelect.bind(this);
  }
  componentDidMount() {
    console.log("Component Did Update",this.props.siteSelected,this.state.siteSelected);
    this.updateSite();
  }
  updateSite() {
    this.setState({selectedSite: this.props.siteSelected});
  }
  siteSelect(e){
    console.log("Selected Site",e.target.text,this.props.siteSelected);
    this.setState({selectedSite: e.target.text});
  }

  render() {
    console.log("Rendering Site Component", this.state,"Props",this.props);
    let sitesObject = [];
    let self = this;
    // this.setState({selectedSite: this.props.siteSelected});
    this.props.sites.forEach(function(e,i){
       sitesObject.push(
         <a href="#" key={i} className="nuevo-site-nav-item" onClick={self.siteSelect}>
         {e}
         </a>
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
  siteSelected: React.PropTypes.string
};

export default NuevoClientSitesSelectorP;
