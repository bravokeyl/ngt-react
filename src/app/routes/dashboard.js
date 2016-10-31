/*eslint-disable no-console*/
import React, { Component } from "react";
import NuevoCard from '../components/card';

class NuevoDashboard extends Component {
  constructor(props){
    super(props);
    this.cards = [
      {
        "name":"Tracker 001",
        "src":"https://assets.materialup.com/uploads/88128535-1bcd-430e-964a-287351bd535a/teaser.png",
        "status":1,
        "noImage": 1
      },
      {
        "name":"Tracker 002",
        "src":"https://assets.materialup.com/uploads/82e6f494-2c91-41eb-aa3d-6747b6c07bd1/teaser.png",
        "status":0,
        "noImage": 1
      },
      {
        "name":"Tracker 003",
        "src":"https://assets.materialup.com/uploads/3cac35bc-0dc0-4e57-8863-8e89aada66a8/teaser.png",
        "status":1,
        "noImage": 1
      },
      {
        "name":"Tracker 004",
        "src":"https://assets.materialup.com/uploads/0da1d0f6-5cdf-4ec3-af27-440f3d566e9e/teaser.png",
        "status":0,
        "noImage": 1
      }
    ];
  }
  render() {
    let cards = [];
    let cardsI = [];
    this.cards.map((i,k)=>{
      console.log("cards",i);
      cards.push(<NuevoCard key={k} name={i.name} imageSrc={i.src} noImage={i.noImage} status={i.status}/>);
      cardsI.push(<NuevoCard key={k} name={i.name} imageSrc={i.src} status={i.status}/>);
    });
    return (
      <div className="row">
        {cards}{cardsI}
      </div>
    );
  }
}

export default NuevoDashboard;
