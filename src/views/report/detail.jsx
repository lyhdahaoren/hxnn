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
          display: -webkit-box; //将元素设为盒子伸缩模型显示
          -webkit-box-orient: vertical; //伸缩方向设为垂直方向
          -webkit-line-clamp: 2; //超出3行隐藏，并显示省略号
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
                完美世界（002624）：《幻塔》终测吸睛，期待上线助增长-动态点评211114
              </p>
              <div className="tag">
                <p className="resource">
                  <span>华夏证券</span>
                  <section>行业动态</section>
                  <section>休闲服务</section>
                </p>
                <p className="createUser">
                  <img src={user} alt="" />
                  朱珺 周钊
                </p>
                <p className="stock">个股：完美世界</p>
                <p className="level">评级：买入</p>
              </div>
              <p className="time">2021-11-17</p>
              <p className="pdf">
                <img src={pdf} alt="" />
                打开原文PDF
              </p>
              <div className="innerhtml">
                10月国内疫情控制环比改善，受益于“十一”黄金周，民航供需环比继续增长，客座率环比小幅提升；三大航中，南方航空客座率领先。10月上旬国内疫情较9月进一步缓和，五家上市航司（中国国航、东方航空、南方航空、春秋航空、吉祥航空）国内总供给需求环比各升8.2%/10.3%（较19年同期仍各降2.1
                个百分点/18.9个百分点），客座率环比上升1.3个百分点至70.1%（较19年同期下滑14.6个百分点）。全球疫苗接种工作有序推进，美国在内的部分国家已逐步放松国际线政策，我国国际及地区航线仍持续“五个一政策”，10月国际线供给、需求环比各+4.9%/-14.8%（较19年同期仍各削减95.2个百分点/97.1个百分点）。三大航（国航、东航、南航）10月国内线总供给、需求较19年同期各降5.8个百分点/23.2个百分点，客座率较19年同期下挫15.6个百分点，其中南航国内客座率领先国航、东航各0.5/5.3个百分点。
                春秋、吉祥10月国内线客座率环比各上升0.4/3.3个百分点至85.2%/76.0%，较19年同期仍各下滑7.3/12.5个百分点。春秋航空、吉祥航空10月国内线供需环比分别各升1.7%/2.1%、9.1%/14.0%，客座率环比各上升0.4/3.3个百分点至85.2%/76%（较19年同期仍各下滑7.3/12.5个百分点）；根据吉祥航空2021年半年报，吉祥航空因其8至9月受制于主基地机场城市南京疫情影响基数较低，10月疫情缓和回暖明显。我们长期看好民营航司成长空间，一方面因其机队精简、经管效率强，短中期“内循环”下能较快实现以量换价，业绩率先稳步复苏；长期看后疫情时代运力扩张助力其提升基地市场份额助益业绩改善，根据吉祥航空2021
                年 10
                月主要运营数据公告，吉祥航空拥有6架宽体机提供业绩增长的弹性空间。
                11月初全国疫情仍在散发，中高风险地区升至百处，国内客运市场面临挑战。11月1日至14日，三大航运营主体（国航、东航、南航）日均执飞航班量较10月各下降46.4%/31.6%/36.8%，春秋、吉祥日均执飞量各降33.2%/23.5%。日均飞机利用率国航、东航、南航各为2.9/3.9/3.8小时/天，较上月各下降42.6%/30.7%/37.2%。吉祥日均飞机利用率降17.0%至7.3小时/天，春秋日均飞机利用率降31.2%至5.5小时/天。根据中共中央人民政府网，截至11月15日0时，全国中高风险地区升至百处，国内疫情反复显著阻碍Q4国内需求的恢复。
                关注航空板块投资机会。“加强针”已在全国多省展开接种，特效药研发进展顺利。短中期，在疫情得控的前提下，国内需求有望率先恢复增长，我们认为国内市场内在需求强劲且票价市场化释放定价空间，即使内循环下航司业绩亦有望显著提升。长期看，国际各国防疫政策已趋松动，考虑十四五运力增速收紧，航空有望迎来供不应求，盈利有望全面提升，关注航空板块投资机会。
                风险提示：汇率、油价波动、疫情不确定性等。
              </div>
            </div>
            <div className="recommand">
              <div className="item">
                <p className="item_label">研究报告</p>
                <div className="item_list">
                  {reportList.map((t, i) => {
                    return <p key={t.value}>{t.label}</p>;
                  })}
                </div>
              </div>
              <div className="item">
                <p className="item_label">推荐阅读</p>
                <div className="item_column">
                  {new Array(5).fill(1).map((t, i) => {
                    return (
                      <p key={i}>
                        贵州心悠然酒业将于9月25日悠然酒业将于9月25日日悠然酒业将于9月25日日悠然酒业将于9月25日日悠然酒业将于9月25日
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
