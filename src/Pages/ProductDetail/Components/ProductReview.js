import React, { Component } from "react";
import ReactStars from "react-stars";
import * as configs from "../../../config.js";

export class ProductReview extends Component {
  render() {
    return (
      <section className="ProductReview">
        <div>
          <div>
            <h3>리뷰 1개</h3>
            <div className="reviewTotalRate">
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
          </div>
          <button className="reviewBtn">
            <img src={configs.pencil} alt="reviewIcon" /> 리뷰를 남겨주세요
          </button>
        </div>
        <div className="reviewComment">
          <div className="filterling">
            <button>좋아요순</button>
            <button>최신순</button>
          </div>
          <ul>
            <li>
              <div>
                <div className="userName">이*연</div>
                <div className="userReviewRate">
                  <ReactStars
                    className="ReactStars"
                    count={5}
                    value={1}
                    size={18}
                    half={true}
                    edit={false}
                    color1={"#D5D7E0"}
                    color2={"#FF6582"}
                    // onChange={}
                  />
                  <p>2020-12-12</p>
                </div>
                <div className="userReviewComment">
                  불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~불합격~
                </div>
                <button className="seeMore">더보기</button>
              </div>
              <div className="reviewLike">
                <button>좋아요</button>
                <p>명이 좋아했어요</p>
              </div>
            </li>
          </ul>
          <div className="CommentPagination">
            <span>1</span>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductReview;
