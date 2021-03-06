import React from "react";
import styled from "styled-components";
import { Spin } from "antd";
import user from "../../assets/imgs/report/user.png";
import pdf from "../../assets/imgs/report/pdf.png";
import { reportList } from "./index";

const Box = styled.div`
  background: #f4f5f7;
  min-height: 100vh;
  font-size: 17px;
  margin-bottom: 27px;
  .top {
    background: #f4f5f7;
    border-bottom: 1px solid #cdced0;
    position: sticky;
    top: 68px;
    left: 0;
    z-index: 100;
  }
  .contarin {
    width: 1160px;
    margin: 0 auto;
    height: 56px;
    ul {
      padding: 0 60px;
      display: flex;
      align-items: center;
      li {
        line-height: 56px;
        margin-right: 81px;
        cursor: pointer;
        font-size: 17px;
        color: #585654;
        position: relative;
        &.active {
          color: #3c81ce;
          &:after {
            content: " ";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: #1769c5;
          }
        }
      }
    }
  }
  .text-content {
    display: flex;
    min-height: 90vh;
    margin-top: 22px;
    img {
      max-width: 100%;
    }
    .text {
      padding: 30px 35px;
      flex: 1;
      font-size: 18px;
      background: #fff;
      .title {
        width: 584px;
        height: 71px;
        font-size: 27px;
        font-weight: 400;
        line-height: 45px;
        margin-bottom: 40px;
      }
      .tag {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #929598;
        .resource {
          display: flex;
          align-items: center;
          section {
            margin-left: 17px;
            width: 71px;
            line-height: 21px;
            text-align: center;
            font-size: 15px;
            color: #387bf6;
            border: 1px solid #387bf6;
            border-radius: 4px;
          }
        }
        .createUser {
          display: flex;
          align-items: center;
          img {
            margin-right: 5px;
          }
        }
      }
      .time {
        font-size: 17px;
        color: #929598;
        margin: 23px 0 28px 0;
      }
      .pdf {
        display: flex;
        align-items: center;
        color: #3c81ce;
        margin-bottom: 32px;
        img {
          margin-right: 4px;
        }
      }
      .innerhtml {
        padding: 31px 0;
        font-size: 20px;
        font-weight: 400;
        color: #000000;
        line-height: 43px;
      }
    }
    .recommand {
      width: 381px;
      margin-left: 20px;
      .item {
        margin-bottom: 21px;
        background: #fff;
        padding: 0 27px;
        .item_label {
          line-height: 75px;
          border-bottom: 1px solid #e9e9e9;
          font-size: 20px;
          font-weight: bold;
        }
      }
      .item_list {
        padding: 26px 0;
        font-size: 16px;
        font-weight: 400;
        color: #585654;
        line-height: 30px;
        display: flex;
        flex-wrap: wrap;
        p {
          width: calc(100% / 3);
          &:nth-of-type(3n - 1) {
            text-align: center;
          }
          &:nth-of-type(3n) {
            text-align: right;
          }
        }
      }
      .item_column {
        padding: 26px 0;
        font-size: 17px;
        font-weight: 300;
        line-height: 22px;
        p {
          margin-bottom: 29px;
          overflow: hidden;
          display: -webkit-box; //???????????????????????????????????????
          -webkit-box-orient: vertical; //??????????????????????????????
          -webkit-line-clamp: 2; //??????3??????????????????????????????
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

class Report extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      idx: 1,
      loading: true,
      tabList: [
        {
          label: "????????????",
          value: 1,
        },
        {
          label: "??????????????????????????????",
          value: 2,
        },
        {
          label: "??????????????????",
          value: 3,
        },
      ],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }
  changeTab(v) {
    this.setState({
      idx: v,
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }
  render() {
    const { tabList, idx, loading } = this.state;
    return (
      <Box>
        <Spin spinning={loading}>
          <div className="top">
            <div className="contarin">
              <ul>
                {tabList.map((t) => {
                  return (
                    <li
                      key={t.value}
                      className={idx === t.value ? "active" : ""}
                      onClick={() => this.changeTab(t.value)}
                    >
                      {t.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="text-content maxContrain">
            <div className="text">
              <p className="title">
                ???????????????002624??????????????????????????????????????????????????????-????????????211114
              </p>
              <div className="tag">
                <p className="resource">
                  <span>????????????</span>
                  <section>????????????</section>
                  <section>????????????</section>
                </p>
                <p className="createUser">
                  <img src={user} alt="" />
                  ?????? ??????
                </p>
                <p className="stock">?????????????????????</p>
                <p className="level">???????????????</p>
              </div>
              <p className="time">2021-11-17</p>
              <p className="pdf">
                <img src={pdf} alt="" />
                ????????????PDF
              </p>
              <div className="innerhtml">
                10?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????10????????????????????????9??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????8.2%/10.3%??????19??????????????????2.1
                ????????????/18.9???????????????????????????????????????1.3???????????????70.1%??????19???????????????14.6?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????10????????????????????????????????????+4.9%/-14.8%??????19?????????????????????95.2????????????/97.1?????????????????????????????????????????????????????????10?????????????????????????????????19???????????????5.8????????????/23.2???????????????????????????19???????????????15.6??????????????????????????????????????????????????????????????????0.5/5.3???????????????
                ???????????????10????????????????????????????????????0.4/3.3???????????????85.2%/76.0%??????19?????????????????????7.3/12.5??????????????????????????????????????????10????????????????????????????????????1.7%/2.1%???9.1%/14.0%???????????????????????????0.4/3.3???????????????85.2%/76%??????19?????????????????????7.3/12.5????????????????????????????????????2021?????????????????????????????????8???9??????????????????????????????????????????????????????????????????10???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????2021
                ??? 10
                ????????????????????????????????????????????????6????????????????????????????????????????????????
                11???????????????????????????????????????????????????????????????????????????????????????????????????11???1??????14?????????????????????????????????????????????????????????????????????????????????10????????????46.4%/31.6%/36.8%???????????????????????????????????????33.2%/23.5%??????????????????????????????????????????????????????2.9/3.9/3.8??????/????????????????????????42.6%/30.7%/37.2%?????????????????????????????????17.0%???7.3??????/????????????????????????????????????31.2%???5.5??????/????????????????????????????????????????????????11???15???0???????????????????????????????????????????????????????????????????????????Q4????????????????????????
                ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                ???????????????????????????????????????????????????????????????
              </div>
            </div>
            <div className="recommand">
              <div className="item">
                <p className="item_label">????????????</p>
                <div className="item_list">
                  {reportList.map((t, i) => {
                    return <p key={t.value}>{t.label}</p>;
                  })}
                </div>
              </div>
              <div className="item">
                <p className="item_label">????????????</p>
                <div className="item_column">
                  {new Array(5).fill(1).map((t, i) => {
                    return (
                      <p key={i}>
                        ???????????????????????????9???25?????????????????????9???25????????????????????????9???25????????????????????????9???25????????????????????????9???25???
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Spin>
      </Box>
    );
  }
}
export default Report;
