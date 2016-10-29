'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const NuevoHeader = () => (
  <MuiThemeProvider>
    <RaisedButton label="Nuevo Monit" />
  </MuiThemeProvider>
);

export default NuevoHeader;
