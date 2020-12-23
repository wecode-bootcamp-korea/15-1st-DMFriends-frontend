import React, { Component } from "react";
import Pagination from "react-js-pagination";
import ReactStars from "react-stars";
import LoginModal from "../LoginModal";

class ReviewList extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      page: 1,
      perPage: 8,
      activePage: 1,
    };
  }

  setPage = (number) => {
    this.setState({ page: number });
  };

  openModal = () => {
    this.setState({ isModalOpen: true }, () => {
      document.body.style.overflow = "hidden";
    });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false }, () => {
      document.body.style.overflow = "unset";
    });
  };

  scrollToReview = (e) => {
    window.scrollTo({ top: 4300, behavior: "smooth" }); // 렌더시 onclick event가 스스로 실행됨.
  };

  render() {
    const { isModalOpen, page, perPage } = this.state;
    const { openModal, closeModal } = this;
    const { reviewList } = this.props;
    let indexOflast = page * perPage;
    let indexOffirst = indexOflast - perPage;
    const currentPage = reviewList.slice(indexOffirst, indexOflast);
    return (
      <>
        <ul className="ReviewList">
          {currentPage &&
            currentPage.map((item, idx) => {
              return (
                <li key={idx}>
                  <div>
                    <div className="userName">{item.member_id}</div>
                    <div className="userReviewRate">
                      <ReactStars
                        className="ReactStars"
                        count={5}
                        value={item.star_rating}
                        size={18}
                        half={true}
                        edit={false}
                        color1={"#D5D7E0"}
                        color2={"#FF6582"}
                      />
                      <p>{item.created_at}</p>
                    </div>
                    <p className="userReviewComment">{item.content}</p>
                  </div>
                  <div className="reviewLike">
                    <button onClick={openModal}>좋아요</button>
                    <LoginModal isOpen={isModalOpen} close={closeModal} />
                    <p>{item.likedNum}명이 좋아했어요</p>
                  </div>
                </li>
              );
            })}
        </ul>
        <Pagination
          // onClick={this.scrollToReview()}
          totalItemsCount={reviewList.length}
          onChange={(number) => this.setPage(number)}
          itemsCountPerPage={perPage}
          activePage={page}
          innerClass="paginationUl"
          activeLinkClass="activeLinkClass"
          linkClass="linkATag"
          itemClassNext="itemClassNext"
          itemClassPrev="itemClassPrev"
          hideFirstLastPages="true"
          hideDisabled="true"
        />
      </>
    );
  }
}

export default ReviewList;
