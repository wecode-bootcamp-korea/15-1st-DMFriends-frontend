import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as configs from "../../../config.js";

class GetHelp extends Component {
  goToSignup = () => {
    // if (response.message === "valid user") {
    //   this.props.history.push("/main");
    // } else {
    //   this.props.history.push("/signup");
    // }
    this.props.history.push("/");
  };

  render() {
    return (
      <section className="GetHelp">
        <h3>실시간 문의</h3>
        <button onClick={this.goToSignup}>
          <img src={configs.speechBubble} alt="getHelpBtnImg" />
          상담하기
        </button>
      </section>
    );
  }
}

export default withRouter(GetHelp);
