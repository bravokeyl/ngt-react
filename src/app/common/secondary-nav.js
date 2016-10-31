import React from 'react';
import { Link } from 'react-router';
import enhanceWithClickOutside  from 'react-click-outside';

class NuevoSecondaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.profileHandleClick = this.profileHandleClick.bind(this);
  }
  profileHandleClick(e) {
    this.setState ({
      open: !this.state.open
    });
  }
  handleClickOutside() {
    this.setState ({
      open: false
    });
  }
  render() {
    return (
      <div className="secondary-navbar">
        <div className="secondary-navbar-inner">
          <ul className="secondary-navbar__list-items clearfix">
            <li className="secondary-navbar__list-item navigation__dropdown">
              <Link to={location => ({ ...location, query: { b: 'n' } })} activeClassName="active">
                North Block
              </Link>
            </li>
            <li className="secondary-navbar__list-item navigation__dropdown">
              <Link to={location => ({ ...location, query: { b: 's' } })} activeClassName="active">
                South Block
              </Link>
            </li>
            <li className="secondary-navbar__list-item navigation__dropdown">
              <Link to={location => ({ ...location, query: { b: 'w' } })} activeClassName="active">
                West Block
              </Link>
            </li>
            <li className="secondary-navbar__list-item navigation__dropdown">
              <Link to={location => ({ ...location, query: { b: 'e' } })} activeClassName="active">
                East Block
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default enhanceWithClickOutside(NuevoSecondaryNav);
