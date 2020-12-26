import React, { Component } from "react";
<<<<<<< HEAD
import Header from "../../Components/Header/Header";
import Nav from "./Components/Nav";
=======
//import Header from "../../Components/Header/Header"; 컴포넌트 사용예정
import Nav from "../../Components/Nav/Nav";
>>>>>>> master
import SliderContainer from "./Components/SliderContainer/SliderContainer";
import NewItemConainer from "./Components/NewItemContainer/NewItemContainer";
import ViewMoreContainer from "./Components/ViewMoreContainer/ViewMoreContainer";
import UpdateItemContainer from "./Components/UpdateItemContainer/UpdateItemContainer";
import "./NewProducts.scss";

class NewProducts extends Component {
  render() {
    return (
<<<<<<< HEAD
      <>
        <Header />
        <div className="NewProducts">
          <Nav />
          <SliderContainer />
          <article>
            <NewItemConainer />
          </article>
          <ViewMoreContainer />
          <div className="SpaceContainer" />
          <div className="UpdateContainer">
            <article>
              <UpdateItemContainer />
            </article>
          </div>
        </div>
      </>
=======
      <div className="NewProducts">
        {/* <Header></Header> 컴포넌트 사용예정 */}
        <Nav />
        <SliderContainer />
        <article>
          <NewItemConainer />
        </article>
        <ViewMoreContainer />
        <div className="SpaceContainer" />
        <div className="UpdateContainer">
          <article>
            <UpdateItemContainer />
          </article>
        </div>
      </div>
>>>>>>> master
    );
  }
}

export default NewProducts;
