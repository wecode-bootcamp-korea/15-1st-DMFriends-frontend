import React, { Component } from "react";
import ItemBox from "../ItemBox/ItemBox";
import "./NewItemContainer.scss";

class NewItemContainer extends Component {
  state = {
    productsList: [],
    productValue: "",
  };

  componentDidMount() {
    fetch("/data/NewProducts.json")
      .then((res) => res.json())
      .then((res) => this.setState({ productsList: res.data }));
  }

  render() {
    return (
      <div className="NewItemContainer">
        <div className="ProductsList">
          <p className="theme">추천 신규 테마</p>
          <h3>리빙</h3>
          <div className="ProductsCardGrid">
            {this.state.productsList &&
              this.state.productsList.map((productList, idx) => {
                return (
                  <ItemBox
                    key={idx}
                    id={productList.id}
                    itemName={productList.itemName}
                    price={productList.price}
                    imgUrl={productList.imgUrl}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default NewItemContainer;
