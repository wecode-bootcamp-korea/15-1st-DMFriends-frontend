import React, { Component } from "react";
import * as configs from "../../config.js";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="HeaderContainer">
          <div className="HamburgerBox">
            <button className="HamBtn">
              <img src={configs.threeLine} alt="hamburger" />
            </button>
          </div>
          <div className="CenterLogo">
            <a href="/NewProducts">KAKAO FRIENDS</a>
            <img src="images/taejinlim/DMlogo.PNG" alt="logo" />
          </div>
          <div className="SearchBox">
            <button className="SearchBtn">
              <img src={configs.searchBtnImg} alt="search" />
            </button>
            <button className="TransBtn">
              <img src={configs.changeLanguageBtnImg} alt="earth" />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
