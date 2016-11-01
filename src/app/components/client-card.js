import React from "react";
import {Link} from "react-router";
import moment from "moment";

class NuevoClientCard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let cid = this.props.client.id;
    return (
      <div className="col-md-3 col-sm-4 col-sm-6 col-xs-12">
        <div className="tracker-item">
          <div className="card">
            {this.props.noImage ? "":(<div className="tr-container">
              <a>
                <img className="img-responsive" src={this.props.client.src} />
              </a>
            </div>)}
            <div className="card-footer-wrapper">
              <Link to={cid}>
                <div className="card__footer clearfix">
                <div className="pull-right">
                  <div className="status">
                    <div>{this.props.client.capacity}</div>
                    <i className={"material-icons "+ (this.props.client.status ? "green":"red")}>
                    {this.props.client.status ? "check_circle":"error"}
                    </i>
                  </div>
                </div>

                  <div className="card__title truncate">
                  {this.props.client.name}
                </div>

                <p className="truncate">
                  {moment().subtract(3, 'm').fromNow()}
                </p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NuevoClientCard.propTypes = {
  client: React.PropTypes.object.isRequired,
  noImage: React.PropTypes.bool
};

export default NuevoClientCard;
