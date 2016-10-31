/*eslint-disable no-console*/
'use strict';

import React from 'react';
import { Link } from 'react-router';

class NuevoclientSelectorP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClient: this.props.clientSelected
    };
    this.clientSelect = this.clientSelect.bind(this);
  }

  clientSelect(e){
    this.setState({selectedClient: e.target.text});
    this.props.updateSites(e.target.text);
    localStorage.setItem('selectedClient', JSON.stringify(e.target.text));
  }

  render() {
    // console.log("Rendering Client Component", this.state,"Props",this.props);
    let clientsObject = [];
    let self = this;
    this.props.clients.forEach(function(e,i){
      let path = "/"+e.id+"/1";
       clientsObject.push(
         <Link to={{ pathname: path, query:{b:"n"} }} key={e.id} className="nuevo-site-nav-item" onClick={self.clientSelect} >
           {e.name}
        </Link>
      );
    });
    return (
      <div className="nuevo-site-nav nuevo-client-nav">
          <a href="javascript:;" className="nuevo-site-nav-item clearfix">
            <p>
              {this.state.selectedClient}
            </p>
          </a>
          <div className="nuevo-site-nav-items-dropdown">
            {clientsObject}
          </div>
        </div>
    );
  }
}

NuevoclientSelectorP.propTypes = {
  clients: React.PropTypes.array.isRequired,
  clientSelected: React.PropTypes.string,
  updateSites: React.PropTypes.func
};

export default NuevoclientSelectorP;
