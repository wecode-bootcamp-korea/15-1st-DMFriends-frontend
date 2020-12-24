import React, { Component } from "react";
import "./ProductCategory.scss";

class ProductCategory extends Component {
  render() {
    const { changeOrder } = this.props;

    return (
      <div className="ProductCategory">
        <div className="ListOne">
          <button onClick={() => changeOrder("?category=1&sort=created_at")}>전체</button>
        </div>
        <div className="ListTwo">
          <button onClick={() => changeOrder("?subcategory=2&sort=created_at")}>컵/텀블러</button>
        </div>
        <div className="ListThree">
          <button onClick={() => changeOrder("?subcategory=1&sort=created_at")}>쿠션/방석</button>
        </div>
        <div className="ListFour">
          <button onClick={() => changeOrder("?subcategory=3&sort=created_at")}>주방용품</button>
        </div>
        <div className="ListFive">
          <button>미용/욕실용품</button>
        </div>
        <div className="ListSix">
          <button>생활소품/잡화</button>
        </div>
        <div className="ListSeven">
          <button>펫 용품</button>
        </div>
        <div className="ListEight">
          <button>탈취/방향제</button>
        </div>
      </div>
    );
  }
}

export default ProductCategory;
