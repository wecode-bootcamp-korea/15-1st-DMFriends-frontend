import React, { Component } from "react";
import * as configs from "../../config.js";
//import Header from "../../Components/Header/Header"; 컴포넌트 사용예정
//import Nav from "../../Components/Nav/Nav";
import "./NewProducts.scss";

class NewProducts extends Component {
  render() {
    return (
      <>
        <div className="NewProducts">
          {/* <Header></Header> 컴포넌트 사용예정
          <Nav></Nav> */}
          <div className="ImgContainer">
            <div className="ImgBox">
              <img src={configs.ProductsMainImg} alt="PhoneHolder" />
            </div>
          </div>
          <article>
            <div className="ProductsContainer">
              <div className="ProductsList">
                <p>추천 신규 테마</p>
                <h3>리빙</h3>
                <div className="ProductsCardGrid">
                  {/*array.map 사용예정*/}
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
                  {/*array.map 사용예정*/}
                </div>
              </div>
            </div>
          </article>
        </div>
      </>
    );
  }
}

export default NewProducts;
