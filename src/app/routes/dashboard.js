/*eslint-disable no-console*/
import React, { Component } from "react";
import NuevoCard from '../components/card';

class NuevoDashboard extends Component {
  constructor(props){
    super(props);
    this.cards = [
      {
        "id": "ngt-azp-s1-b1-001",
        "name":"Tracker 001",
        "src":"https://assets.materialup.com/uploads/88128535-1bcd-430e-964a-287351bd535a/teaser.png",
        "status": Math.round(Math.random()),
        "noImage": 1
      },
      {
        "id": "ngt-azp-s1-b1-002",
        "name":"Tracker 002",
        "src":"https://assets.materialup.com/uploads/82e6f494-2c91-41eb-aa3d-6747b6c07bd1/teaser.png",
        "status":Math.round(Math.random()),
        "noImage": 1
      },
      {
        "id": "ngt-azp-s1-b1-003",
        "name":"Tracker 003",
        "src":"https://assets.materialup.com/uploads/3cac35bc-0dc0-4e57-8863-8e89aada66a8/teaser.png",
        "status":Math.round(Math.random()),
        "noImage": 1
      },
      {
        "id": "ngt-azp-s1-b1-004",
        "name":"Tracker 004",
        "src":"https://assets.materialup.com/uploads/0da1d0f6-5cdf-4ec3-af27-440f3d566e9e/teaser.png",
        "status":Math.round(Math.random()),
        "noImage": 1
      }
    ];
  }
  render() {
    let cards = [];
    let cardsI = [];
    this.cards.map((i,k)=>{
      console.log("cards",i);
      cards.push(<NuevoCard key={k} name={i.name} imageSrc={i.src}  noImage id={i.id} status={i.status}/>);
    });
    return (
      <div className="row">
        {cards}
        {cards}
        {cards}
        {cards}
        {cards}
      </div>
    );
  }
}

export default NuevoDashboard;
