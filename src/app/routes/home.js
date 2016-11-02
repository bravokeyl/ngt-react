/*eslint-disable no-console*/
import React, { Component } from "react";
import axios from "axios";
/* Common Components */
import NuevoSidebar from '../common/sidebar';
import NuevoHeader from '../common/header';
import NuevoActivity from '../common/activity';

import NuevoClientCard from '../components/client-card';
class NuevoHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: JSON.parse(localStorage.getItem("clients")) || [],
      isSidebarOpen : true
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  componentDidMount() {
    console.log(!this.state.clients,this.state.cards.length);
    if(!this.state.cards.length) {
      this.fetchClients();
    }
  }
  fetchClients(){
    console.log("Fetching clients...");
    let url = "/clients.json";
    return axios.get(url)
      .then(({data}) => {
        this.setState({cards: data});
        localStorage.setItem("clients",JSON.stringify(data));
        console.log("Fetching clients Done");
      });
  }
  toggleSidebar(v) {
    this.setState({
      collapsed: v
    });
  }
  render() {
    let cards = [];
    this.state.cards.map((client,k)=>{
      cards.push(<NuevoClientCard key={client.id} client={client} />);
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

export default NuevoHome;
