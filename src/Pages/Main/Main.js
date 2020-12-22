import React, { Component } from "react";
import Feeds from "./feeds/Feeds";
import MainReply from "./mainReply/MainReply";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Main.scss";

class Main extends React.Component {
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
    startNumber: 1,
    endNumber: 2,
  };

  componentDidMount() {
    this.getfeedData();
    // this.getData();
    window.addEventListener("scroll", this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  getfeedData = () => {
    fetch("http://192.168.0.25:8080/board/main")
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          feeds: result.board_list,
        });
      });
  };

  getData = () => {
    const { startNumber, endNumber, feeds } = this.state;
    fetch("http://192.168.0.25:8080/board/main")
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        const writeFeeds = result.feeds.slice(startNumber, endNumber);
        this.setState({
          feeds: [...feeds, ...writeFeeds],
        });
      });
  };

  infiniteScroll = () => {
    const { documentElement, body } = document;
    const { endNumber } = this.state;

    const scrollHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      //스크롤탑과 클라이언트 높이의 값이 스크롤 높이보다 크거나 같을 때
      this.setState({
        startNumber: endNumber,
        endNumber: endNumber + 2,
      });

      this.getData();
    }
  };

  render() {
    const { feeds } = this.state;
    return (
      <div className="Main">
        <div className="headerLine">
          <div className="header"></div>
        </div>
        {feeds.map((feed) => {
          return (
            <>
              <Feeds feed={feed} key={feed.id} />
              <MainReply feed={feed} key={feed.id} />
            </>
          );
        })}
      </div>
    );
  }
}
export default withRouter(Main);
