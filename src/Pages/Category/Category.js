import React, { Component } from "react";
import * as configs from "../../config.js";
//import Header from "../../Components/Header/Header";
import "./Category.scss";

class Category extends Component {
  render() {
    return (
      <>
        <div className="Category">
          <div className="CateContainer">
            <header></header>
            <div className="ImgBox">
              <img src="images/taejinlim/living.jpg" alt="living" />
            </div>
            <div className="ProductsList">
              <div className="ListOne">
                <button>전체</button>
              </div>
              <div className="ListTwo">
                <button>쿠션/방석</button>
              </div>
              <div className="ListThree">
                <button>컵/텀블러</button>
              </div>
              <div className="ListFour">
                <button>주방용품</button>
              </div>
              <div className="ListFive">
                <button>미용/욕실용품</button>
              </div>
              <div className="ListSix">
                <button>생활소품/잡화</button>
              </div>
              <div className="ListSeven">
                <button>펫 용품</button>
              </div>
              <div className="ListEight">
                <button>탈취/방향제</button>
              </div>
            </div>
            <div className="ProductsHeader">
              <div className="HeaderText">
                <div className="HeaderLeft">
                  <div className="HeaderAmount">
                    <span className="LeftOne">총 </span>
                    <span className="LeftTwo">286</span>
                    <span className="LeftThree">개</span>
                  </div>
                  <img src={configs.checkBox} alt="check" />
                  <div className="GlobalProducts">글로벌 배송 가능상품 보기</div>
                </div>
                <div className="HeaderRight">
                  <span>신상품순</span>
                  <img src={configs.underCheck} alt="underCheck"></img>
                </div>
              </div>
            </div>
            <article className="ProductCardGrid">
              <a href="/NewProducts" className="Product">
                <img src={configs.products} alt="product" />
                <div className="ProductText">
                  <span>윙크베이비필로우_라이언</span>
                  <button>
                    <img src={configs.basket} alt="basket" />
                  </button>
                </div>
                <div className="ProductPrice">
                  <p>12,000원</p>
                </div>
              </a>
              <a href="/NewProducts" className="Product">
                <img src={configs.products} alt="product" />
                <div className="ProductText">
                  <span>윙크베이비필로우_라이언</span>
                  <button>
                    <img src={configs.basket} alt="basket" />
                  </button>
                </div>
                <div className="ProductPrice">
                  <p>12,000원</p>
                </div>
              </a>
              <a href="/NewProducts" className="Product">
                <img src={configs.products} alt="product" />
                <div className="ProductText">
                  <span>윙크베이비필로우_라이언</span>
                  <button>
                    <img src={configs.basket} alt="basket" />
                  </button>
                </div>
                <div className="ProductPrice">
                  <p>12,000원</p>
                </div>
              </a>
              <a href="/NewProducts" className="Product">
                <img src={configs.products} alt="product" />
                <div className="ProductText">
                  <span>윙크베이비필로우_라이언</span>
                  <button>
                    <img src={configs.basket} alt="basket" />
                  </button>
                </div>
                <div className="ProductPrice">
                  <p>12,000원</p>
                </div>
              </a>
              <a href="/NewProducts" className="Product">
                <img src={configs.products} alt="product" />
                <div className="ProductText">
                  <span>윙크베이비필로우_라이언</span>
                  <button>
                    <img src={configs.basket} alt="basket" />
                  </button>
                </div>
                <div className="ProductPrice">
                  <p>12,000원</p>
                </div>
              </a>
              <a href="/NewProducts" className="Product">
                <img src={configs.products} alt="product"></img>
                <div className="ProductText">
                  <span>윙크베이비필로우_라이언</span>
                  <button>
                    <img src={configs.basket} alt="basket" />
                  </button>
                </div>
                <div className="ProductPrice">
                  <p>12,000원</p>
                </div>
              </a>
              <a href="/NewProducts" className="Product">
                <img src={configs.products} alt="product" />
                <div className="ProductText">
                  <span>윙크베이비필로우_라이언</span>
                  <button>
                    <img src={configs.basket} alt="basket" />
                  </button>
                </div>
                <div className="ProductPrice">
                  <p>12,000원</p>
                </div>
              </a>
              <a href="/NewProducts" className="Product">
                <img src={configs.products} alt="product"></img>
                <div className="ProductText">
                  <span>윙크베이비필로우_라이언</span>
                  <button>
                    <img src={configs.basket} alt="basket" />
                  </button>
                </div>
                <div className="ProductPrice">
                  <p>12,000원</p>
                </div>
              </a>
            </article>
          </div>
        </div>
      </>
    );
  }
}

export default Category;
