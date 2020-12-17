import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as configs from "../../../../config";
import "./ItemBox.scss";

class ItemBox extends Component {
  render() {
    return (
      <Link to="/NewProducts" className="ItemBox">
        <img src={configs.products} alt="product" />
        <div className="ProductText">
          <span>윙크베이비필로우_라이언</span>
          <button>
            <img src={configs.basket} alt="basket" />
          </button>
        </div>
        <div className="ProductPrice">
          <p>12,000원</p>
        </div>
      </Link>
    );
  }
}

export default ItemBox;
