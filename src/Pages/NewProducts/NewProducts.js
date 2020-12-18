import React, { Component } from "react";
//import Header from "../../Components/Header/Header"; 컴포넌트 사용예정
//import Nav from "../../Components/Nav/Nav";
import ItemBox from "./Components/ItemBox/ItemBox";
import SliderBox from "./Components/SliderBox/SliderBox";
import Slider from "react-slick";
import * as configs from "../../config";
import "./NewProducts.scss";

class NewProducts extends Component {
  state = {
    productsList: [],
    productValue: "",
    slidersList: [],
    sliderValue: "",
    UpdateProducts: [],
    UpdateValue: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/NewProducts.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({ productsList: res.data, slidersList: res.SliderData, UpdateProducts: res.UpdateData }),
      );
  }

  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      className: "imgslide",
    };
    return (
      <div className="NewProducts">
        {/* <Header></Header> 컴포넌트 사용예정
          <Nav></Nav> */}
        {/* <SliderBox /> */}
        <div className="SliderContainer">
          <Slider {...settings}>
            {this.state.slidersList &&
              this.state.slidersList.map((sliderList, idx) => {
                return (
                  <SliderBox
                    key={idx}
                    id={sliderList.id}
                    mainText={sliderList.mainText}
                    subText={sliderList.subText}
                    pageNum={sliderList.pageNum}
                    imgUrl={sliderList.imgUrl}
                  />
                );
              })}
          </Slider>
        </div>
        <article>
          <div className="ProductsContainer">
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
        </article>
        <div className="ViewMoreContainer">
          <div className="ViewMoreBar">
            <button to="/NewProducts" className="goToNewBtn">
              <span>더 보기</span>
            </button>
          </div>
          <img src={configs.Plus} alt="plus" />
        </div>
        <div className="SpaceContainer" />
        <div className="UpdateContainer">
          <article>
            <div className="ProductsContainer">
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
          </article>
        </div>
      </div>
    );
  }
}

export default NewProducts;
