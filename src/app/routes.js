import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Common Components */
import NuevoSidebar from './common/sidebar';
import NuevoHeader from './common/header';
import NuevoActivity from './common/activity';

/* Pages */
import NuevoDashboard from './routes/dashboard';

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
        <NuevoHeader isSidebarOpen={this.state.isSidebarOpen} />
        <NuevoSidebar />
        <div id="nuevo-body" className="nuevo-body">
            {this.props.children}
        </div>
        <NuevoActivity />
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
  </Route>
);

export default routes;
