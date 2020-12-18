import React, { Component } from "react";
import * as configs from "../../../config.js";

export default class scrollToTop extends Component {
  constructor() {
    super();
    this.state = {
      isHide: false,
    };
  }

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // handleHideToggle = () => {
  //   const { isHide } = this.state;
  //   if (window.scrollY > 850) {
  //   }
  // }; // 밑으로 내리면 버튼이 나오도록 구현 중

  render() {
    return (
      <button
        className={this.state.isHide ? "scrollHidden" : "scrollToTop"}
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
