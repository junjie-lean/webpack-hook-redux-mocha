/*
 * @Author: junjie.lean
 * @Date: 2020-06-01 09:44:22
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-06-18 17:50:35
 */

import React from "react";
import { withRouter } from "react-router-dom";


export default withRouter((props) => {

  return (
    <React.Fragment>
      <div className="lean-fontList">
        <span>默认字体:国家考试院,ABCDEFG-abcdefg-1234567890</span>
        <br />
        <span style={{ fontFamily: "FZY4K" }}>
          FZY4K:国家考试院,ABCDEFG-abcdefg-1234567890
      </span>
        <br />
        <span style={{ fontFamily: "BGOTHL" }}>
          BGOTHL:国家考试院,ABCDEFG-abcdefg-1234567890
      </span>
      </div>
    </React.Fragment>
  );
});
