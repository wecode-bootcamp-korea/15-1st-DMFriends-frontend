import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as configs from "../../../../config";
import "./ItemBox.scss";

class ItemBox extends Component {
  render() {
    const { id, imgUrl, itemName, price } = this.props;

    return (
      <Link to="/ProductDetail" className="ItemBox" id={id}>
        <img src={imgUrl} alt="product" />
        <div className="ProductText">
          <span>{itemName}</span>
          <button>
            <img src={configs.basket} alt="basket" />
          </button>
        </div>
        <div className="ProductPrice">
          <p>{Number(price).toLocaleString()}원</p>
        </div>
      </Link>
    );
  }
}

export default ItemBox;
