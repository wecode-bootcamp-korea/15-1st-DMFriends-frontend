import React, { Component } from "react";
import * as configs from "../../../config.js";

export default class BottomBar extends Component {
  render() {
    return (
      <section className="BottomBar">
        <div className="optionsWrap">
          <div className="quantities">
            <button className="minusBtn">-</button>
            <input type="number" value="1" />
            <button className="plusBtn">+</button>
          </div>
          <div className="totalPrice">
            <span className="total">총 상품금액</span>
            <span>50,000원</span>
          </div>
        </div>
        <div className="purchase">
          <img src={configs.bag} alt="addCart"></img>
          <span>바로구매</span>
        </div>
      </section>
    );
  }
}
