import React from 'react';

class NuevoLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    // console.log(this.props.toggleSidebar,"Props chid");
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleSidebar(e) {
    this.setState({
      open: !this.state.open
    });
    let classes = document.querySelector(".nuevo-sidebar").classList;
    // let bodyClassList = document.querySelector("body").classList;
    if(this.state.open){
      classes.add("collapsed");
      // bodyClassList.add("body__without-menu");
    } else {
      classes.remove("collapsed");
      // bodyClassList.remove("body__without-menu");
    }
  }
  render() {
    return (
      <div className="nuevo-logo">
        <a href="javascript:;" className="hamburger" onClick={this.toggleSidebar}>
          <i className="material-icons">menu</i>
        </a>
        <a href="javascript:;" className="l">
          NM
        </a>
      </div>
    );
  }
}

export default NuevoLogo;
