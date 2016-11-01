/*eslint-disable no-console*/
import React, { Component } from "react";
import axios from "axios";
/* Common Components */
import NuevoSidebar from '../common/sidebar';
import NuevoHeader from '../common/header';
import NuevoActivity from '../common/activity';
import NuevoSiteCard from '../components/site-card';

class NuevoClient extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [],
      isSidebarOpen : true
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  componentDidMount() {
    this.fetchClients();
  }
  fetchClients(){
    let url = "/clients.json";
    return axios.get(url)
      .then(({data}) => {
        console.log(this.props.params.cid);
        this.setState({cards: data});
      });
  }
  toggleSidebar(v) {
    this.setState({
      collapsed: v
    });
  }
  render() {
    let cards = [];
    let cid = this.props.params.cid;
    this.state.cards.map((client,k)=>{
      if(cid == client.id){
        client.sites.map((i,k)=>{
          cards.push(<NuevoSiteCard key={k} site={i} />);
        });
      }
    });
    return (
      <div>
        <NuevoHeader isSuperAdmin isSidebarOpen={this.state.isSidebarOpen} />
        <NuevoSidebar />
        <div id="nuevo-body" className="nuevo-body">
            <div className="content">
              <div className="row">
                {cards}
              </div>
            </div>
        </div>
      </div>
    );
  }
}

NuevoClient.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default NuevoClient;
