import React, { Component } from "react";
import Feeds from "../../Pages/Main/feeds/Feeds";
import { withRouter } from "react-router-dom";
import "./MainDetail.scss";
import "../Main/Main.scss";
import { mainAPI } from "../../config";

class MainDetail extends Component {
  state = {
    feeds: [],
    startNumber: 1,
    endNumber: 2,
  };

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
        this.setState({
          feeds: result.board_list,
        });
      });
  };

  getData = () => {
    const { startNumber, endNumber, feeds } = this.state;
    fetch(`${mainAPI}/board/main`)
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
      <div className="MainDetail">
        <p>abc</p>
        <div className="headerLine">
          <div className="header"></div>
        </div>
        <Feeds />
        {feeds.map((feed, id) => {
          return (
            <>
              <Feeds feed={feed} key={feed.id} />
              <div className="replyBox">
                <input
                  className="footerReplyInput"
                  type="text"
                  placeholder="댓글을 달아주세요."
                  onKeyPress={this.appKeyPress}
                ></input>
                <button className="footerReplyBtn" onClick={this.addReple}>
                  <img className="replyBtn" src="images/chaebinhan/MainDetail/reply.png" alt="댓글달기 버튼" />
                </button>
              </div>
            </>
          );
        })}
        <p>a</p>
      </div>
    );
  }
}
export default withRouter(MainDetail);
