import React, { Component } from "react";
//import Header from "../../Components/Header/Header"; 컴포넌트 사용예정
//import Nav from "../../Components/Nav/Nav";
import ItemBox from "./Components/ItemBox/ItemBox";
import SliderBox from "./Components/SliderBox/SliderBox";
import "./NewProducts.scss";

class NewProducts extends Component {
  render() {
    return (
      <div className="NewProducts">
        {/* <Header></Header> 컴포넌트 사용예정
          <Nav></Nav> */}
        <SliderBox />
        <article>
          <div className="ProductsContainer">
            <div className="ProductsList">
              <p className="theme">추천 신규 테마</p>
              <h3>리빙</h3>
              <div className="ProductsCardGrid">
                {/* array.map 사용예정 */}
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>
                <div>
                  <ItemBox />
                </div>

                {/*array.map 사용예정*/}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default NewProducts;
