import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
class Nav extends Component {
  constructor() {
    super();
    this.state = {
      underLine1: false,
      underLine2: true,
      underLine3: false,
      underLine4: false,
    };
  }
<<<<<<< HEAD

<<<<<<< HEAD
=======
  goToMain = () => {
    this.props.history.push("/");
  };

>>>>>>> master
=======
>>>>>>> master
  showUnderLine = (index) => {
    this.setState({
      [`underLine${index}`]: !this.state[`underLine${index}`],
    });
  };
<<<<<<< HEAD

=======
>>>>>>> master
  render() {
    const { underLine1, underLine2, underLine3, underLine4 } = this.state;
    return (
      <div className="Nav">
        <ul>
          <li className={underLine1 && "active"}>
<<<<<<< HEAD
            <Link to="/" onClick={() => this.showUnderLine(1)}>
              오늘
            </Link>
          </li>
          <li className={underLine2 && "active"}>
            <Link to="/NewProducts" onClick={() => this.showUnderLine(2)}>
=======
            <Link onClick={() => this.showUnderLine(1)}>오늘</Link>
          </li>
          <li className={underLine2 && "active"}>
            <Link to="#" onClick={() => this.showUnderLine(2)}>
>>>>>>> master
              신규
            </Link>
          </li>
          <li className={underLine3 && "active"}>
<<<<<<< HEAD
            <Link onClick={() => this.showUnderLine(3)}>인기</Link>
=======
            <Link to="/" onClick={() => this.showUnderLine(3)}>
              인기
            </Link>
>>>>>>> master
          </li>
          <li className={underLine4 && "active"}>
            <Link to="/CartList" onClick={() => this.showUnderLine(4)}>
              마이
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
<<<<<<< HEAD

=======
>>>>>>> master
export default Nav;
