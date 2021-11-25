import React from "react";
import styled from "styled-components";
import { Spin } from "antd";
import share from "../../assets/imgs/report/bg.png";
import search from "../../assets/imgs/report/search.png";
import search_a from "../../assets/imgs/report/search_a.png";
import { Radio, Pagination } from "antd";

const Box = styled.div`
  background: #f4f5f7;
  min-height: 100vh;
  font-size: 17px;
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
  .list {
    background: url(${share}) no-repeat;
    background-size: 100%;
    min-height: 50vh;
    .list_content {
      width: 1160px;
      margin: 0 auto;
      padding-top: 83px;
      .reportList {
        padding: 28px 70px;
        background: #fff;
        ul {
          color: #585654;
          li {
            display: inline-block;
            cursor: pointer;
            margin: 0 17px;
            position: relative;
            &:after {
              content: " ";
              position: absolute;
              height: 17px;
              width: 1px;
              right: -18px;
              top: 50%;
              transform: translateY(-50%);
              background: #585654;
            }
            &:last-child {
              &:after {
                display: none;
              }
            }
            &.active {
              &:before {
                content: " ";
                position: absolute;
                width: 100%;
                height: 1px;
                background: #585654;
                bottom: 0;
                left: 0;
              }
            }
          }
        }
      }
      .title {
        margin: 48px 0 24px 72px;
      }
      .search {
        padding: 31px 30px;
        background: #fff;
        .search_ipt {
          display: flex;
          cursor: pointer;
          align-items: center;
          ._ipt {
            flex: 1;
            display: flex;
            p {
              input {
                width: 100%;
                height: 100%;
                border: none;
                padding: 0 10px;
                outline: none;
              }
              &:first-child {
                flex: 1;
                height: 47px;
                background: #f7fafd;
                border: 1px solid #585654;
              }
              &:last-child {
                width: 130px;
                height: 47px;
                background: url(${search}) no-repeat;
                background-size: 100% 100%;
                border-radius: 0px 3px 3px 0px;
                &:active {
                  background: url(${search_a}) no-repeat;
                  background-size: 100% 100%;
                }
              }
            }
          }
          ._btn {
            &:active {
              box-shadow: 0 0 5px #aaa;
            }
            width: 151px;
            margin-left: 22px;
            line-height: 47px;
            color: #ffffff;
            text-align: center;
            background: linear-gradient(90deg, #49a3e3 0%, #317acc 100%);
            border-radius: 0px 3px 3px 0px;
            border: 1px solid #49a3e3;
          }
        }
        .search_list {
          margin-top: 29px;
          .ant-radio-wrapper {
            color: #3c81ce;
          }
        }
      }
      .table {
        margin-bottom: 43px;
        li {
          cursor: pointer;
          height: 129px;
          background: #ffffff;
          padding: 29px 72px;
          margin-top: 41px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          &:hover {
            box-shadow: 0 0 10px #ccc;
          }
          p {
            font-size: 15px;
            color: #585654;
            &:first-child {
              font-size: 20px;
              color: #000;
              font-weight: bold;
            }
            &:last-child {
              span {
                &:first-child {
                  margin-right: 46px;
                }
              }
            }
          }
        }
      }
    }
  }
`;

const TitleCss = styled.div`
  padding-left: 8px;
  font-size: 17px;
  font-weight: bold;
  position: relative;
  color: #000000;
  &:before {
    content: "";
    width: 2px;
    height: 19px;
    background: #1769c5;
    border-radius: 1px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Title = ({ title, className }) => (
  <TitleCss className={className}>{title}</TitleCss>
);

export const reportList = [
  {
    label: "全部报告",
    value: 1,
  },
  {
    label: "晨会报告",
    value: 2,
  },
  {
    label: "公司研究",
    value: 3,
  },
  {
    label: "行业研究",
    value: 4,
  },
  {
    label: "公关研究",
    value: 5,
  },
  {
    label: "宏观研究",
    value: 6,
  },
  {
    label: "投资策略",
    value: 7,
  },
  {
    label: "金融工程",
    value: 8,
  },
  {
    label: "港股报告",
    value: 9,
  },
  {
    label: "三板市场",
    value: 10,
  },
  {
    label: "三板研报",
    value: 11,
  },
  {
    label: "香港海外",
    value: 12,
  },
];

class Report extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      total: 50,
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
      },
      value: 1,
      idx: 1,
      reportIndex: 1,
      loading: true,
      tabList: [
        {
          label: "研究报告",
          value: 1,
        },
        {
          label: "研究关注度较高的股票",
          value: 2,
        },
        {
          label: "按照行业整理",
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
  changeReport(v) {
    this.setState({
      reportIndex: v,
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }
  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      value,
    });
  };
  render() {
    const { tabList, idx, loading, reportIndex, value, pageInfo, total } =
      this.state;
    return (
      <Box>
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
        <Spin spinning={loading}>
          <div className="list">
            <div
              style={{
                background:
                  "linear-gradient(to bottom, #E5F1FF 0%, transparent 20%)",
              }}
            >
              <div className="list_content">
                <div className="reportList">
                  <ul>
                    {reportList.map((t) => {
                      return (
                        <li
                          key={t.value}
                          className={reportIndex === t.value ? "active" : ""}
                          onClick={() => this.changeReport(t.value)}
                        >
                          {t.label}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <Title
                  className="title"
                  title={
                    reportList.find((t) => t.value === reportIndex).label +
                    "信息"
                  }
                ></Title>
                <div className="search">
                  <div className="search_ipt">
                    <section className="_ipt">
                      <p>
                        <input />
                      </p>
                      <p></p>
                    </section>
                    <div className="_btn">高级搜索</div>
                  </div>
                  <div className="search_list">
                    <Radio.Group onChange={this.onChange} value={value}>
                      <Radio value={1}>智能搜索</Radio>
                      <Radio value={2}>报告标题</Radio>
                      <Radio value={3}>作者</Radio>
                      <Radio value={4}>出处</Radio>
                      <Radio value={5}>股票名称</Radio>
                      <Radio value={6}>股票代码</Radio>
                      <Radio value={7}>评级</Radio>
                      <Radio value={8}>行业</Radio>
                      <Radio value={9}>香港海外</Radio>
                      <Radio value={10}>日期</Radio>
                    </Radio.Group>
                  </div>
                </div>
                <ul className="table">
                  {new Array(10).fill(1).map((t, i) => {
                    return (
                      <li>
                        <p>申万宏源-晨会报告-211029</p>
                        <p>
                          <span>来自 申万宏源</span>
                          <span>2021-10-29 18:05</span>
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <div style={{ paddingBottom: "85px" }}>
                  <Pagination
                    className="ant-table-pagination ant-table-pagination-center"
                    current={pageInfo.pageNum}
                    pageSize={pageInfo.pageSize}
                    total={total}
                  ></Pagination>
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
