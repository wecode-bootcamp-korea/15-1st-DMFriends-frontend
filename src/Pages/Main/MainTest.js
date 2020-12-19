import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./MainTest.scss";

class MainTest extends React.Component {
  state = {
    comments: [
      {
        id: 0,
        userId: "chaebin",
        userCmt: "어려워요 어려워ㅠㅠ",
        cmtLike: true,
      },
      {
        id: 1,
        userId: "zznagzzang",
        userCmt: "하...화이팅합시다..!!!!",
        cmtLike: false,
      },
      {
        id: 2,
        userId: "beomki",
        userCmt: "@)-8--- 장미하나,,,놓고,,갑니다,,,",
        cmtLike: false,
      },
    ],
  };

  changeHeart = (e) => {
    console.log(e.currentTarget.getAttribute("value")); //몇번째 댓글인지 찾아봤지
    const repleNum = e.currentTarget.getAttribute("value"); // 찾은걸 변수에 담아놓고
    const commentsArr = this.props; // 댓글들이 담긴 state를 다 불러왔지
    console.log(commentsArr); // 불러온걸찍어봤는데 잘나오길래 바로 repleNum번째 댓글을 출력해볼라고했더니
    console.log(commentsArr[repleNum]); // 이렇게하니까 undefined가 나오더라~
    console.log(commentsArr.comments); // 그래서 찾아보니까 이렇게 해야 comments만 배열 형태로 가져올수 있었다
    console.log(commentsArr.comments[repleNum]); // 그래서 이거의 repleNum번째 댓글을 찾으니 딱 찾아낼수있었다
    console.log("before: " + commentsArr.comments[repleNum].cmtLike); // 딱 찾아낸 댓글의 좋아요 상태값을 찾아내서
    const currentLike = commentsArr.comments[repleNum].cmtLike; //저장한다음
    commentsArr.comments[repleNum].cmtLike = !currentLike; //반대의값으로 바꿔준다
    console.log("after: " + commentsArr.comments[repleNum].cmtLike); // 반대로 잘 바꼇는지 확인
    this.setState({
      //state를 새로 바뀐 내용으로 교체해준다!!
      comments: commentsArr,
    });
  };

  hateSb = () => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("myBtn");
    const span = document.getElementsByClassName("close")[0];
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

  render() {
    return (
      <div className="Main">
        <h2>예시입니다만,,,성범이는 뭐라구요?! 할말을 잃은 범</h2>
        <button onClick={this.hateSb} id="myBtn" className="psb">
          성범이는
        </button>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>방구다!!!!!!!!!!!!!!!!</p>
          </div>
        </div>

        {this.state.comments.map((comment) => (
          <div className="reple">
            <div className="repl_id">
              <b>{comment.userId}</b>&nbsp;
            </div>
            <div className="repl_contents">{comment.userCmt}</div>
            <div
              className={comment.cmtLike ? "red_icon" : "like_icon"}
              onClick={this.changeHeart}
              value={comment.id}
              alt="좋아요 아이콘"
            >
              <i className={comment.cmtLike ? "fas fa-heart" : "far fa-heart"}></i>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default withRouter(MainTest);
