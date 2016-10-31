import React, { Component } from "react";

class NuevoDashboard extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <b>
          Client: {this.props.params.cid}<br/>
          Site: {this.props.params.sid}<br/>
          Query: {this.props.location.search}<br/>
          Path: {this.props.location.pathname}<br/>
        </b>
      </div>
    );
  }
}

export default NuevoDashboard;
