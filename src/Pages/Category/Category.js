import React, { Component } from "react";
//import Header from "../../Components/Header/Header";
import ImgContainer from "./Component/ImgContainer/ImgContainer";
import ProductCategory from "./Component/ProductCategory/ProductCategory";
import ProductsHeader from "./Component/ProductsHeader/ProductsHeader";
import ProductCardGrid from "./Component/ProductCardGrid/ProductCardGrid";
import PageNumContainer from "./Component/PageNumContainer/PageNumContainer";
import Footer from "../../Components/Footer/Footer";
import "./Category.scss";

class Category extends Component {
  render() {
    return (
      <>
        <div className="Category">
          <div className="CateContainer">
            {/* <header></header> componet 사용예정 */}
            <ImgContainer />
            <ProductCategory />
            <ProductsHeader />
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
