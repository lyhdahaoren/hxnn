import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import React from "react";
// import Cookie from "js-cookie";

// 路由组件
function RouteWithSubRoutes(route) {
  const Com = route.component;
  const c = route.children;
  const { locaPath } = route;
  return (
    <Route
      path={route.path}
      render={(props) => {
        // const token = Cookie.get("token");
        // console.log(token);
        // return token ? (
        return (
          <>
            <Com itemList={c} {...route} {...props} />
            {route.Redirect && locaPath === route.path ? (
              <Redirect to={route.Redirect}></Redirect>
            ) : null}
          </>
        );
        // ) : null;
      }}
      exact={route.exact || false}
    ></Route>
  );
}

class BrowerRoute extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { routesList = [], location } = this.props;
    console.log(routesList);
    return routesList.length ? (
      <Switch>
        {routesList.map((route, i) => {
          return (
            <RouteWithSubRoutes
              key={i}
              locaPath={location.pathname}
              {...route}
            />
          );
        })}
        {/* 404页面*/}
        {/* <Route component={noMatch} /> */}
      </Switch>
    ) : null;
  }
}

export default withRouter(BrowerRoute);
