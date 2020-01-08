/*
 * @Author: junjie.lean
 * @Date: 2019-12-19 15:04:22
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-12-24 16:27:16
 */
import React from "react";
import { Button } from "antd";
import { withRouter } from "react-router-dom";
function EventMock(props) {
  const gowith = url => {
    props.history.push(url);
  };
  return (
    <div>
      <Button
        onClick={() => {
          gowith("/home");
        }}
      >
        to home
      </Button>
      <Button
        onClick={() => {
          gowith("/echarts");
        }}
      >
        to echarts
      </Button>
      <Button
        onClick={() => {
          gowith("/hooks");
        }}
      >
        to hooks
      </Button>
      <Button
        onClick={() => {
          gowith("/loading");
        }}
      >
        to loading
      </Button>
    </div>
  );
}

export default withRouter(EventMock);
