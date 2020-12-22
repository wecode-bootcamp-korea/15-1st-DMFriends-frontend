import React, { Component } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
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
      productList: [],
      totalCount: 0,
    };
  }
  //filter
  changeOrder = (option = "") => {
    fetch("http://192.168.0.27:8000/product/category" + option)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productList: res.result,
          totalCount: res.result.length,
        });
      });
  };

  componentDidMount() {
    fetch("http://192.168.0.27:8000/product/category?category=7&sort=created_at")
      .then((res) => res.json())
      .then((res) => this.setState({ productList: res.result }));
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  };

  render() {
    const { isHidden, totalCount, productList } = this.state;
    return (
      <>
        <ProductDetail />
        <div className="Category">
          <div className="CateContainer">
            <ImgContainer />
            <ProductCategory />
            <ProductsHeader toggleHidden={this.toggleHidden} totalCount={totalCount} />
            {!isHidden && <ProductListHidden changeOrder={this.changeOrder} />}
            <ProductCardGrid productList={productList} />
            <PageNumContainer />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Category;
