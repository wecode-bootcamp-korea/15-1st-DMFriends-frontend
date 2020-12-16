import "./Main.scss";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";

class Main extends React.Component {
  render() {
    return (
      <div className="dmContainer">
        <div className="headerLine">
          <div className="header">
            <ul>
              <li>
                <a class="active" href="https://store.kakaofriends.com/kr/index?tab=today">
                  <div className="today">
                    <div>오늘</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://store.kakaofriends.com/kr/index?tab=new">
                  <div className="new">
                    <div>신규</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://store.kakaofriends.com/kr/index?tab=hot">
                  <div className="hot">
                    <div>인기</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://store.kakaofriends.com/kr/basket/products">
                  <div className="products">
                    <div>신규</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <article className="feed">
          <section className="mainHeader">
            <div className="headerInfoBox">
              <div className="headerInfoImgBox">
                <img className="headerInfoImg" src="images\chaebinhan\Main\mini.png" alt="profile" />
              </div>
              <div className="headerInfoText">
                <div className="headerInfoId">춘식이</div>
                <div className="headerInfoTime">2시간 전</div>
              </div>
            </div>
          </section>
          <section className="mainFeed">
            <div className="feedImgbox">
              <img className="feedImg" src="images\chaebinhan\Main\kakao2.jpg" alt="profile" />
            </div>
          </section>
          <section className="feedIconBox">
            <div className="feedIcon1">
              <img className="likeIcon" src="images\chaebinhan\Main\like-black.png" alt="like" />
              <img className="replyIcon" src="images\chaebinhan\Main\reply-black.png" alt="reply" />
            </div>
            <div className="feedIcon2">
              <img className="shareIcon" src="images\chaebinhan\Main\share-black.png" alt="share" />
            </div>
          </section>
          <section className="bodyContentsBox">
            <div className="goodBox">
              <div className="good">댓글</div>
              <div className="goodCount">236개</div>
            </div>
            <p className="bodyTitle">
              ⭐축/데/뷔/임/박⭐
              <br /> 두근 두근..춘식이 굿즈 데뷔 D-2!
            </p>
            <p className="bodyContents">
              12월 17일, 온라인스토어에서 최초 공개되는 <br />
              춘식이 굿즈와 만나요!
            </p>
          </section>
          <section className="mainReply">
            <div className="footerReply">
              <div className="footerReplyLike">댓글</div>
              <div className="footerReplyCount">89개</div>
            </div>
            <div className="footerReplyContents">
              <div className="footerReplyId">한*빈</div>
              <div className="footerReplyContent">동묘앞 프렌즈가 최고야!</div>
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
      </div>
    );
  }
}
export default withRouter(Main);
