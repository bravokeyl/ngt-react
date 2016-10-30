'use strict';

import React from 'react';

class NuevoSiteSelectorP extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let clientsObject = [];
    this.props.clients.forEach(function(e,i){
      clientsObject.push(<a href="javascript:;"  className="nuevo-site-nav-item clearfix">
        <p key={e.id}>
        {e.name}
        </p>
      </a>);
    });
    return (
      <div>
        <div className="nuevo-site-nav nuevo-client-nav">
          <a href="javascript:;" className="nuevo-site-nav-item clearfix">
            <p>
              Azure Power
            </p>
          </a>
          <div className="nuevo-site-nav-items-dropdown">
            {clientsObject}
          </div>
        </div>
        <div className="nuevo-site-nav">
          <a href="javascript:;" className="nuevo-site-nav-item clearfix">
            <p>
              Azure Power <strong>1</strong>
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
      </div>
    );
  }
}

NuevoSiteSelectorP.propTypes = {
  clients: React.PropTypes.array.isRequired
};

export default NuevoSiteSelectorP;
