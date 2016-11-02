import React from "react";
import {Link} from "react-router";
import moment from "moment";

class NuevoSiteCard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let sid = this.props.site.id;
    return (
      <div className="col-md-3 col-sm-4 col-sm-6 col-xs-12">
        <div className="tracker-item">
          <div className="card">
            {this.props.noImage ? "":(<div className="tr-container">
              <Link to={{pathname: sid, query: { b: 'all' }}}>
                <img className="img-responsive" src={this.props.site.src} />
              </Link>
            </div>)}
            <div className="card-footer-wrapper">
              <Link to={{pathname: sid, query: { b: 'all' }}}>
                <div className="card__footer clearfix">
                <div className="pull-right">
                  <div className="status">
                    <div>Trackers</div>
                    <p>1200</p>
                  </div>
                </div>

                  <div className="card__title truncate">
                  {this.props.site.name}
                </div>

                <p className="truncate">
                  {this.props.site.location}
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

NuevoSiteCard.propTypes = {
  site: React.PropTypes.object.isRequired,
  noImage: React.PropTypes.bool
};

export default NuevoSiteCard;
