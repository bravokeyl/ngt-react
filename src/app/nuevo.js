'use strict';

import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NuevoHeader from './components/header';
import NuevoSidebar from './components/left-sidebar';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <NuevoHeader />
    <NuevoSidebar />
  </MuiThemeProvider>
);

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('nuevo-app')
);
