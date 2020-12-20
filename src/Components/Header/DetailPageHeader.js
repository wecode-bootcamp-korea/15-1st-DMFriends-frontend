import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as configs from "../../config";
import SideMenu from "../SideMenu/SideMenu";
import "./DetailPageHeader.scss";

class DetailPageHeader extends Component {
  goToPrev = () => {
    this.props.history.goBack();
  };

  goToCategory = () => {
    this.render(<SideMenu />);
    // this.props.history.push("/SideMenu");
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

  render() {
    const { goToMain, goToPrev, goToSearch, goToCategory, goToCart } = this;
    return (
      <div className="DetailPageHeader">
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
