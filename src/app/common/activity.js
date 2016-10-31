import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const NuevoActivity = () => (
  <div className="nuevo-activity">
    <MuiThemeProvider>
      <RaisedButton label="Nuevo Activity" />
    </MuiThemeProvider>
  </div>
);

export default NuevoActivity;
