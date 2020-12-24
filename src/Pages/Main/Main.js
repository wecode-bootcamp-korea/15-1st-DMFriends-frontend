import React, { Component } from "react";
import Feeds from "../Main/feeds/Feeds";
import MainReply from "../Main/mainReply/MainReply";
import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header/Header";
import { withRouter } from "react-router-dom";
import "./Main.scss";
import { API } from "../../config";

class Main extends React.Component {
  state = {
    feeds: [],
    startNumber: 1,
    endNumber: 2,
  };
  componentDidMount() {
    // this.getData();
    this.getfeedData();
    window.addEventListener("scroll", this.infiniteScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }
  getfeedData = () => {
    fetch(`${API}/board/main`)
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        this.setState({
          feeds: result.board_list,
        });
      });
  };
  getData = () => {
    const { startNumber, endNumber, feeds } = this.state;
    fetch(`${API}/board/main`)
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
        <Header />
        <Nav />
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
