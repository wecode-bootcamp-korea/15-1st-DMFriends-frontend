import React, { Component } from "react";
import * as configs from "../../../config";

class AddedItems extends Component {
  render() {
    return (
      <div className="AddedItems">
        <div className="allItemContainer">
          <div className="basketItem">
            <input type=""></input>
            <div className="itemImg">
              <img />
            </div>
            <div className="itemInfo">
              <div className="itemName">
                오토 손세정기_어피치
                <button className="deleteItem">
                  <img src={configs.deleteBtn} alt="deleteBtn" />
                </button>
              </div>
              <div className="price">40,000원</div>
              <select className="quantity">
                <option value="1" selected>
                  1
                </option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddedItems;
