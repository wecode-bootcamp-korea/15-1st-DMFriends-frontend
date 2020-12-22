import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as configs from "../../../../config";
import "./ItemBox.scss";

class ItemBox extends Component {
  render() {
    return (
      <Link to="/NewProducts" className="ItemBox" id={this.props.id}>
        <img src={this.props.imgUrl} alt="product" />
        <div className="ProductText">
          <span>{this.props.itemName}</span>
          <button>
            <img src={configs.basket} alt="basket" />
          </button>
        </div>
        <div className="ProductPrice">
          <p>{this.props.price}</p>
        </div>
      </Link>
    );
  }
}

export default ItemBox;
