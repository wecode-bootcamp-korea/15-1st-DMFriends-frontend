import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      underLine1: true,
      underLine2: false,
      underLine3: false,
      underLine4: false,
    };
  }

  showUnderLine = (index) => {
    for (let i = 1; i < 5; i++) {
      if (`underLine${i}` === `underLine${index}`) {
        this.setState({
          [`underLine${index}`]: !this.state[`underLine${index}`],
        });
      }
    }
  };

  render() {
    const { underLine1, underLine2, underLine3, underLine4 } = this.state;
    return (
      <div className="Nav">
        <ul>
          <li className={underLine1 && "active"}>
            <Link onClick={() => this.showUnderLine(1)}>오늘</Link>
          </li>
          <li className={underLine2 && "active"}>
            <Link to="#" onClick={() => this.showUnderLine(2)}>
              신규
            </Link>
          </li>
          <li className={underLine3 && "active"}>
            <Link to="/" onClick={() => this.showUnderLine(3)}>
              인기
            </Link>
          </li>
          <li className={underLine4 && "active"}>
            <Link to="/" onClick={() => this.showUnderLine(4)}>
              마이
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
