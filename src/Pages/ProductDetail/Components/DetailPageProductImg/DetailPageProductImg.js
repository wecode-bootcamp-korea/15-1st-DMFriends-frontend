import React, { Component } from "react";
import Slider from "react-slick";
import ReactStars from "react-stars";
import * as configs from "../../../../config.js";

export default class DetailPageProductImg extends Component {
  constructor() {
    super();
    this.state = {
      slideImages: [],
    };
  }

  componentDidMount() {
    fetch("data/ProductDetail.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          slideImages: res.slideImgData,
        });
      });
  }
  render() {
    const { slideImages } = this.state;
    return (
      <div className="DetailPageProductImg">
        <div className="imgWrap">
          <Slider {...settings}>
            {slideImages &&
              slideImages.map((item, idx) => {
                return (
                  <div key={idx} id={item.id}>
                    <img className="slideImg" src={item.src} alt={item.alt} />
                  </div>
                );
              })}
          </Slider>
        </div>
        <div className="productNameAndPrice">
          <div className="productName">젤 안대 리틀튜브</div>
          <div className="productPrice">12,000원</div>
          <div className="productReviewStar">
            <div className="ReviewStarImg">
              <ReactStars
                className="ReactStars"
                count={5}
                value={1}
                size={24}
                half={true}
                edit={false}
                color1={"#D5D7E0"}
                color2={"#FF6582"}
                // onChange={}
              />
            </div>
            <span className="totalCount">(1)</span>
          </div>
          <ul className="shareLinks">
            <li>
              <img src={configs.shareKakaoBtnImg} alt="shareKakaoBtnImg" />
            </li>
            <li>
              <img src={configs.shareFacebookBtnImg} alt="shareFacebookBtnImg" />
            </li>
            <li>
              <img src={configs.shareTwitterBtnImg} alt="shareTwitterBtnImg" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slideToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2750,
};
