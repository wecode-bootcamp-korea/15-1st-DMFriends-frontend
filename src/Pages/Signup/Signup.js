import React from "react";
import { withRouter } from "react-router-dom";
import AgreementForm from "./components/AgreementForm";
import { API } from "../../config";
import "./Signup.scss";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pw: "",
      rePw: "",
      nickName: "",
      validationCode: "",
      validCode: true,
      emailAlert: true,
      pwAlert: true,
      pwLengthAlert: true,
      checkAllValue: false,
      checkAllBoxes: false,
      check0: false,
      check1: false,
      check2: false,
      check3: false,
      policies: [],
    };
  }

  componentDidMount() {
    fetch("/data/Signup.json")
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

  handleAllCheckedBoxes = () => {
    const { checkAllBoxes } = this.state;
    this.setState({
      checkAllBoxes: !checkAllBoxes,
      check0: !checkAllBoxes,
      check1: !checkAllBoxes,
      check2: !checkAllBoxes,
      check3: !checkAllBoxes,
    });
  };

  handleCheckedBox = (index) => {
    this.setState(
      {
        [`check${index}`]: !this.state[`check${index}`],
      },
      () => {
        const { check0, check1, check2, check3 } = this.state;
        this.setState({
          checkAllBoxes: check0 && check1 && check2 && check3,
        });
      },
    );
  };

  isValidEmail = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const checkEmail = email.includes("@") && email.includes(".");

    this.setState({
      emailAlert: checkEmail ? true : false,
    });

    fetch(`${API}/user/echeck`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.email === "SENT") {
          alert("인증메일이 발송되었습니다. 번호를 확인해주세요.");
          this.setState({ validCode: false });
        } else {
          alert("기존에 있는 이메일 주소 입니다. 다른 이메일 주소를 입력하세요.");
        }
      });
  };

  isValidPw = (e) => {
    e.preventDefault();
    const { pw, rePw } = this.state;
    const checkSamePw = pw === rePw;

    this.setState({
      pwAlert: checkSamePw ? true : false,
    });
  };

  isValidCode = (e) => {
    e.preventDefault();

    fetch(`${API}/user/vcode`, {
      method: "POST",
      body: JSON.stringify({
        random_token: this.state.validationCode,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        result.code === "CORRECT" && alert("인증번호가 확인되었습니다.");
        this.setState({ validCode: true });
      });
  };

  isAllValid = (e) => {
    e.preventDefault();

    fetch(`${API}/user/signup`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.pw,
        nickname: this.state.nickName,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        result.message === "SUCCESS" && this.props.history.push("/");
      });
  };

  render() {
    const { emailAlert, pwAlert, nickName, policies, checkAllBoxes, validCode } = this.state;
    const checkAllValueBtn = emailAlert && pwAlert;

    return (
      <div className="Signup">
        <div className="title">동묘앞프렌즈</div>
        <div className="frame">
          <div className="frameTitle">회원가입</div>
          <form className="formEmail">
            <span>이메일주소</span>
            <input id="email" placeholder="이메일 주소 입력" onChange={this.handleInputValue} />
            <span className={emailAlert ? "formEmailAlert" : "activate"}>이메일 형식이 올바르지 않습니다.</span>
            {validCode ? (
              ""
            ) : (
              <input id="validationCode" placeholder="인증번호 입력" onChange={this.handleInputValue} />
            )}
            <div>
              {validCode ? <button onClick={this.isValidEmail}> 인증메일 발송</button> : ""}
              {validCode ? "" : <button onClick={this.isValidCode}>인증번호 확인</button>}
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
              onKeyUp={this.isValidPw}
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
              <input type="checkbox" id="checkAllBoxes" onClick={this.handleAllCheckedBoxes} checked={checkAllBoxes} />
              <label htmlFor="checkAllBoxes">
                <span></span>
                전체동의
              </label>
            </li>
            <div className="formPolicyBar"></div>
            {policies.map((policy, index) => {
              return (
                <AgreementForm
                  policy={policy}
                  key={index}
                  checked={this.state[policy.name]}
                  onClick={() => this.handleCheckedBox(index)}
                />
              );
            })}
          </ul>
          <button onClick={this.isAllValid} className={checkAllValueBtn ? "activateBtn" : ""}>
            다음
          </button>
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
