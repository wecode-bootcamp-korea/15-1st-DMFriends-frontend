import React, { Component } from "react";
import * as configs from "../../../../config";
import "./ViewMoreContainer.scss";

class ViewMoreContainer extends Component {
  render() {
    return (
      <div className="ViewMoreContainer">
        <div className="ViewMoreBar">
          <button to="/Category" className="goToNewBtn">
            <span>더 보기</span>
          </button>
        </div>
        <img src={configs.Plus} alt="plus" />
      </div>
    );
  }
}

export default ViewMoreContainer;
