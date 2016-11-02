/*eslint-disable no-console*/
import React, { Component } from "react";
/* Common Components */
import NuevoSidebar from '../common/sidebar';
import NuevoHeader from '../common/header';
import NuevoActivity from '../common/activity';

import NuevoCard from '../components/card';

class NuevoTrackerDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [],
      isSidebarOpen : true
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.cards = [
      {
        "name":"Tracker 001",
        "src":"https://assets.materialup.com/uploads/88128535-1bcd-430e-964a-287351bd535a/teaser.png",
        "status": Math.round(Math.random()),
        "noImage": 1
      }
    ];
  }
  toggleSidebar(v) {
    this.setState({
      collapsed: v
    });
  }
  render() {
    let cards = [];
    let cardsI = [];
    this.cards.map((i,k)=>{
      console.log("cards",i);
      cards.push(<NuevoCard key={k} tracker={i} />);
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

export default NuevoTrackerDetail;
