import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ShareModal.scss";

class ShareModal extends React.Component {
  modalOn = () => {
    const modal = document.getElementsByClassName("myModal")[0];
    const btn = document.getElementsByClassName("feedShareBtn")[0];
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
      <>
        <div className="feedIconRight">
          <button onClick={this.modalOn} type="button" className="feedShareBtn" id="feedShareModalBtn">
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
      </>
    );
  }
}
export default withRouter(ShareModal);
