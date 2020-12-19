import React, { Component } from "react";
import ItemBox from "../ItemBox/ItemBox";
import "./UpdateItemContainer.scss";

class UpdateItemContainer extends Component {
  state = {
    UpdateProducts: [],
    UpdateValue: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/NewProducts.json")
      .then((res) => res.json())
      .then((res) => this.setState({ UpdateProducts: res.UpdateData }));
  }

  render() {
    return (
      <div className="UpdateItemContainer">
        <div className="ProductsList">
          <p className="theme">오늘 업데이트 했어요</p>
          <h3>새로나운 친구들</h3>
          <div className="ProductsCardGrid">
            {this.state.UpdateProducts &&
              this.state.UpdateProducts.map((UpdateProduct, idx) => {
                return (
                  <ItemBox
                    key={idx}
                    id={UpdateProduct.id}
                    itemName={UpdateProduct.itemName}
                    price={UpdateProduct.price}
                    imgUrl={UpdateProduct.imgUrl}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateItemContainer;
