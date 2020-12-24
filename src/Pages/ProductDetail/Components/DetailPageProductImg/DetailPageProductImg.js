import React, { Component } from "react";
import Slider from "react-slick";
import ReactStars from "react-stars";
import * as configs from "../../../../config.js";

export default class DetailPageProductImg extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  // componentDidMount() {
  //   fetch("data/ProductDetail.json")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         data: res.slideImgData,
  //       });
  //     });
  // }

  componentDidMount() {
    fetch(`http://192.168.0.27:8000/product/detail/1`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ data: res.result[0] });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="DetailPageProductImg">
        <div className="imgWrap">
          <Slider {...settings}>
            {data.images_slider &&
              data.images_slider.map((item, idx) => {
                return (
                  <div key={idx} id={item.id}>
                    <img className="slideImg" src={item} alt="productImg" />
                  </div>
                );
              })}
          </Slider>
        </div>
        <div className="productNameAndPrice">
          <div className="productName">{data.name}</div>
          <div className="productPrice">{Number(data.price).toLocaleString()}원</div>
          <div className="productReviewStar">
            <div className="ReviewStarImg">
              <ReactStars
                className="ReactStars"
                count={5}
                value={data.star_rating}
                size={24}
                half={true}
                edit={false}
                color1={"#D5D7E0"}
                color2={"#FF6582"}
              />
            </div>
            <span className="totalCount">({data.star_rating})</span>
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
