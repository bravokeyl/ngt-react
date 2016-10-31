/*eslint-disable no-console*/
import React from 'react';
import axios from 'axios';
import NuevoSiteSelectorP from './site-selector-p';
import NuevoClientSitesSelectorP from './client-sites';

class NuevoSiteSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clientSelected: JSON.parse(localStorage.getItem('selectedClient')) || "Azure Power",
      siteSelected: JSON.parse(localStorage.getItem('selectedSite')) || "AZP - 1",
      clients: [],
      sites: JSON.parse(localStorage.getItem('sites')) || []
    };
    this.updateSites = this.updateSites.bind(this);
    this.updateSite = this.updateSite.bind(this);
  }

  componentDidMount() {
    this.fetchClients();
    localStorage.setItem('sites', JSON.stringify(this.state.sites));
  }



  fetchClients(){
    let url = "http://nuevosol.solar:5007/clients.json";
    return axios.get(url)
      .then((res) => {
        this.setState({ clients: res.data, sites: JSON.parse(localStorage.getItem('sites')) });
      });
  }

  updateSites(e) {
    let sitesSelected = this.getSiteByName(e);
    this.setState({ clientSelected: e,sites: sitesSelected, siteSelected: sitesSelected[0] });
    localStorage.setItem('sites', JSON.stringify(sitesSelected));
    localStorage.setItem('selectedSite', JSON.stringify(sitesSelected[0]));
  }

  updateSite(e) {
    this.setState({ siteSelected: e });
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
        <NuevoSiteSelectorP clients={this.state.clients} clientSelected={this.state.clientSelected}
          updateSites={this.updateSites}/>
        <NuevoClientSitesSelectorP sites={this.state.sites} siteSelected={this.state.siteSelected}
          updateSite={this.updateSite} />
      </div>
    );
  }

}

export default NuevoSiteSelector;
