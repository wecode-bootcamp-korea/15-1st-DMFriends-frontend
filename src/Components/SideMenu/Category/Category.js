import React from "react";
import { Link } from "react-router-dom";

class Category extends React.Component {
  render() {
    return (
      <ul className="category">
        <li>
          <Link to="#">전체</Link>
          <Link to="#">토이</Link>
        </li>
        <li>
          <Link to="/Category">리빙</Link>
          <Link to="#">잡화</Link>
        </li>
        <li>
          <Link to="#">문구</Link>
          <Link to="#">테마 기획전</Link>
        </li>
      </ul>
    );
  }
}

export default Category;
