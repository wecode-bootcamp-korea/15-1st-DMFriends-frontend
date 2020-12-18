import React, { Component } from "react";
import "./Feeds.scss";

class Feeds extends Component {
  render() {
    const { feeds } = this.props;

    return (
      <>
        {feeds.map((feed) => (
          <article className="feed">
            <section className="mainHeader">
              <div className="headerInfoBox">
                <div className="headerInfoImgBox">
                  <img className="headerInfoImg" src={feed.usrIdSrc} alt="profile" />
                </div>
                <div className="headerInfoText">
                  <div className="headerInfoId">{feed.userId}</div>
                  <div className="headerInfoTime">{feed.InfoTime}&nbsp;전</div>
                </div>
              </div>
            </section>
            <section className="mainFeed">
              <div className="feedImgbox">
                <img className="feedImg" src={feed.usrFeedSrc} alt="profile" />
              </div>
            </section>
            <section className="feedIconBox">
              <div className="feedIconLeft">
                <img className="likeIcon" src="images\chaebinhan\Main\like-black.png" alt="like" />
                <img className="replyIcon" src="images\chaebinhan\Main\reply-black.png" alt="reply" />
              </div>
              <div className="feedIconRight">
                <button type="button" className="feedShareBtn" id="feedShareModalBtn">
                  <img className="shareIcon" src="images\chaebinhan\Main\share-black.png" alt="share" />
                </button>
              </div>
            </section>
            <section className="bodyContentsBox">
              <div className="goodBox">
                <div className="good">좋아요</div>
                <div className="goodCount">{feed.goodCount}개</div>
              </div>
              <p className="bodyTitle">{feed.bodyTitle}</p>
              <p className="bodyContents">{feed.bodyContents}</p>
            </section>
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
          </article>
        ))}
      </>
    );
  }
}

export default Feeds;
