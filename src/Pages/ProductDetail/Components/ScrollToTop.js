import React, { Component } from "react";
import * as configs from "../../../config.js";

class scrollToTop extends Component {
  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <button
        className="scrollToTop"
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <span>
          <img src={configs.upArrow} alt="upArrow" />
        </span>
      </button>
    );
  }
}

export default scrollToTop;
