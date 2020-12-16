import React from "react";
import { withRouter } from "react-router-dom";
import "./Signup.scss";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pw: "",
      rePw: "",
      nickName: "",
      emailAlert: true,
      pwAlert: true,
    };
  }

  handleInputValue = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  isEmailValidate = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const checkEmail = email.indexOf("@") !== -1 && email.indexOf(".") !== -1;

    if (!checkEmail) {
      this.setState({
        emailAlert: checkEmail,
      });
    } else {
      this.setState({
        emailAlert: checkEmail,
      });
    }
  };

  isRepwValidate = (e) => {
    e.preventDefault();
    const { pw, rePw } = this.state;
    const checkPw = pw === rePw;

    if (!checkPw) {
      this.setState({
        pwAlert: checkPw,
      });
    } else {
      this.setState({
        pwAlert: checkPw,
      });
    }
  };

  render() {
    console.log(this.state);
    const { emailAlert, pwAlert, nickName } = this.state;

    return (
      <div className="Signup">
        <div className="title">kakao</div>
        <div className="frame">
          <div className="frameTitle">회원가입</div>
          <form className="formEmail">
            <span>이메일주소</span>
            <input id="email" placeholder="이메일 주소 입력" onChange={this.handleInputValue} />
            <span className={emailAlert ? "formEmailAlert" : "activate"}>이메일 형식이 올바르지 않습니다.</span>
            <div>
              <button onClick={this.isEmailValidate}>인증메일 발송</button>
            </div>
          </form>
          <form className="formPw">
            <span>비밀번호</span>
            <input
              id="pw"
              type="password"
              placeholder="비밀번호(8~32자리)"
              minLength="8"
              maxLength="32"
              onChange={this.handleInputValue}
            />
            <input
              id="rePw"
              type="password"
              placeholder="비밀번호 재입력"
              onChange={this.handleInputValue}
              onKeyUp={this.isRepwValidate}
            />
            <span className={pwAlert ? "formPwAlert" : "activate"}>비밀번호가 같지 않습니다.</span>
          </form>
          <form className="formNick">
            <span>닉네임</span>
            <span>{nickName.length}/20</span>
            <input
              id="nickName"
              type="text"
              placeholder="닉네임을 입력해주세요."
              maxLength="20"
              onChange={this.handleInputValue}
            />
          </form>
          <span className="formPolicy">약관 동의</span>
          <ul>
            <li>
              <input type="checkbox" id="c1" />
              <label for="c1">
                <span></span>
                전체동의
              </label>
            </li>
            <div className="formPolicyBar"></div>
            <li className="checkboxes">
              <input type="checkbox" id="c2" />
              <label for="c2">
                <span></span>만 14세 이상입니다.(필수)
              </label>
            </li>
            <li className="checkboxes">
              <input type="checkbox" id="c3" />
              <label for="c3">
                <span></span>이용약관(필수)
              </label>
            </li>
            <li className="checkboxes">
              <input type="checkbox" id="c4" />
              <label for="c4">
                <span></span>개인정보처리방침(필수)
              </label>
            </li>
            <li className="checkboxes">
              <input type="checkbox" id="c5" />
              <label for="c5">
                <span></span>이벤트, 프로모션 알림 메일 및 SMS 수신
              </label>
            </li>
          </ul>
          <button className="nextBtn">다음</button>
        </div>
        <footer>
          <span>
            이용약관&nbsp;&nbsp;&nbsp;개인정보&nbsp;&nbsp;&nbsp;처리방침&nbsp;&nbsp;&nbsp;운영정책&nbsp;&nbsp;&nbsp;고객센터&nbsp;&nbsp;&nbsp;공지사항&nbsp;&nbsp;&nbsp;한국어
          </span>
          <div>
            <span>CopyrightⒸ</span>
            <span className="dmFriends">DongMyo Friends.</span>
            <span>All rights reserved.</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(Signup);
