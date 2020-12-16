import React, { Component } from "react";
import "./DetailPageHeader.scss";
import * as configs from "../../../config.js";

export class DetailPageHeader extends Component {
  render() {
    return (
      <div className="DetailPageHeader">
        <div className="headerWrap">
          <div>
            <button>
              <img src={configs.backwardBtnImg} alt="backwardBtnImg" />
            </button>
            <button>
              <img src={configs.toHomeBtnImg} alt="toHomeBtnImg" />
            </button>
          </div>
          <span>제품 상세</span>
          <div>
            <button>
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

export default DetailPageHeader;
