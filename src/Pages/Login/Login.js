import React from "react";
import { Link, withRouter } from "react-router-dom";
import { API } from "../../config";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pw: "",
    };
  }

  handleInputValue = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  loginCheck = (e) => {
    e.preventDefault();
    fetch(`${API}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS_LOGIN") {
          alert("로그인 성공!");
          this.props.history.push("/");
        } else {
          alert("회원정보를 찾을 수 없습니다.");
          this.props.history.push("/Signup");
        }
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="Login">
        <div className="loginMain">
          <div className="logo">
            <span>동묘앞프렌즈 하나로 충분합니다.</span>
            <span>세계 최고의 거리. 스포티(sporty)함과 캐주얼의 경계를 넘나드는</span>
            <span>과감한 믹스매치 정신을 본받기위해 동묘앞프렌즈가 모였다!</span>
            <img src="images/haiinkim/DM_1.png" alt="loginImage"></img>
          </div>
          <div className="frame">
            <div className="title">동묘앞프렌즈</div>
            <form>
              <input id="email" type="email" placeholder="이메일주소" onChange={this.handleInputValue} />
              <input id="pw" type="password" placeholder="비밀번호" onChange={this.handleInputValue} />
              <div>
                <input type="checkbox" id="loginCheckbox" />
                <label htmlFor="loginCheckbox">
                  <span></span>
                  로그인 상태 유지
                </label>
              </div>
              <button className="loginBtn" onClick={this.loginCheck}>
                로그인
              </button>
              <div className="line">
                <div></div>
                <div>또는</div>
                <div></div>
              </div>
              <button>QR코드 로그인</button>
            </form>
            <div className="signIn">
              <Link to="Signup">회원가입</Link>
              <div>카카오계정 | 비밀번호찾기</div>
            </div>
          </div>
        </div>
        <footer>
          <div>
            <Link className="link" rel="stylesheet" href="#">
              이용약관
            </Link>
            <Link className="link" rel="stylesheet" href="#">
              개인정보 처리방침
            </Link>
            <Link className="link" rel="stylesheet" href="#">
              운영정책
            </Link>
            <Link className="link" rel="help" href="#">
              고객센터
            </Link>
            <Link className="link" rel="help" href="#">
              공지사항
            </Link>
            <Link className="link">한국어</Link>
          </div>
          <div>
            <span>CopyrightⒸ</span>
            <span>DongMyo Friends.</span>
            <span>All rights reserved.</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(Login);
