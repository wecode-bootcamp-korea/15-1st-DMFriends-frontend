import React, { Component } from "react";
import "./ProductCategory.scss";

class ProductCategory extends Component {
  render() {
    return (
      <div className="ProductCategory">
        <div className="ListOne">
          <button>전체</button>
        </div>
        <div className="ListTwo">
          <button>쿠션/방석</button>
        </div>
        <div className="ListThree">
          <button>컵/텀블러</button>
        </div>
        <div className="ListFour">
          <button>주방용품</button>
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
