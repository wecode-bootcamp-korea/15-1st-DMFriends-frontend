import React, { Component } from "react";
import * as configs from "../../../../config";
import "./ProductsHeader.scss";

class ProductsHeader extends Component {
  render() {
    const { totalCount } = this.props;
    return (
      <div className="ProductsHeader">
        <div className="HeaderText">
          <div className="HeaderLeft">
            <div className="HeaderAmount">
              <span className="LeftAmount">총 </span>
              <span className="LeftNumber">{totalCount}</span>
              <span className="LeftText">개</span>
            </div>
            <img src={configs.checkBox} alt="check" />
            <div className="GlobalProducts">글로벌 배송 가능상품 보기</div>
          </div>
          <div className="HeaderRight">
            <span>신상품순</span>
            <img src={configs.underCheck} alt="underCheck" onClick={this.props.toggleHidden} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsHeader;
