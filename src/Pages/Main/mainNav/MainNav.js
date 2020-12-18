import "./MainNav.scss";
import React, { Component } from "react";

class MainNav extends Component {
  render() {
    const { mainNav } = this.props;

    return (
      <>
        {mainNav.map((mainNav) => (
          <div className="headerLine">
            <div className="header">
              <ul>
                <li>
                  <a class="active" href={mainNav.menuSrc}>
                    <div className={mainNav.nenuCassName}>
                      <div>{mainNav.menuName}</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </>
    );
  }
}
export default MainNav;
