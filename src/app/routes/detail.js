/*eslint-disable no-console*/
import React, { Component } from "react";
import NuevoCard from '../components/card';

class NuevoTrackerDetail extends Component {
  constructor(props){
    super(props);
    this.cards = [
      {
        "name":"Tracker 001",
        "src":"https://assets.materialup.com/uploads/88128535-1bcd-430e-964a-287351bd535a/teaser.png",
        "status": Math.round(Math.random()),
        "noImage": 1
      }
    ];
  }
  render() {
    let cards = [];
    let cardsI = [];
    this.cards.map((i,k)=>{
      console.log("cards",i);
      cards.push(<NuevoCard key={k} name={i.name} imageSrc={i.src}  status={i.status}/>);
    });
    return (
      <div className="row">
        {cards}
      </div>
    );
  }
}

export default NuevoTrackerDetail;
