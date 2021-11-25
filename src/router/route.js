import Index from "../views/index";
import Roport from "../views/report";
import RoportDetail from "../views/report/detail";
const route = [
  {
    name: "首页",
    path: "/",
    exact: true,
    component: Index,
  },
  {
    name: "机构研报",
    path: "/report",
    exact: true,
    component: Roport,
  },
  {
    name: "机构研报详情",
    path: "/report/detail/:id",
    exact: true,
    component: RoportDetail,
  },
];

export default route;
