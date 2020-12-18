import React, { Component } from "react";
import "./SliderBox.scss";

class SliderBox extends Component {
  render() {
    const settings = {
      className: "ImgSlide",
    };

    return (
      <div className="SliderBox">
        <div className="ImgBox">
          <div className="ProductsSlider" {...settings}>
            <img src={this.props.imgUrl} alt="ProductsSlider" />
            <div className="ProductsText">
              <p className="TextOne">{this.props.mainText}</p>
              <p className="TextTwo">{this.props.subText}</p>
              <p className="PagesNum">{this.props.pageNum}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderBox;
