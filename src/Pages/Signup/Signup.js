import React from "react";
import { withRouter } from "react-router-dom";
import AgreementForm from "./components/AgreementForm";
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
      checkAll: false,
      check0: false,
      check1: false,
      check2: false,
      check3: false,
      policies: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          policies: res.policies,
        });
      });
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
    const checkEmail = email.includes("@") && email.includes(".");

    this.setState({
      emailAlert: checkEmail ? true : false,
    });
  };

  isRepwValidate = (e) => {
    e.preventDefault();
    const { pw, rePw } = this.state;
    const checkPw = pw === rePw;

    this.setState({
      pwAlert: checkPw ? true : false,
    });
  };

  handleAllChecked = () => {
    const { checkAll } = this.state;
    this.setState({
      checkAll: !checkAll,
      check0: !checkAll,
      check1: !checkAll,
      check2: !checkAll,
      check3: !checkAll,
    });
  };

  // handleLogin = () => {
  //   fetch("http://192.168.0.22:8000/user/signup", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.email,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => console.log("결과 :", result))
  //     .catch((e) => console.log("에러 :", e));
  // };

  handleChecked = (ind) => {
    console.log(ind);
    const { check0, check1, check2, check3 } = this.state;
    this.setState(
      {
        [`check${ind}`]: !this.state[`check${ind}`],
      },
      () => {
        this.setState({
          allchecked: check0 && check1 && check2 && check3,
        });
      },
    );
  };

  render() {
    console.log(this.state);
    const { emailAlert, pwAlert, nickName, checkAll, policies } = this.state;

    return (
      <div className="Signup">
        <div className="title">kakao</div>
        <div className="frame">
          <div className="frameTitle">회원가입</div>
          <form className="formEmail" onClick={this.handleLogin}>
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
              <input type="checkbox" id="checkAll" onClick={this.handleAllChecked} defaultChecked={checkAll} />
              <label for="checkAll">
                <span></span>
                전체동의
              </label>
            </li>
            <div className="formPolicyBar"></div>
            {policies.map((policy, ind) => {
              return (
                <AgreementForm
                  policy={policy}
                  key={ind}
                  defaultChecked={this.state[policy.name]}
                  onClick={() => this.handleChecked(ind)}
                />
              );
            })}
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
