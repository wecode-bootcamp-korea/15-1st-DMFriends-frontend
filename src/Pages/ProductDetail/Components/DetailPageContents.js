import React, { Component } from "react";

export class DetailPageContents extends Component {
  render() {
    return (
      <section className="DetailPageContents">
        <h3>만능 튜브 수면안대</h3>
        <article>
          때로는 시원하게, 때로는 따뜻하게.
          <br />
          컨디션에 맞게 사용하는 튜브 수면안대입니다.
          <br />
          폭신폭신 튜브 얼굴이 주는 귀여움은 덤이랍니다.
        </article>
        <hr className="thickHr" />
        <img
          src="https://images.unsplash.com/photo-1601276174812-63280a55656e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="ProductDetailImg_01"
        />
        <hr className="thickHr" />
        <article className="userGuide">
          -사용방법
          <br />
          따뜻하게 사용할 경우 : 제품을 평평하게 놓고, 전자레인지에 10초간 젤팩만 돌린 후, 적정한 온도인지 확인해주세요.
          젤팩을 안대에 끼워 사용하시면 따뜻하게 사용하실 수 있습니다. 더 뜨겁게 사용하고 싶을 땐 간격을 두고 5초간 더
          돌려주세요. 꺼낼 때는 제품 온도가 너무 뜨겁지 않은지 확인 후 꺼내주세요.
          <br />
          차갑게 사용할 경우 : 제품을 평평하게 놓고, 냉장실에는 1시간, 냉동실에 20분 동안 젤팩만 넣어서 보관해주세요.
          차가워진 젤팩을 안대에 끼워 사용하시면 시원하게 사용하실 수 있습니다.
        </article>
      </section>
    );
  }
}

export default DetailPageContents;
