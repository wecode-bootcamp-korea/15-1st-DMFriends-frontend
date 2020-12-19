import React, { Component } from "react";
import "./Feeds.scss";
import ShareModal from "../shareModal/ShareModal";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Feeds extends Component {
  state = {
    feedImgs: [],
  };

  modalOn = (e) => {
    // console.log(document.getElementsByClassName("myModal"));
    // console.log(e.currentTarget.getAttribute("value"));
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
    if (true) {
      //로그인조건 추가예정
      console.log(e.currentTarget.getAttribute("value")); //몇번째 피드인지 찾아봤지
      const feedNum = e.currentTarget.getAttribute("value"); // 찾은걸 변수에 담아놓고
      const feedsArr = this.props; // 댓글들이 담긴 state를 다 불러왔지
      console.log(feedsArr); // 불러온걸찍어봤는데 잘나오길래 바로 feedNum번째 댓글을 출력해볼라고했더니
      console.log(feedsArr[feedNum]); // 이렇게하니까 undefined가 나오더라~
      console.log(feedsArr.feeds); // 그래서 찾아보니까 이렇게 해야 feed만 배열 형태로 가져올수 있었다
      console.log(feedsArr.feeds[feedNum]); // 그래서 이거의 feedNum번째 댓글을 찾으니 딱 찾아낼수있었다
      console.log("before: " + feedsArr.feeds[feedNum].feedLike); // 딱 찾아낸 댓글의 좋아요 상태값을 찾아내서
      const currentLike = feedsArr.feeds[feedNum].feedLike; //저장한다음
      feedsArr.feeds[feedNum].feedLike = !currentLike; //반대의값으로 바꿔준다
      console.log("after: " + feedsArr.feeds[feedNum].feedLike); // 반대로 잘 바꼇는지 확인
      this.setState({
        //state를 새로 바뀐 내용으로 교체해준다!!
        feeds: feedsArr,
      });
    } else {
      //로그인유도 모달창 출력예정
      //loginModal();
    }
  };

  loginModal = () => {
    //모달 띄우는 함수 구현예정
  };

  // imgNextArrow = () => {
  //   const { className, style, onClick } = this.props;
  //   return <div className={className} style={{ ...style, display: "block", background: "red" }} onClick={onClick} />;
  // };

  // imgPrevArrow = () => {
  //   const { className, style, onClick } = this.props;
  //   return <div className={className} style={{ ...style, display: "block", background: "red" }} onClick={onClick} />;
  // };

  render() {
    const { feeds } = this.props;
    const settings = {
      dots: true,
      // nextArrow: <imgNextArrow />,
      // prevArrow: <imgPrevArrow />,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
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
                <Slider {...settings}>
                  {feed.usrFeedSrc.map((img) => (
                    <div>
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
                  src={feed.feedLike ? "images/chaebinhan/Main/heart.png" : "images/chaebinhan/Main/like-black.png"}
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
