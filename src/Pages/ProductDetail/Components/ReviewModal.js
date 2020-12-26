import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ReviewModal extends Component {
  goToLogin = () => {
    this.props.history.push("/Login");
  };

  render() {
    const { isOpen, close } = this.props;
    const { goToLogin } = this;
    return (
      <>
        {isOpen ? (
          <div className="ReviewModal" onClick={close}>
            <div className="popUpMsg">
              <div className="confirm" onClick={isOpen}>
                <p>리뷰는 구매 확정 후 14일 이내에만 작성 가능하며, 이후에는 작성이 불가합니다</p>
              </div>
              <div className="choose">
                <button onClick={close}>취소</button>
                <button onClick={goToLogin}>구매확정 하러가기</button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default withRouter(ReviewModal);
