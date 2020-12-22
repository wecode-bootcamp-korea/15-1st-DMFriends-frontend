import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ItemBoxSmall from "../ItemBoxSmall/ItemBoxSmall";
import "./ProductCardGrid.scss";

class ProductCardGrid extends Component {
  state = {
    CategorysItemList: [],
    CategorysItemValue: "",
  };

  componentDidMount() {
    fetch("http://192.168.0.27:8000/product/category?category=7&sort=created_at")
      .then((res) => res.json())
      .then((res) => this.setState({ CategorysItemList: res.result }));
  }
  render() {
    // console.log(this.state.CategorysItemList);
    const { CategorysItemList } = this.state;

    return (
      <article className="ProductCardGrid">
        {CategorysItemList &&
          CategorysItemList.map((CategoryList, idx) => {
            return (
              <ItemBoxSmall
                key={idx}
                id={CategoryList.id}
                itemName={CategoryList.name}
                price={CategoryList.price}
                imgUrl={CategoryList.image_url[0]}
              />
            );
          })}
      </article>
    );
  }
}

export default withRouter(ProductCardGrid);
