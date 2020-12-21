import React, { Component } from "react";
import { Link } from "react-router-dom";

class MyPageHeadTapWrap extends Component {
  render() {
    return (
      <section className="MyPageHeadTapWrap">
        <div className="mainTapList">
          <Link>최근 본</Link>
          <Link>내 활동</Link>
          <Link>장바구니</Link>
          <Link>주문내역</Link>
        </div>
      </section>
    );
  }
}

export default MyPageHeadTapWrap;
