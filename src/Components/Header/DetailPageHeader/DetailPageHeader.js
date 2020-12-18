import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./DetailPageHeader.scss";
import * as configs from "../../../config.js";

class DetailPageHeader extends Component {
  goToMain = () => {
    this.props.history.push("/");
  };

  goToPrev = () => {
    this.props.history.goBack();
  };

  goToSearch = () => {
    this.state.history.push("/Search");
  };

  render() {
    const { goToMain, goToPrev, goToSearch } = this;
    return (
      <div className="DetailPageHeader">
        <div className="headerWrap">
          <div>
            <button onClick={goToPrev}>
              <img src={configs.backwardBtnImg} alt="backwardBtnImg" />
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
