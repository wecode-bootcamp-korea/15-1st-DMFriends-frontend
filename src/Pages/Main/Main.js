import React, { Component } from "react";
<<<<<<< HEAD
import Feeds from "../Main/feeds/Feeds";
import MainReply from "../Main/mainReply/MainReply";
import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header/Header";
import { withRouter } from "react-router-dom";
import "./Main.scss";
import { API } from "../../config";
=======
import Feeds from "./feeds/Feeds";
import MainReply from "./mainReply/MainReply";
import { withRouter } from "react-router-dom";
import "./Main.scss";
import { mainAPI } from "../../config";
>>>>>>> master

class Main extends React.Component {
  state = {
    feeds: [],
    startNumber: 1,
    endNumber: 2,
  };
<<<<<<< HEAD
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
=======

  componentDidMount() {
    this.getfeedData();
    window.addEventListener("scroll", this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  getfeedData = () => {
    fetch(`${mainAPI}/board/main`)
      .then((result) => result.json())
      .then((result) => {
>>>>>>> master
        this.setState({
          feeds: result.board_list,
        });
      });
  };
<<<<<<< HEAD
  getData = () => {
    const { startNumber, endNumber, feeds } = this.state;
    fetch(`${API}/board/main`)
=======

  getData = () => {
    const { startNumber, endNumber, feeds } = this.state;
    fetch(`${mainAPI}/board/main`)
>>>>>>> master
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        const writeFeeds = result.feeds.slice(startNumber, endNumber);
        this.setState({
          feeds: [...feeds, ...writeFeeds],
        });
      });
  };
<<<<<<< HEAD
  infiniteScroll = () => {
    const { documentElement, body } = document;
    const { endNumber } = this.state;
    const scrollHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;
=======

  infiniteScroll = () => {
    const { documentElement, body } = document;
    const { endNumber } = this.state;

    const scrollHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;

>>>>>>> master
    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        startNumber: endNumber,
        endNumber: endNumber + 2,
      });
<<<<<<< HEAD
=======

>>>>>>> master
      this.getData();
    }
  };

  render() {
    const { feeds } = this.state;
    return (
      <div className="Main">
<<<<<<< HEAD
        <Header />
        <Nav />
=======
>>>>>>> master
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
