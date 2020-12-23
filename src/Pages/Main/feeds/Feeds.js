import React, { Component } from "react";
import "./Feeds.scss";
import Slider from "react-slick";
import "../Main.scss";

class Feeds extends Component {
  state = {
    feedImgs: [],
  };

  modalOn = (e) => {
    const id = e.currentTarget.getAttribute("value");
    const modal = document.getElementById(id);
    const span = modal.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  };

  changeHeart = () => {
    const { feed } = this.props;

    this.setState({
      feed: feed,
    });
  };

  render() {
    const { feed } = this.props;
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <article className="feed">
          <section className="mainHeader">
            <div className="headerInfoBox">
              <div className="headerInfoImgBox">
                <img className="headerInfoImg" src={feed.thumb_image} alt="profile" />
              </div>
              <div className="headerInfoText">
                <div className="headerInfoId">{feed.uploader}</div>
                <div className="headerInfoTime">{feed.created_at}&nbsp;전</div>
              </div>
            </div>
          </section>
          <section className="mainFeed">
            <div className="feedImgBox">
              <Slider {...settings}>
                {feed.board_images.map((img, idx) => (
                  <div className="feedImgMiniBox" key={idx}>
                    <img className="feedImg" src={img} alt="profile" />
                  </div>
                ))}
              </Slider>
            </div>
          </section>
          <section className="feedIconBox">
            <div className="feedIconLeft">
              <img
                className="likeIcon"
                onClick={this.changeHeart}
                src={feed.board_likes ? "images/chaebinhan/Main/heart.png" : "images/chaebinhan/Main/like-black.png"}
                alt="like"
                value={feed.id}
              />
              <img className="replyIcon" src="images\chaebinhan\Main\reply-black.png" alt="reply" />
            </div>
            <div className="feedIconRight">
              <button
                onClick={this.modalOn}
                value={feed.id}
                type="button"
                className="feedShareBtn"
                id="feedShareModalBtn"
              >
                <img className="shareIcon" src="images\chaebinhan\Main\share-black.png" alt="reply" />
              </button>
            </div>
            <div id={feed.id} className="myModal" value={feed.id}>
              <div className="modal-content">
                <div className="modalSectionHight">
                  <div className="shareText">공유하기</div>
                  <div className="modalSectiondawn">
                    <img className="shareIconItem" src="images\chaebinhan\Main\sns-kakao-talk-60.png" alt="kakao" />
                    <img className="shareIconItem" src="images\chaebinhan\Main\sns-facebook-60.png" alt="facebook" />
                    <img className="shareIconItem" src="images\chaebinhan\Main\sns-url-60.png" alt="share" />
                  </div>
                  <div className="close" value={feed.id}>
                    닫기
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bodyContentsBox">
            <div className="goodBox">
              <div className="good">좋아요</div>
              <div className="goodCount">{feed.board_likes}개</div>
            </div>
            <p className="bodyTitle">{feed.title}</p>
            <p className="bodyContents">{feed.content}</p>
          </section>
        </article>
      </>
    );
  }
}

export default Feeds;
