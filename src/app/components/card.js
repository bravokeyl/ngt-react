import React from "react";
import {Link} from "react-router";
import moment from "moment";

class NuevoCard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let tid = ("t/"+this.props.tracker.id).trim();
    return (
      <div className="col-md-3 col-sm-4 col-sm-6 col-xs-12">
        <div className="tracker-item">
          <div className="card">
            <div className="card-footer-wrapper">
              <Link to={{pathname: tid}}>
                <div className="card__footer clearfix">
                <div className="pull-right">
                  <div className="status">
                    <div>{this.props.tracker.status ? "Live":"Dead"}</div>
                    <i className={"material-icons "+ (this.props.tracker.status ? "green":"red")}>
                    {this.props.tracker.status ? "check_circle":"error"}
                    </i>
                  </div>
                </div>

                  <div className="card__title truncate">
                  {this.props.tracker.name}
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

NuevoCard.propTypes = {
  tracker: React.PropTypes.object.isRequired
};

export default NuevoCard;
