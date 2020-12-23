import React, { Component } from "react";
import Feeds from "../Main/feeds/Feeds";
import { withRouter } from "react-router-dom";
import "./MainDetail.scss";

class MainDetail extends React.Component {
  state = {
    feeds: [],
    startNumber: 1,
    endNumber: 2,
  };

  componentDidMount() {
    this.getfeedData();
    // this.getData();
    // window.addEventListener("scroll", this.infiniteScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener("scroll", this.infiniteScroll);
  }

  getfeedData = () => {
    fetch("http://192.168.0.25:8080/board/main")
      .then((result) => result.json())
      .then((result) => {
        console.log("0: " + result.board_list);
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
        // console.log(result);
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
      this.setState({
        startNumber: endNumber,
        endNumber: endNumber + 2,
      });

      this.getData();
    }
  };

  render() {
    const { feeds } = this.state;
    console.log(feeds);
    return (
      <div className="MainDetail">
        <div className="headerLine">
          <div className="header"></div>
        </div>
        {feeds.map((feed, id) => {
          return (
            <>
              <Feeds feed={feed} key={feed.id} />
            </>
          );
        })}
      </div>
    );
  }
}
export default withRouter(MainDetail);
