import React from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from "./Menu";
import "./SideMenu.scss";

class SideMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      menuList: [],
    };
  }

  componentDidMount() {
    fetch("/data/SideMenu.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          menuList: res.menu,
        });
      });
  }

  // showSideMenu = () => {
  //   this.setState({
  //     showMenu: false,
  //   });
  // };

  // hideSideMenu = () => {
  //   this.setState({
  //     showMenu: true,
  //   });
  // };

  render() {
    const { menuList } = this.state;
    const { showMenu } = this.props;
    console.log(this.props);
    return (
      <div className="SideMenu">
        <div className="menuFrame">
          <div className={showMenu ? "menu active" : "menu"}>
            <article>
              <div>
                <Link to="Login">
                  <span>로그인</span>이 필요해요!
                </Link>
                <Link>비회원 주문조회</Link>
              </div>
            </article>
            <article>
              <Link to="Category">동묘프렌즈랑 메리 화이트 크리스마스🥳</Link>
            </article>
            <ul>
              {menuList.map((menu) => {
                return <Menu menu={menu} key={menu.id} />;
              })}
            </ul>
            <div className="loginIcon">
              <Link to="Login">로그인</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SideMenu);
