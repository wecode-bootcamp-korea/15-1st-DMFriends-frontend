import React, { Component } from "react";
import Feeds from "./feeds/Feeds";
import MainReply from "./mainReply/MainReply";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Main.scss";

class Main extends React.Component {
  state = {
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
    //이건가? 피드데이터 받아ㅗ은게 받아올때!!
    fetch("http://192.168.0.25:8080/board/main?로그인정보={저장된로그인정보어딘진모르겟지만}")
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
        {feeds.map((feed, id) => {
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
