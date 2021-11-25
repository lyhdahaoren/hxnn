import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import Main from "./layout/main";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: #f4f5f7;
  }
  p {
    margin-bottom: 0;
  }
  li {
    list-style: none;
  }
  .maxContrain {
    max-width: 1160px;
    margin: 0 auto;
  }
`;

ReactDOM.render(
  <>
    <Global />
    <Main></Main>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
