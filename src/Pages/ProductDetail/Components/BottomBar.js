import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as configs from "../../../config.js";

class BottomBar extends Component {
  constructor() {
    super();
    this.cart = React.createRef();
    this.state = {
      quantityValue: 1,
      totalPrice: "",
      product_id: 1,
    };
  }

  componentDidMount() {
    fetch("http://192.168.0.27:8000/product/detail/1")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          productPrice: res.result[0].price,
        });
      });
  }

  handleDecrease = () => {
    const totalSubtraction = this.state.totalPrice - this.state.productPrice;
    this.setState({
      quantityValue: this.state.quantityValue - 1,
      totalPrice: totalSubtraction,
    });
  };

  handleIncrease = () => {
    const totalAdded = +this.state.productPrice * this.state.quantityValue;
    this.setState({
      quantityValue: this.state.quantityValue + 1,
      totalPrice: +this.state.productPrice + totalAdded,
    });
  };

  goToCart = () => {
    this.props.history.push("/CartList"); // 장바구니로 이동
  };

  addToCart = () => {
    this.cart.current.className = "active";
    setTimeout(() => {
      this.cart.current.className = "modalbox";
    }, 2500);
    this.addProduct();
  };

  addProduct = () => {
    fetch(`http://192.168.0.27:8000/order/cart`, {
      headers: { Authorization: localStorage.getItem("Token") },
      method: "post",
      body: JSON.stringify({
        quantity: this.state.quantityValue,
        product_id: this.state.product_id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("message", res);
      });
  };

  render() {
    const { quantityValue, totalPrice, productPrice } = this.state;
    const { handleDecrease, handleIncrease, goToCart, addToCart } = this;
    const onlyNaturalNum = quantityValue > 1;
    let whichPrice = totalPrice === "" ? +productPrice : totalPrice;
    return (
      <>
        <section className="BottomBar">
          <div className="optionsWrap">
            <div className="quantities">
              <button className="minusBtn" onClick={handleDecrease} disabled={!onlyNaturalNum}>
                -
              </button>
              <input type="number" value={quantityValue} />
              <button className="plusBtn" onClick={handleIncrease}>
                +
              </button>
            </div>
            <div className="totalPrice">
              <span className="total">총 상품금액</span>
              <span>{whichPrice.toLocaleString()}원</span>
            </div>
          </div>
          <div className="purchase">
            <img onClick={addToCart} src={configs.bag} alt="addCart"></img>
            <span onClick={goToCart}>바로구매</span>
          </div>
        </section>
        <div className="addedModal">
          <button ref={this.cart} className="modalbox" onClick={goToCart}>
            <img className="check" src={configs.checkImg} alt="checkImg" />
            <span>장바구니에 담겼습니다.</span>
            <img src={configs.rightArrow} alt="rightArrow" />
          </button>
        </div>
      </>
    );
  }
}

export default withRouter(BottomBar);
