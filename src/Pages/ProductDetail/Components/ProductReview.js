import React, { Component } from "react";
import ReactStars from "react-stars";
import ReviewModal from "./ReviewModal";
import ReviewList from "./ProductReview/ReviewList";
import * as configs from "../../../config.js";

export default class ProductReview extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      isReviewModalOpen: false,
      filteringState: "likeView",
    };
  }

  componentDidMount() {
    fetch("data/ProductReview.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          reviews: res.reviewData,
        });
      });
  }

  openReviewModal = () => {
    this.setState({ isReviewModalOpen: true }, () => {
      document.body.style.overflow = "hidden";
    });
  };

  closeReviewModal = () => {
    this.setState({ isReviewModalOpen: false }, () => {
      document.body.style.overflow = "unset";
    });
  };

  changeFilter = (filteringState) => {
    this.setState({ filteringState });
  };

  listFilter = (value) => {
    const arrList = {
      likeView: () => this.state.reviews.sort((a, b) => a.likedNum - b.likedNum),
      latestView: () => this.state.reviews.sort((a, b) => a.date - b.data),
    };
    console.log(arrList[value]);
    return arrList[value]();
  };

  render() {
    const { reviews, isReviewModalOpen, filteringState } = this.state;
    const { openReviewModal, closeReviewModal } = this;
    // lastPage =
    // let firstPage =
    // const currentReviewPage = this.listFilter(filteringState).slice(idx, last);
    return (
      <section className="ProductReview">
        <div className="reviewHeader">
          <div>
            <h3>리뷰 {reviews.length}개</h3>
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
              />
            </div>
          </div>
          <button className="reviewBtn" onClick={openReviewModal}>
            <img src={configs.pencil} alt="reviewIcon" /> 리뷰를 남겨주세요
          </button>
          <ReviewModal isOpen={isReviewModalOpen} close={closeReviewModal} />
        </div>
        <div className="reviewComment">
          <div className="filterling">
            <button
              className={`${filteringState === "likeView" && "clicked"}`}
              onClick={() => this.changeFilter("likeView")}
            >
              좋아요순
            </button>
            <button
              className={`${filteringState === "latestView" && "clicked"}`}
              onClick={() => this.changeFilter("latestView")}
            >
              최신순
            </button>
          </div>
          <ReviewList reviewList={reviews} />
        </div>
      </section>
    );
  }
}
