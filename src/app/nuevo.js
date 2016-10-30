'use strict';

import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


injectTapEventPlugin();

// class App extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render(){
//       return(
//         <MuiThemeProvider>
//           <NuevoHeader isSuperAdmin="true" />
//           <NuevoSidebar />
//         </MuiThemeProvider>
//     );
//   }
// }

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('nuevo-app')
);
