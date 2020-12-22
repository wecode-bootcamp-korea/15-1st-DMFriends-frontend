import React, { Component } from "react";
import "./Feeds.scss";
import ShareModal from "../shareModal/ShareModal";
import Slider from "react-slick";
import "../Main.scss";

class Feeds extends Component {
  state = {
    feedImgs: [],
  };

  modalOn = (e) => {
    const id = e.currentTarget.getAttribute("value");
    const modal = document.getElementsByClassName("myModal")[id];
    const btn = document.getElementsByClassName("feedShareBtn")[id];
    const span = document.getElementsByClassName("close")[id];
    btn.onclick = function () {
      modal.style.display = "block";
    };

    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  };

  changeHeart = (e) => {
    const feedArr = this.props;
    console.log(feedArr); // 피드에 대한 데이터 건네받은걸 어떤식으로건네줬는지 확인해보고
    const currentLike = feedArr.feed.feedLike;
    console.log(currentLike); //그중에서 하트 체크여부인 feedLike의 값만 어떻게 빼내는지 확인해보고
    feedArr.feed.feedLike = !currentLike; //빼낸값을 반대로바꾸도록 바꾼다음에

    this.setState({
      feed: feedArr,
    }); //feedLike 바꾼값이 들어있는 json을 setState를 이용해서 기존꺼랑 바꿔주면 바뀐하트상태로 표시되서 바뀐다

    // fetch("하트상태바꾸는주소", {
    //   method: "post",
    //   body: JSON.stringify({
    //     userId: "chaebinzzang",
    //     feed: feedArr,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     this.setState({
    //       feed: res,
    //     });
    //   }); //만약에 백이랑 연결한다면 이렇게..?!
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
                {feed.board_images.map((img) => (
                  <div className="feedImgMiniBox">
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
            <div id="myModal" className="myModal">
              <div className="modal-content">
                <div className="modalSectionHight">
                  <div className="shareText">공유하기</div>
                  <div className="modalSectiondawn">
                    <img className="shareIconItem" src="images\chaebinhan\Main\sns-kakao-talk-60.png" alt="kakao" />
                    <img className="shareIconItem" src="images\chaebinhan\Main\sns-facebook-60.png" alt="facebook" />
                    <img className="shareIconItem" src="images\chaebinhan\Main\sns-url-60.png" alt="share" />
                  </div>
                  <div className="close">닫기</div>
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
