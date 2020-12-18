import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as configs from "../../../config.js";

class BottomBar extends Component {
  constructor() {
    super();
    this.state = {
      quantityValue: 1,
      totalPrice: "",
    };
  }

  componentDidMount() {
    fetch("data/BottomBar.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productPrice: res.ProductData[0].price,
        });
      });
  }

  handleMinus = () => {
    this.setState({
      quantityValue: Number(this.state.quantityValue - 1),
    });
    const totalSubtraction = this.state.totalPrice - Number(this.state.productPrice);
    this.setState({
      totalPrice: totalSubtraction,
    });
  };

  handlePlus = () => {
    this.setState({
      quantityValue: this.state.quantityValue + 1,
    });
    const totalAdded = Number(this.state.productPrice) * this.state.quantityValue;
    this.setState({
      totalPrice: totalAdded + Number(this.state.productPrice),
    });
  };

  goToCart = () => {
    this.props.history.push("/cart"); // 장바구니로 이동
  };

  addToCart = () => {}; // 장바구니에 추가

  render() {
    const { quantityValue, totalPrice, productPrice } = this.state;
    const { handleMinus, handlePlus, goToCart, addToCart } = this;
    const onlyNaturalNum = quantityValue > 1;
    let whichNum = totalPrice === "" ? productPrice : totalPrice;
    return (
      <section className="BottomBar">
        <div className="optionsWrap">
          <div className="quantities">
            <button className="minusBtn" onClick={handleMinus} disabled={!onlyNaturalNum}>
              -
            </button>
            <input type="number" value={quantityValue} />
            <button className="plusBtn" onClick={handlePlus}>
              +
            </button>
          </div>
          <div className="totalPrice">
            <span className="total">총 상품금액</span>
            <span>{Number(whichNum).toLocaleString()}원</span>
          </div>
        </div>
        <div className="purchase">
          <img onClick={addToCart} src={configs.bag} alt="addCart"></img>
          <span onClick={goToCart}>바로구매</span>
        </div>
      </section>
    );
  }
}

export default withRouter(BottomBar);
