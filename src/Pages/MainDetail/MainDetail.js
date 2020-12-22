import React, { Component } from "react";
import Feeds from "./DetailFeeds/DetailFeeds"; //여기 피드를 메인피드로 임포트해놔서그래여! 위치를 잘 설정하면 이름이똑같이도 될거야
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
// import "../MainDetail/MainDetail";
import "./MainDetail.scss";

class MainDetail extends React.Component {
  state = {
    mainNav: [
      {
        menuSrc: "https://store.kakaofriends.com/kr/index",
        nenuCassName: "today",
        menuName: "오늘",
        cmtLike: false,
      },
      {
        menuSrc: "https://store.kakaofriends.com/kr/index?tab=hot",
        nenuCassName: "new",
        menuName: "신규",
      },
      {
        menuSrc: "https://store.kakaofriends.com/kr/index?tab=hot",
        nenuCassName: "hot",
        menuName: "인기",
      },
      {
        menuSrc: "https://store.kakaofriends.com/kr/basket/products",
        nenuCassName: "my",
        menuName: "마이",
      },
    ],
    feeds: [],
    startNumber: 0,
    endNumber: 1,
  };

  componentDidMount() {
    this.getData();
    window.addEventListener("scroll", this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  getData = () => {
    const { startNumber, endNumber, feeds } = this.state;
    fetch("/data/mainDetailData.json") //백이랑 연결할 때 여기에 붙임
      .then((result) => result.json())
      .then((result) => {
        //console.log(result);
        const writeFeeds = result.feeds.slice(startNumber, endNumber);
        this.setState({
          feeds: [...feeds, ...writeFeeds],
        });
      });
  };

  // infiniteScroll = () => {
  //   const { documentElement, body } = document;
  //   const { endNumber } = this.state;

  //   const scrollHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
  //   const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
  //   const clientHeight = documentElement.clientHeight;

  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     //스크롤탑과 클라이언트 높이의 값이 스크롤 높이보다 크거나 같을 때
  //     this.setState({
  //       startNumber: endNumber,
  //       endNumber: endNumber + 2,
  //     });

  //     this.getData();
  //   }
  // };

  render() {
    return (
      <div className="MainDetail">
        <div className="headerLine">
          <div className="header">
            <ul>
              <li>
                <div>
                  <Link to="/" className="today active">
                    오늘
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <Link to="/mainDetail" className="new">
                    신규
                  </Link>
                </div>
              </li>

              <li>
                <a href="https://store.kakaofriends.com/kr/index?tab=hot">
                  <div className="hot">
                    <div>인기</div>
                  </div>
                </a>
              </li>

              <li>
                <a href="https://store.kakaofriends.com/kr/basket/products">
                  <div className="my">
                    <div>마이</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Feeds feeds={this.state.feeds} />
      </div>
    );
  }
}
export default withRouter(MainDetail);
