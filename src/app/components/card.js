import React from "react";

class NuevoCard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="col-md-3 col-sm-4 col-sm-6 col-xs-12">
        <div className="tracker-item">
          <div className="card">
            {!this.props.noImage ? "":(<div className="tr-container">
              <a>
                <img className="img-responsive" src={this.props.imageSrc} />
              </a>
            </div>)}
            <div className="card-footer-wrapper">
              <div className="card__footer clearfix">
                <div className="pull-right">
                  <div className="status">
                    <div>{this.props.status ? "Live":"Dead"}</div>
                    <i className={"material-icons "+ (this.props.status ? "green":"red")}>
                    {this.props.status ? "check_circle":"error"}
                    </i>
                  </div>
                </div>
                <a className="card__title truncate">
                  {this.props.name}
                </a>
                <p className="truncate">
                  Oct 31st, 2016 23:17
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NuevoCard;
