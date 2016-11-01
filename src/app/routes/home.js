/*eslint-disable no-console*/
import React, { Component } from "react";
import axios from "axios";
import NuevoClientCard from '../components/client-card';
class NuevoHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []
    };
  }
  componentDidMount() {
    this.fetchClients();
  }
  fetchClients(){
    let url = "/clients.json";
    return axios.get(url)
      .then(({data}) => {
        this.setState({cards: data});
      });
  }
  render() {
    let cards = [];
    this.state.cards.map((client,k)=>{
      cards.push(<NuevoClientCard key={client.id} client={client} />);
    });
    return (
      <div className="row">
        {cards}
      </div>
    );
  }
}

export default NuevoHome;
