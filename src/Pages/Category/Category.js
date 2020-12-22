import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Header from "../../Components/Header/Header";
import ImgContainer from "./Component/ImgContainer/ImgContainer";
import ProductCategory from "./Component/ProductCategory/ProductCategory";
import ProductsHeader from "./Component/ProductsHeader/ProductsHeader";
import ProductCardGrid from "./Component/ProductCardGrid/ProductCardGrid";
import PageNumContainer from "./Component/PageNumContainer/PageNumContainer";
import Footer from "../../Components/Footer/Footer";
import "./Category.scss";
import ProductListHidden from "./Component/ProductListHidden/ProductListHidden";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    };
  }

  changeOrder = (path = "", option = "") => {
    this.setState(
      {
        // productList: [],
        // items: 10,
        preItems: 0,
        totalCount: 0,
      },
      () => {
        const { preItems, items, productList } = this.state;
        fetch("http://192.168.0.27:8000/product/category?category=7&sort=price" + path + option)
          .then((res) => res.json())
          .then((res) => {
            const result = res.data_list.slice(preItems, items);
            this.setState({
              // productList: [...productList, ...result],
              totalCount: result[0].total_count,
            });
          });
      },
    );
  };

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  };
  render() {
    const { isHidden, changeOrder, totalCount } = this.state;
    return (
      <>
        <div className="Category">
          <div className="CateContainer">
            {/* <header></header> componet 사용예정 */}
            <ImgContainer />
            <ProductCategory />
            <ProductsHeader toggleHidden={this.toggleHidden} totalCount={totalCount} />
            {!isHidden && <ProductListHidden changeOrder={this.changeOrder} />}
            <ProductCardGrid />
            <PageNumContainer />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Category;
