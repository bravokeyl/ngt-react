/*eslint-disable no-console*/
'use strict';

import React from 'react';
import axios from 'axios';
import NuevoSiteSelectorP from './site-selector-p';

class NuevoSiteSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
    console.log(this.state.clients,"Constructor");
  }

  componentWillMount() {
    console.log(this.state.clients,"Component Will Mount");
  }

  componentDidMount() {
    let url = "http://nuevosol.solar:5007/clients.json";
    axios.get(url)
      .then(res => {
        console.log(res);
        this.setState({ clients: res.data });
      });
      console.log(this.state.clients,"Component Mounted");
  }

  render() {
    let clientsObject = [];
    return (
      <NuevoSiteSelectorP clients={[this.state.clients]}/>
    );
  }
}



export default NuevoSiteSelector;
