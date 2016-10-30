/*eslint-disable no-console*/
'use strict';

import React from 'react';

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
  }

  render() {
    console.log("Rendering Client Component", this.state,"Props",this.props);
    let clientsObject = [];
    let self = this;
    this.props.clients.forEach(function(e,i){
       clientsObject.push(
         <a href="javascript:;" key={e.id} className="nuevo-site-nav-item" onClick={self.clientSelect} >
           {e.name}
        </a>
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
