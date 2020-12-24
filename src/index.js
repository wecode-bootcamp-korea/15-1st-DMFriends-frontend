import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "slick-carousel/slick/slick.css";
import "./Pages/NewProducts/Components/SliderBox/_slick-theme.scss";
import "./styles/reset.scss";
import "../src/Pages/ProductDetail/Components/DetailPageProductImg/_slick-theme.scss";
import "../src/Pages/ProductDetail/Components/DetailPageProductImg/_slick.scss";

ReactDOM.render(<Routes />, document.getElementById("root"));
