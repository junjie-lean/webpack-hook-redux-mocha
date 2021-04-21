/*
 * @Author: junjie.lean
 * @Date: 2020-07-16 15:34:02
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2021-01-19 15:09:01
 */

import React, { useState, useEffect, useLayoutEffect } from "react";

export default (props) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  return (
    <div>
      <p>state:{state}</p>

      <br />
      <button
        onClick={() => {
          window.location.reload(true);
        }}
      >
        刷新
      </button>
    </div>
  );
};
