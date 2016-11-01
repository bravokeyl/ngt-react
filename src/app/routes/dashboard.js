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
  selectBlock(block,cards){
    switch(block){
      case "n":
          return(<div className="nb"><div>North</div>{cards}</div>);
      case "s":
          return(<div className="sb"><div>South</div>{cards}</div>);
      case "w":
          return(<div className="wb"><div>West</div>{cards}</div>);
      case "e":
          return(<div className="eb"><div>East</div>{cards}</div>);
      default:
          return(<div className="all"><div>Default Block</div>
                  {cards}{cards}{cards}{cards}
                </div>);
    }
  }
  render() {
    let cards = [];
    let cardsI = [];
    this.cards.map((i,k)=>{
      cards.push(<NuevoCard key={k} name={i.name} imageSrc={i.src}  noImage id={i.id} status={i.status}/>);
    });
    let selectedBlock = "n";
    selectedBlock = this.props.location.search.split("=");

    return (
      <div className="row">
        {this.selectBlock(selectedBlock[1],cards)}
      </div>
    );
  }
}

NuevoDashboard.propTypes = {
  location: React.PropTypes.object.isRequired
};

export default NuevoDashboard;
