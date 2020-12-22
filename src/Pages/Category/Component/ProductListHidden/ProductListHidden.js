import React, { Component } from "react";
import "./ProductListHidden.scss";

class ProductListHidden extends Component {
  render() {
    const { changeOrder } = this.props;
    return (
      <div className="ProductListHidden">
        <div className="NewItem">
          <span onClick={() => changeOrder("?category=7&sort=created_at")}>신상품순</span>
        </div>
        <div className="SellItem">
          <span>판매량순</span>
        </div>
        <div className="LowPrice">
          <span onClick={() => changeOrder("?category=7&sort=price")}>낮은가격순</span>
        </div>
        <div className="HighPrice">
          <span onClick={() => changeOrder("?category=7&sort=-price")}>높은가격순</span>
        </div>
      </div>
    );
  }
}

export default ProductListHidden;
