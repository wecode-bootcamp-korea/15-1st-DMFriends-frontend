import React, { Component } from "react";
import "./ProductListHidden.scss";

class ProductListHidden extends Component {
  render() {
    const { changeOrder } = this.props;

    return (
      <div className="ProductListHidden">
        <div className="NewItem" onClick={() => changeOrder("?category=1&sort=created_at")}>
          <span>신상품순</span>
        </div>
        <div className="SellItem">
          <span>판매량순</span>
        </div>
        <div className="LowPrice" onClick={() => changeOrder("?category=1&sort=price")}>
          <span>낮은가격순</span>
        </div>
        <div className="HighPrice" onClick={() => changeOrder("?category=1&sort=-price")}>
          <span>높은가격순</span>
        </div>
      </div>
    );
  }
}

export default ProductListHidden;
