import React, { Component } from "react";
//import Slider from "react-slick";
//import * as configs from "../../config.js";
//import Header from "../../Components/Header/Header"; 컴포넌트 사용예정
//import Nav from "../../Components/Nav/Nav";
import ItemBox from "./Components/ItemBox/ItemBox";
//import ItemSliderImg from "./Components/ItemSliderImg/ItemSliderImg";
import SliderBox from "./Components/SliderBox/SliderBox";
import "./NewProducts.scss";

class NewProducts extends Component {
  render() {
    return (
      <div className="NewProducts">
        {/* <Header></Header> 컴포넌트 사용예정
          <Nav></Nav> */}
        <SliderBox />
        <article>
          <div className="ProductsContainer">
            <div className="ProductsList">
              <p className="theme">추천 신규 테마</p>
              <h3>리빙</h3>
              <div className="ProductsCardGrid">
                {/* array.map 사용예정 */}
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>

                {/*array.map 사용예정*/}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
// const settings = {
//   dots: false,
//   arrows: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   pauseOnHover: true,
//   className: "imgslide",
// };
export default NewProducts;
