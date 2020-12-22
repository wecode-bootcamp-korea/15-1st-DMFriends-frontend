import React, { Component } from "react";
import * as configs from "../../../config";

class AddedItems extends Component {
  render() {
    const { id, name, price, quantity, image_url, checked, deleteProduct } = this.props;
    return (
      <div className="basketItem" id={id}>
        <input type="checkbox" checked={checked} />
        <label>
          <span></span>
        </label>
        <div className="itemImg">
          <img src={image_url} alt="product_images" />
        </div>
        <div className="itemInfo">
          <div className="itemName">
            {name}
            <button className="deleteItem" onClick={() => deleteProduct(id)}>
              <img src={configs.deleteBtn} alt="deleteBtn" />
            </button>
          </div>
          <div className="price">{(+price).toLocaleString()}원</div>
          <select className="quantity">
            <option value={quantity} selected>
              {quantity}
            </option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
    );
  }
}

export default AddedItems;
