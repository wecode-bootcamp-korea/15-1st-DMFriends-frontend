import React, { Component } from "react";
import SliderBox from "../SliderBox/SliderBox";
import Slider from "react-slick";
import "./SliderContainer.scss";

class SliderContainer extends Component {
  state = {
    slidersList: [],
    sliderValue: "",
  };

  componentDidMount() {
    fetch("/data/NewProducts.json")
      .then((res) => res.json())
      .then((res) => this.setState({ slidersList: res.SliderData }));
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
    );
  }
}

export default SliderContainer;
