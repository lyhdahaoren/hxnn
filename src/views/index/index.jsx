import React from "react";
import styled from "styled-components";
import bg from "../../assets/imgs/index/bg.png";
import { Link } from "react-router-dom";
import qr from "../../assets/imgs/index/qrcode.png";
import { navList } from "../../layout/main";
import { Checkbox } from "antd";
import img1 from "../../assets/imgs/index/module1.png";
import img2 from "../../assets/imgs/index/module2.png";
import img3 from "../../assets/imgs/index/module3.png";
import img4 from "../../assets/imgs/index/module4.png";
const IndexCss = styled.div`
  background: #f4f5f7;
  padding-bottom: 110px;
  .login {
    height: 687px;
    background: url(${bg}) no-repeat;
    background-size: cover;
    .login_contrain {
      .login_content {
        padding-top: 123px;
        display: flex;
        justify-content: space-between;
        .left {
          color: #fff;
          width: 592px;
          font-weight: 300;
          font-size: 35px;
          p {
            &:first-child {
              font-weight: 600;
              font-size: 40px;
              margin-bottom: 53px;
            }
          }
          .download {
            width: 160px;
            margin-top: 51px;
            text-align: center;
            font-size: 25px;
            img {
              display: block;
              width: 100%;
              height: 160px;
              margin-bottom: 26px;
            }
          }
        }
        .right {
          width: 568px;
          height: 429px;
          background: rgba(35, 72, 112, 0);
          border-radius: 30px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: all 0.3s;
          transform-origin: center center;
          &:hover {
            width: 541px;
            background: rgba(35, 72, 112, 0.3);
          }
          input {
            color: #fff;
            border: 0;
            width: 100%;
            height: 100%;
            font-size: 21px;
            outline: none;
            background: transparent;
            &::placeholder {
              color: #fff;
            }
          }
          .ipt {
            cursor: pointer;
            background: rgba(255, 255, 255, 0.3);
            border: 1px solid #dddddd;
            border-radius: 25px;
            overflow: hidden;
            margin-bottom: 40px;
            input {
              padding: 0 25px;
              transition: all 0.3s;
              width: 381px;
              height: 49px;
              &:focus {
                width: 452px;
                background: rgba(35, 72, 112, 0.6);
              }
            }
          }
          .code {
            display: flex;
            align-items: center;
            width: 381px;
            justify-content: space-between;
            p {
              flex: 1;
              height: 49px;
              background: rgba(255, 255, 255, 0.3);
              overflow: hidden;
              border: 2px solid transparent;
              border-radius: 25px;
              &:first-child {
                border: 2px solid #dddddd;
                margin-right: 30px;
                input {
                  padding: 0 25px;
                }
              }
              img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }
          }
          .login_btn {
            width: 381px;
            line-height: 49px;
            background: linear-gradient(-90deg, #1e86d3, #199cd1);
            border-radius: 25px;
            text-align: center;
            font-weight: 600;
            cursor: pointer;
            font-size: 21px;
            margin-top: 37px;
          }
          .active_area {
            width: 381px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 32px;
            font-size: 18px;
            .ant-checkbox-wrapper {
              color: #fff;
              font-size: 18px;
            }
            span {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .margin {
    margin: 82px 0 59px 0;
  }
  .modules {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 17px;
    li {
      cursor: pointer;
      width: 281px;
      padding: 28px 24px;
      height: 288px;
      background: #ffffff;
      color: #000;
      p {
        &:first-child {
          font-size: 20px;
          font-weight: bold;
          display: flex;
          align-items: center;
          margin-bottom: 40px;
          img {
            margin-right: 16px;
          }
        }
      }
    }
  }
`;

const TitleCss = styled.div`
  padding-left: 10px;
  position: relative;
  color: #000000;
  p {
    font-size: 25px;
    font-weight: 600;
    &:first-child {
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
  &:before {
    content: "";
    width: 3px;
    height: 90%;
    background: #1769c5;
    border-radius: 1px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Title = ({ title, className, subTitle }) => (
  <TitleCss className={className}>
    <p>{title}</p>
    <p>{subTitle}</p>
  </TitleCss>
);

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChange = (e) => {
    console.log(e.target.checked);
  };
  render() {
    const img = { img1, img2, img3, img4 };
    return (
      <IndexCss>
        <div className="login">
          <div className="login_contrain">
            <div className="maxContrain login_content">
              <div className="left">
                <p>个性化互联网+投顾智库</p>
                <p>内参、研报、智库、数据、涨停、事件主题、一屏掌握。</p>
                <div className="download">
                  <img src={qr} alt="" />
                  <p>扫码下载app</p>
                </div>
              </div>
              <div className="right">
                <p className="ipt">
                  <input autoFocus type="text" placeholder="账号" />
                </p>
                <p className="ipt">
                  <input type="password" placeholder="密码" />
                </p>
                <div className="code">
                  <p>
                    <input type="text" placeholder="验证码" />
                  </p>
                  <p>
                    <img src="" alt="" />
                  </p>
                </div>
                <p className="login_btn">登录</p>
                <p className="active_area">
                  <Checkbox onChange={this.onChange}>自动登录</Checkbox>
                  <span>忘记密码？</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="maxContrain">
          <Title title="核心模块" className="margin" subTitle="Core Module" />
          <ul className="modules">
            {navList.map((t, i) => {
              return i > 0 ? (
                <Link to={t.path}>
                  <li>
                    <p>
                      <img src={img[`img${i}`]} alt="" />
                      {t.name}
                    </p>
                    <p>
                      提供沪深两市最全面的研报信息,将国内各大机构研究报告优化整合,第一时间提供各大券商研究所报告之精华,深入解析上市公司最新变化、发展方向
                    </p>
                  </li>
                </Link>
              ) : null;
            })}
          </ul>
        </div>
      </IndexCss>
    );
  }
}

export default Index;
