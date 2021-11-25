import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BackTop } from "antd";
import Routes from "../router";
import routesList from "../router/route";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import police from "../assets/imgs/index/police.png";
import logo from "../assets/imgs/index/hxnn.png";
const MainCss = styled.div`
  header {
    background: #234870;
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  .hearder_contarin {
    width: 1160px;
    padding: 0 10px;
    margin: 0 auto;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo_nav {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    p {
      cursor: pointer;
      margin-right: 90px;
    }
    nav {
      display: flex;
      align-items: center;
      .link {
        cursor: pointer;
        height: 68px;
        line-height: 68px;
        display: block;
        padding: 0 34px;
        color: #fff;
        &:hover {
          background: #49a3e3;
        }
      }
      .a {
        background: #3c81ce;
      }
    }
  }
  .user {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
  }
  footer {
    background: #234870;
    font-size: 16px;
    color: #fff;
    .footer_content {
      padding: 0 10px;
      width: 1160px;
      height: 116px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      .footer_left,
      .footer_right {
        height: 60px;
      }
      .footer_left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
          display: flex;
          align-items: center;
          img {
            width: 18px;
            display: block;
            margin-right: 5px;
          }
        }
      }
      .footer_right {
        ul {
          display: flex;
          align-items: center;
          li {
            margin: 0 31px;
            font-weight: 200;
          }
        }
      }
    }
  }
`;

export const navList = [
  {
    path: "/",
    name: "首页",
  },
  {
    path: "/report",
    name: "机构研报",
  },
  {
    path: "/a",
    name: "机构会议",
  },
  {
    path: "/v",
    name: "机构金股",
  },
  {
    path: "/b",
    name: "机构主题",
  },
];

class Main extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <MainCss>
        <BackTop />
        <Router>
          <header>
            <div className="hearder_contarin">
              <div className="logo_nav">
                <p>
                  <Link to="/">
                    <img src={logo} alt="惠选牛牛" />
                  </Link>
                </p>
                <nav>
                  {navList.map((t, i) => (
                    <NavLink
                      exact={t.path === "/" ? true : false}
                      className="link"
                      to={t.path}
                      key={i}
                      activeClassName="a"
                    >
                      {t.name}
                    </NavLink>
                  ))}
                </nav>
              </div>
              <div className="user">
                <p>下载app</p>
                <img src="" alt="" />
              </div>
            </div>
          </header>
          <Routes routesList={routesList} />
          <footer>
            <div className="footer_content">
              <div className="footer_left">
                <div>
                  <img src={police} alt="" />
                  <p>沪ICP备05008792号-6</p>
                </div>
                <div>上海龙柏信息科技有限公司版权所有2010-2021</div>
              </div>
              <div className="footer_right">
                <ul>
                  <li>关于我们</li>
                  <li>联系我们</li>
                  <li>付款</li>
                  <li>APP下载</li>
                  <li>个人信息</li>
                </ul>
              </div>
            </div>
          </footer>
        </Router>
      </MainCss>
    );
  }
}

export default Main;
