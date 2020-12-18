import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Login">
        <div className="frame">
          <div className="title">kakao</div>
          <form>
            <input id="email" type="email" placeholder="카카오메일아이디, 이메일, 전화번호" />
            <input id="pw" type="password" placeholder="비밀번호" />
            <div>
              <input type="checkbox" />
              <span>로그인 상태 유지</span>
            </div>
            <button>로그인</button>
            <div>또는</div>
            <button>QR코드 로그인</button>
          </form>
          <div className="">
            <Link>회원가입</Link>
            <div>카카오계정 | 비밀번호찾기</div>
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
