import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Common Components */
import NuevoSidebar from './common/sidebar';
import NuevoHeader from './common/header';
import NuevoActivity from './common/activity';

/* Pages */
import NuevoDashboard from './routes/dashboard';
import NuevoHome from './routes/home';
import NuevoCollections from './routes/c';
import NuevoDownloads from './routes/d';
import NuevoLogs from './routes/l';

class Nuevo extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.state = {
      isSidebarOpen : true
    };
  }
  toggleSidebar(v) {
    this.setState({
      collapsed: v
    });
  }
  render() {
    return (
      <div className="nuevo-container">
        <NuevoHeader isSuperAdmin isSidebarOpen={this.state.isSidebarOpen} />
        <NuevoSidebar />
        <div id="nuevo-body" className="nuevo-body">
            <div className="content">
              {this.props.children}
            </div>
        </div>

      </div>
    );
  }
}

Nuevo.propTypes = {
   children: React.PropTypes.element.isRequired
};

const routes = (
  <Route path="/" component={Nuevo}>
    <IndexRoute component={NuevoDashboard} />
    <Route path="/:cid/:sid" component={NuevoDashboard}/>
    <Route path="h" component={NuevoHome}/>
    <Route path="c" component={NuevoCollections}/>
    <Route path="d" component={NuevoDownloads}/>
    <Route path="l" component={NuevoLogs}/>
  </Route>
);

export default routes;
