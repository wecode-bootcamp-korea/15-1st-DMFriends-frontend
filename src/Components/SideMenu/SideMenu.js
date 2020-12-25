import React from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from "./Menu/Menu";
import SmallList from "./Category/SmallList";
import "./SideMenu.scss";

class SideMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      menuList: [],
      dropDownMenu: false,
    };
  }

  componentDidMount() {
    fetch("/data/SideMenu.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          menuList: res.menu,
        });
      });
  }

  showDropDownMenu = (e) => {
    e.preventDefault();

    const { dropDownMenu } = this.state;
    this.setState({
      dropDownMenu: !dropDownMenu,
    });
  };

  render() {
    const { menuList, dropDownMenu } = this.state;
    const { showMenu } = this.props;

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
            <article className="christmas">
              <Link to="Category">
                <img src="/images/haiinkim/DM_5.png" />
              </Link>
            </article>
            <ul>
              {menuList.map((menu) => {
                if (menu.id === 3) {
                  return (
                    <>
                      <Menu menu={menu} key={menu.id} id={menu.id} onClick={this.showDropDownMenu} />
                      {dropDownMenu && <SmallList />}
                    </>
                  );
                } else {
                  return <Menu menu={menu} key={menu.id} id={menu.id} />;
                }
              })}
            </ul>
            <div className="loginIcon">
              <Link to="Signup">회원가입</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SideMenu);
