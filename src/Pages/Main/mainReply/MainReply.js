import React, { Component } from "react";
import "./MainReply.scss";

class MainReply extends Component {
  render() {
    const { feed } = this.props;
    console.log(this.props);
    return (
      <div className="MainReply">
        <section className="mainReply">
          <div className="footerReply">
            <div className="footerReplyLike">댓글</div>
            <div className="footerReplyCount">{feed.footerReplyCount}개</div>
          </div>
          <div className="footerReplyContents">
            <div className="footerReplyId">{feed.footerReplyId}</div>
            <div className="footerReplyContent">{feed.footerReplyContent}</div>
          </div>
          <div className="replyBox">
            <input
              className="footerReplyInput"
              type="text"
              placeholder="댓글을 달아주세요."
              onKeyPress={this.appKeyPress}
            ></input>
          </div>
        </section>
      </div>
    );
  }
}

export default MainReply;
