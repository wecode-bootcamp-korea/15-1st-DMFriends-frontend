import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as configs from "../../../../config";
import "./ViewMoreContainer.scss";

class ViewMoreContainer extends Component {
  render() {
    return (
      <div className="ViewMoreContainer">
        <Link to="/Category" className="ViewMoreBar">
          <button className="goToNewBtn">
            <span>더 보기</span>
          </button>
        </Link>
        <img src={configs.Plus} alt="plus" />
      </div>
    );
  }
}

export default ViewMoreContainer;
