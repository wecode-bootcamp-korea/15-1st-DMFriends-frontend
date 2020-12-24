import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ItemBoxSmall from "../ItemBoxSmall/ItemBoxSmall";
import "./ProductCardGrid.scss";

class ProductCardGrid extends Component {
  render() {
    const { productList } = this.props;

    return (
      <article className="ProductCardGrid">
        {productList?.map((item, idx) => {
          return (
            <ItemBoxSmall key={idx} id={item.id} itemName={item.name} price={item.price} imgUrl={item.image_url[0]} />
          );
        })}
      </article>
    );
  }
}

export default withRouter(ProductCardGrid);
