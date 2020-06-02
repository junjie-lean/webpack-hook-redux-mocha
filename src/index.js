/*
 * @Author: junjie.lean
 * @Date: 2020-01-09 14:17:37
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-04-21 20:47:10
 */

// import "core-js";
import React from "react";
import { render } from "react-dom";
import App from "./view/public/public-provider";
// import PCP from "./util/plugin-cross-platform";
import svgs from "!!raw-loader!./media/svg/symbol-defs.svg";
const DOM = document.getElementById("app");
document.title = "jf-web-app-hook";
document.querySelector("#svg").innerHTML += svgs;
render(<App />, DOM);

//跨项目通讯相关,考务项目需求,非考务项目或非必要需求可以注释!
// PCP();
