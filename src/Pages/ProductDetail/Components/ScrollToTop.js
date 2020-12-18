import React, { Component } from "react";
import * as configs from "../../../config.js";

export default class scrollToTop extends Component {
  constructor() {
    super();
    this.hide = React.createRef();
  }

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      let scrollLocation = document.documentElement.scrollTop;
      if (scrollLocation >= 850) {
        this.hide.current.className = "scrollToTop";
      } else {
        this.hide.current.className = "scrollHidden";
      }
    });
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <button
        ref={this.hide}
        className="scrollHidden"
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
