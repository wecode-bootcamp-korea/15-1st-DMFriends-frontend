import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    const { menu, id, onClick } = this.props;
    return (
      <li id={id} onClick={onClick}>
        <Link to={menu.path}>{menu.name}</Link>
      </li>
    );
  }
}

export default Menu;
