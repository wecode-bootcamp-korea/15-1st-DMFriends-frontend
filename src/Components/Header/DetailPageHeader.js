import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as configs from "../../config";
import SideMenu from "../SideMenu/SideMenu";
import "./DetailPageHeader.scss";

class DetailPageHeader extends Component {
  constructor() {
    super();
    this.state = {
      showSideMenu: false,
      showMenu: false,
    };
  }

  goToPrev = () => {
    this.props.history.goBack();
  };

  goToCategory = () => {
    console.log("aa");
    this.setState({
      showSideMenu: true,
      showMenu: true,
    });
  };

  goToMain = () => {
    this.props.history.push("/");
  };

  goToSearch = () => {
    this.props.history.push("/Search");
  };

  goToCart = () => {
    this.props.history.push("/CartList");
  };

  hideSideMenu = () => {
    this.setState({
      showMenu: true,
    });
  };

  render() {
    const { goToMain, goToPrev, goToSearch, goToCategory, goToCart } = this;
    const { showSideMenu, showMenu } = this.state;
    return (
      <div className="DetailPageHeader">
        {showSideMenu ? <SideMenu showMenu={showMenu} hideSideMenu={this.hideSideMenu} /> : ""}
        <div className={showMenu ? "overLay active" : "overLay"} onClick={this.hideSideMenu}></div>
        <div className="headerWrap">
          <div>
            <button onClick={goToPrev}>
              <img src={configs.backwardBtnImg} alt="backwardBtnImg" />
            </button>
            <button onClick={goToCategory}>
              <img src={configs.menuBtnImg} alt="toMenuBtnImg" />
            </button>
            <button onClick={goToMain}>
              <img src={configs.toHomeBtnImg} alt="toHomeBtnImg" />
            </button>
          </div>
          <span>제품 상세</span>
          <div>
            <button onClick={goToSearch}>
              <img src={configs.searchBtnImg} alt="searchBtnImg" />
            </button>
            <button onClick={goToCart}>
              <img src={configs.bag} alt="toCartBtnImg" />
            </button>
            <button>
              <img src={configs.changeLanguageBtnImg} alt="changeLanguageBtnImg" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DetailPageHeader);
