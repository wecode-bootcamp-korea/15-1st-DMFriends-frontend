import React, { Component } from "react";
import * as configs from "../../../config.js";

export class GetHelp extends Component {
  render() {
    return (
      <section className="GetHelp">
        <h3>실시간 문의</h3>
        <button>
          <img src={configs.speechBubble} alt="getHelpBtnImg" />
          상담하기
        </button>
      </section>
    );
  }
}

export default GetHelp;
