import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddedItems from "./Components/AddedItems";
import "./CartList.scss";
import * as configs from "../../config";

class CartList extends Component {
  render() {
    return (
      <>
        <section className="CartList">
          {/* Header */}
          {/* Main tab wrap */}
          <div className="MyPageHeadTapWrap">
            <div className="mainTapList">
              <Link>최근 본</Link>
              <Link>내 활동</Link>
              <Link className="selected">
                장바구니<button className="numOfCart">1</button>
              </Link>
              <Link>주문내역</Link>
            </div>
          </div>
          <div className="ItemList">
            <div className="totalItem">
              <div className="selectItems">
                <input type="checkbox"></input>
                <span>전체</span>
              </div>
              <div className="removeItems">
                1개 선택
                <img className="removeBtn" src={configs.trashCan} alt="removeBtn" />
              </div>
            </div>
          </div>
          <AddedItems />
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
              <div>39,000원</div>
            </div>
            <div>
              <div>배송비</div>
              <div>무료</div>
            </div>
            <div className="totalPrice">
              <div>총 결제금액</div>
              <div className="totalPrice2">39,000원</div>
            </div>
          </div>
        </section>
        <button className="goToPay">
          <span>39,000원 주문 하기</span>
        </button>
      </>
    );
  }
}

export default CartList;
