import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    const { menu } = this.props;
    return (
      <li>
        <Link to={menu.path}>{menu.name}</Link>
      </li>
    );
  }
}

export default Menu;
