/*eslint-disable no-console*/
'use strict';

import React from 'react';
import axios from 'axios';
import NuevoSiteSelectorP from './site-selector-p';
import NuevoClientSitesSelectorP from './client-sites';

class NuevoSiteSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clientSelected: "Azure Power",
      siteSelected: "AZP - 1",
      clients: [],
      sites: []
    };
    this.updateSites = this.updateSites.bind(this);
  }

  componentDidMount() {
    this.fetchClients();
  }

  fetchClients(){
    let url = "http://nuevosol.solar:5007/clients.json";
    return axios.get(url)
      .then((res) => {
        this.setState({ clients: res.data, sites: res.data[0].sites });
      });
  }

  updateSites(e) {
    let sitesSelected = this.getSiteByName(e);
    this.setState({ clientSelected: e,sites: sitesSelected, siteSelected: sitesSelected[0] });
  }

  getSiteByName(name) {
    let sites = [];
    this.state.clients.forEach(function(e,i){
      if(e.name == name){
        sites = e.sites;
      }
    });
    return sites;
  }
  render() {
    let clientsObject = [];
    console.log("Rendering Selector Component", this.state);
    return (
      <div>
        <NuevoSiteSelectorP clientSelected={this.state.clientSelected} clients={this.state.clients}
          updateSites={this.updateSites}/>
        <NuevoClientSitesSelectorP sites={this.state.sites} siteSelected={this.state.siteSelected}/>
      </div>
    );
  }

}

export default NuevoSiteSelector;
