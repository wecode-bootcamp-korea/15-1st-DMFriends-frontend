import React, { Component } from "react";
import ItemBoxSmall from "../ItemBoxSmall/ItemBoxSmall";
import "./ProductCardGrid.scss";

class ProductCardGrid extends Component {
  state = {
    CategorysItemList: [],
    CategorysItemValue: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/Category.json")
      .then((res) => res.json())
      .then((res) => this.setState({ CategorysItemList: res.CategoryData }));
  }
  render() {
    return (
      <article className="ProductCardGrid">
        {this.state.CategorysItemList &&
          this.state.CategorysItemList.map((CategoryList, idx) => {
            return (
              <ItemBoxSmall
                key={idx}
                id={CategoryList.id}
                itemName={CategoryList.itemName}
                price={CategoryList.price}
                imgUrl={CategoryList.imgUrl}
              />
            );
          })}
      </article>
    );
  }
}

export default ProductCardGrid;
