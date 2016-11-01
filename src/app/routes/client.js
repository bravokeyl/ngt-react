/*eslint-disable no-console*/
import React, { Component } from "react";
import axios from "axios";
import NuevoSiteCard from '../components/site-card';

class NuevoClient extends Component {
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
        console.log(this.props.params.cid);
        this.setState({cards: data});
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
      <div className="row">
        {cards}
      </div>
    );
  }
}

NuevoClient.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default NuevoClient;
