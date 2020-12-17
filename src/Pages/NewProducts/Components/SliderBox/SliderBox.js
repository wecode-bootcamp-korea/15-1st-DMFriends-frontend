import React, { Component } from "react";
import Slider from "react-slick";
import * as configs from "../../../../config";
import "./SliderBox.scss";

class SliderBox extends Component {
  render() {
    return (
      <>
        <div className="SliderBox">
          <div className="ImgBox">
            <Slider {...settings}>
              <div className="ProductsSlider">
                <img src={configs.ProductsMainImg} alt="ProductsSlider" />
                <div className="ProductsText">
                  <p className="TextOne">세균 걱정 이제 그만</p>
                  <p className="TextTwo">죠르디가 소독해줄게</p>
                  <p className="PagesNum">1 / 10</p>
                </div>
              </div>
              <div className="ProductsSlider">
                <img src={configs.ProductsMainImg} alt="ProductsSlider" />
                <div className="ProductsText">
                  <p className="TextOne">세균 걱정 이제 그만</p>
                  <p className="TextTwo">죠르디가 소독해줄게</p>
                  <p className="PagesNum">2 / 10</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
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
export default SliderBox;
