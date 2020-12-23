import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import AddedItems from "./Components/AddedItems";
import "./CartList.scss";
import * as configs from "../../config";

class CartList extends Component {
  constructor() {
    super();
    this.state = {
      cartData: [],
      eachCheckBox: true,
      checkAllProducts: true,
    };
  }

  // componentDidMount() {
  //   fetch("./data/CartList.json")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({ cartData: res.CartList });
  //     });
  // }

  componentDidMount() {
    fetch("http://192.168.0.27:8000/order/cart")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ cartData: res.result });
      });
  }

  handleCheckedBox = (idx) => {
    this.setState(
      {
        [`check${idx}`]: !this.state[`check${idx}`],
      },
      // () => {
      //   const { check0, check1, check2, check3 } = this.state;
      //   this.setState({
      //     checkAllBoxes: !this.checkAllBoxes,
      //   });
      // },
    );
  };

  deleteProduct = (id) => {
    const newdata = this.state.cartData.filter((el) => el.id !== id);
    this.setState({ cartData: newdata });
  };

  deleteAllProduct = () => {
    this.setState({ cartData: [] });
  };

  render() {
    const { cartData } = this.state;
    let totalPrice = this.state.cartData
      .reduce((acc, cur) => {
        return acc + Number(cur.price * cur.quantity);
      }, 0)
      .toLocaleString();
    return (
      <>
        <section className="CartList">
          {/* Header */}
          <Nav />
          <div className="MyPageHeadTapWrap">
            <div className="mainTapList">
              <Link>최근 본</Link>
              <Link>내 활동</Link>
              <Link className="selected">
                장바구니<button className="numOfCart">{cartData.length}</button>
              </Link>
              <Link>주문내역</Link>
            </div>
          </div>
          <div className="ItemList">
            <div className="totalItem">
              <div className="selectItems">
                <input
                  type="checkbox"
                  id="checkAllProducts"
                  checked={this.state.checkAllProducts}
                  onChange={this.handleAllCheckBoxes}
                />
                <label htmlFor="checkAllProducts">
                  <span></span>
                  전체
                </label>
                <span>{cartData.length}</span>
              </div>
              <div className="removeItems">
                전체 삭제
                <img onClick={this.deleteAllProduct} className="removeBtn" src={configs.trashCan} alt="removeBtn" />
              </div>
            </div>
          </div>
          <div className="AddedItems">
            <div className="allItemContainer">
              {cartData &&
                cartData.map((el, idx) => {
                  return (
                    <AddedItems
                      key={idx}
                      id={el.id}
                      name={el.name}
                      price={el.price}
                      quantity={el.quantity}
                      image_url={el.image_url}
                      deleteProduct={this.deleteProduct}
                      checked={this.state.eachCheckBox}
                      onClick={this.handleCheckedBox}
                    />
                  );
                })}
            </div>
            <div className="payment">
              <div className="shipping">
                <span>배송국가</span>
                <select>
                  <option value="한국" selected>
                    한국
                  </option>
                </select>
              </div>
              <div>
                <div>총 주문금액</div>
                <div>{totalPrice.toLocaleString()}원</div>
              </div>
              <div>
                <div>배송비</div>
                <div>무료</div>
              </div>
              <div className="totalPrice">
                <div>총 결제금액</div>
                <div className="totalPrice2">{totalPrice.toLocaleString()}원</div>
              </div>
            </div>
          </div>
        </section>
        <button className="goToPay">
          <span>{totalPrice}원 주문 하기</span>
        </button>
      </>
    );
  }
}

export default CartList;
