import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PageNumContainer.scss";

class PageNumContainer extends Component {
  render() {
    return (
      <div className="PageNumContainer">
        <div className="PageNumBox">
          <div className="PageNum">
            <div className="Number">
              <Link to="/Category" className="CurrentPage">
                1
              </Link>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
            </div>
          </div>
        </div>
        <img src="images/taejinlim/arrow.jpg" alt="arrow"></img>
      </div>
    );
  }
}

export default PageNumContainer;
