import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class LoginModal extends Component {
  goToLogin = () => {
    this.props.history.push("/Login");
  };

  render() {
    const { isOpen, close } = this.props;
    const { goToLogin } = this;
    return (
      <>
        {isOpen ? (
          <div className="LoginModal">
            <div className="popUpMsg">
              <div className="confirm">
                좋아요를 이용하시려면 로그인 하셔야 합니다. 로그인 화면으로 이동하시겠습니까?
              </div>
              <div className="choose">
                <button onClick={close}>취소</button>
                <button onClick={goToLogin}>확인</button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default withRouter(LoginModal);
