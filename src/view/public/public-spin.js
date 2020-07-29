/*
 * @Author: junjie.lean
 * @Date: 2020-07-28 16:40:34
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-07-28 16:45:26
 */

import React from "react";
import { withRouter } from "react-router-dom";
import { Spin } from "antd";
export default withRouter((props) => {
  const { isLoading, children } = props;
  return isLoading ? <Spin /> : children;
});
