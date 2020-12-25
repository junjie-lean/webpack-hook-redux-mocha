/*
 * @Author: junjie.lean
 * @Date: 2020-07-16 15:34:02
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-12-25 16:02:20
 */

import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSyncState } from "./../../hooks/useSyncState";
import { Button } from "antd";

export default withRouter(() => {
  const [a, b] = useState(1);
  const clickHandle = () => {
    useSyncState(a + 1, b).then((newA) => {
      console.log(newA);
    });
  };
  return (
    <div>
      <Button onClick={clickHandle}>{a}</Button>
    </div>
  );
});
