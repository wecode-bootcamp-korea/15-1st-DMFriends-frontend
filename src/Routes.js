import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/chaebinhan/Main/Main";
import MainDetail from "./Pages/chaebinhan/Main/MainDetail";
import CartList from "./Pages/daehoim/CartList/CartList";
import ProductDetail from "./Pages/daehoim/ProductDetail/ProductDetail";
import Checkbox from "./Pages/haiinkim/Checkbox/Checkbox";
import Login from "./Pages/haiinkim/Login/Login";
import Signup from "./Pages/haiinkim/Signup/Signup";
import Category from "./Pages/taejinlim/Category/Category";
import NewProducts from "./Pages/taejinlim/NewProducts/NewProducts";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/MainDetail" component={MainDetail} />
          <Route exact path="/CartList" component={CartList} />
          <Route exact path="/ProductDetail" component={ProductDetail} />
          <Route exact path="/Checkbox" component={Checkbox} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Category" component={Category} />
          <Route exact path="/NewProducts" component={NewProducts} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
