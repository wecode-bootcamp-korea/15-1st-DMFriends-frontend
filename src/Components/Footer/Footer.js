import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <section className="Footer">
        <div className="footerWrap">
          <div className="infoService">
            <Link>제휴문의 |</Link>
            <Link> 고객문의 |</Link>
            <Link> 이용약관 |</Link>
            <Link> 개인정보처리방침</Link>
          </div>
          <div className="logoSection">
            dm<span>commerce</span>
          </div>
          <div className="companyInfo">
            <div>
              <span>(주)동묘앞커머스</span>
              <span>주소</span>
              <span>사업자등록번호</span>
              <span>통신판매업신고번호</span>
              <span>호스팅서비스사업자</span>
              <span>이메일</span>
              <span>고객센터</span>
            </div>
            <div>
              <span>대표이사 </span>
              <span>서울특별시 종로구 동묘앞</span>
              <span>891-88-11115</span>
              <span>제2084 - 서울 - 1290 호</span>
              <span>(주)동묘앞커머스</span>
              <span>store@dmfriends.com</span>
              <span>1577-0000</span>
              <span>전화상담 (평일 10:00~18:00)</span>
              <span>카카오톡 상담 (평일 10:00~18:00)</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
