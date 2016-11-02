import React from 'react';
import enhanceWithClickOutside  from 'react-click-outside';

class NuevoHeaderMenu extends React.Component {
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
      <ul className="header__menu-items">
        <li className="header__menu-item header__menu-item--notification">
          <a href="javascript:;" className="dropdown-toggle dropdown-toggle--notifications">
            <i className="material-icons">notifications</i>
          </a>
        </li>
        <li className={"header__menu-item header__menu-item--profile"+(this.state.open ? " open" : "")} onClick={this.profileHandleClick}>
          <a href="javascript:;" className="dropdown-toggle dropdown-toggle--profile">
            <img width="30" height="30" src="/images/avatar.jpg" alt="Photo" />
          </a>
          <ul className="dropdown-menu header-nav__navigation-dropdown">
            <li>
              <a href="/users/azp">My Profile</a>
            </li>
            <li>
              <a href="/users/settings">Settings</a>
            </li>
            <li>
              <a href="/logout">Log out</a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default enhanceWithClickOutside(NuevoHeaderMenu);
