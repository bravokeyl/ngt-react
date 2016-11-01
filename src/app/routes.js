import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Pages */
import NuevoDashboard from './routes/dashboard';
import NuevoTrackerDetail from './routes/detail';
import NuevoClient from './routes/client';
import NuevoHome from './routes/home';
import NuevoCollections from './routes/c';
import NuevoDownloads from './routes/d';
import NuevoLogs from './routes/l';

class Nuevo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nuevo-container">
        {this.props.children}
      </div>
    );
  }
}

Nuevo.propTypes = {
   children: React.PropTypes.element.isRequired
};

const routes = (
  <Route path="/" component={Nuevo}>
    <IndexRoute component={NuevoHome} />
    <Route path="/:cid" component={NuevoClient} />
    <Route path="/:cid/:sid" component={NuevoDashboard} />
    <Route path="t/:tid" component={NuevoTrackerDetail}/>
    <Route path="h" component={NuevoHome}/>
    <Route path="c" component={NuevoCollections}/>
    <Route path="d" component={NuevoDownloads}/>
    <Route path="l" component={NuevoLogs}/>
  </Route>
);

export default routes;
