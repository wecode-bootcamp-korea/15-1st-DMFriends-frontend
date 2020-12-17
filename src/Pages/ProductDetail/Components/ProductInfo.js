import React, { Component } from "react";

export default class ProductInfo extends Component {
  constructor() {
    super();
    this.state = {
      notices: [],
    };
  }

  componentDidMount() {
    fetch("data/ProductInfo.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          notices: res.noticesData,
        });
      });
  }
  render() {
    const { notices } = this.state;
    return (
      <section className="ProductInfo">
        <h3>세부정보</h3>
        <article>
          <ul>
            <li>종류 : 젤안대</li>
            <li>소재 : 겉감 및 안감: 폴리에스터91.5%, 스판덴스 8.5% / 젤 팩: PVC, 폴리아크릴산나트륨,물</li>
            <li>치수 : 24*11*7cm, 113g</li>
            <li>제조자/수입자 : 동묘</li>
            <li>제조국 : 한국</li>
            <li>
              <p>취급 시 주의사항</p>
              {notices &&
                notices.map((item, idx) => {
                  return (
                    <p key={idx}>
                      {item.id}) {item.comment}
                    </p>
                  );
                })}
            </li>
            <li>
              품질보증기준 : 본 제품은 공정거래위원회 고시 소비자 분쟁해결기준에 의거 교환 및 보상을 받으실 수 있습니다.
            </li>
            <li>A/S 책임자와 전화번호 : 동묘앞프렌즈 고객센터 1588-5959</li>
          </ul>
        </article>
      </section>
    );
  }
}
