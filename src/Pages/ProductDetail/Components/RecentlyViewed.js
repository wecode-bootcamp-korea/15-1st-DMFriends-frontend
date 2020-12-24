import React, { Component } from "react";
import ItemBox from "../../NewProducts/Components/ItemBox/ItemBox";

export default class RecentlyViewed extends Component {
  state = {
    productsList: [],
    productValue: "",
  };

  componentDidMount() {
    fetch("http://192.168.0.27:8000/product/category/new?category=1&sort=-price")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ productsList: res.result });
      });
  }
  render() {
    const { productsList } = this.state;
    return (
      <section className="RecentlyViewed">
        <h3>
          최근 본 상품이
          <br />
          요기 있네
        </h3>
        <div className="recentItems">
          <ul>
            {productsList &&
              productsList.map((productList, idx) => {
                return (
                  <li>
                    <ItemBox
                      key={idx}
                      id={productList.id}
                      itemName={productList.name}
                      price={productList.price}
                      imgUrl={productList.image_url}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    );
  }
}
