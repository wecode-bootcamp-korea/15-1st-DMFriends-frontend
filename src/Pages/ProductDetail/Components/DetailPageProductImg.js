import React, { Component } from "react";
import * as configs from "../../../config.js";

export class DetailPageProductImg extends Component {
  render() {
    return (
      <div className="DetailPageProductImg">
        <div className="imgWrap">
          <img
            src="https://images.unsplash.com/photo-1602771627783-849a5dd85ce8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="productImg"
          ></img>
        </div>
        <div className="productNameAndPrice">
          <div className="productName">젤 안대 리틀튜브</div>
          <div className="productPrice">12,000원</div>
          <div className="productReviewStar">
            <div className="ReviewStarImg">
              <span>
                <img className="coloredStar" src={configs.rateStar} alt="ReviewStarImg" />
              </span>
              <span>
                <img className="nonColoredStar" src={configs.nonColorRateStar} alt="ReviewStarImg" />
              </span>
              <span>
                <img className="nonColoredStar" src={configs.nonColorRateStar} alt="ReviewStarImg" />
              </span>
              <span>
                <img className="nonColoredStar" src={configs.nonColorRateStar} alt="ReviewStarImg" />
              </span>
              <span>
                <img className="nonColoredStar" src={configs.nonColorRateStar} alt="ReviewStarImg" />
              </span>
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

export default DetailPageProductImg;
