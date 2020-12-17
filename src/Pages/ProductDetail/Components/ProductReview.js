import React, { Component } from "react";
import ReactStars from "react-stars";
import * as configs from "../../../config.js";

export class ProductReview extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/ProductReview.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          reviews: res.reviewData,
        });
      });
  }

  render() {
    const { reviews } = this.state;
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
            {reviews &&
              reviews.map((item, idx) => {
                return (
                  <li key={idx}>
                    <div>
                      <div className="userName">{item.userName}</div>
                      <div className="userReviewRate">
                        <ReactStars
                          className="ReactStars"
                          count={5}
                          value={item.rateValue}
                          size={18}
                          half={true}
                          edit={false}
                          color1={"#D5D7E0"}
                          color2={"#FF6582"}
                        />
                        <p>{item.date}</p>
                      </div>
                      <div className="userReviewComment">{item.comment}</div>
                      <button className="seeMore">더보기</button>
                    </div>
                    <div className="reviewLike">
                      <button>좋아요</button>
                      <p>{item.likedNum}명이 좋아했어요</p>
                    </div>
                  </li>
                );
              })}
          </ul>
          <div className="CommentPageNum">
            <span>1</span>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductReview;
