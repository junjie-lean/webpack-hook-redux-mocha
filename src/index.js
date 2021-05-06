/*
 * @Author: junjie.lean
 * @Date: 2020-01-09 14:17:37
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2021-04-27 10:51:12
 */

import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./view/public/public-provider";
// import svgs from "!!raw-loader!./media/svg/symbol-defs.svg";

// document.querySelector("#svg").innerHTML += svgs;



function render(props = {}) {
  const DOM = document.getElementById("react-hook-app");
  ReactDOM.render(<App {...props} />, DOM);
}

if (!window.__POWERED_BY_QIANKUN__) {
  document.title = "jf-web-app-hook";
  render();
}

export async function bootstrap() {
  //   console.log("作为子应用初始化的时候调用一次,后续不再调用!");
}

/**
 * 应用每次进入都会调用 mount 方法，在这里触发应用的渲染方法
 */
export async function mount(props) {
  props.onGlobalStateChange((state) => {
    // console.log("global state change:", state);
    render({ ...props, globalState: state });
  });
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  const DOM = document.getElementById("react-hook-app");
  ReactDOM.unmountComponentAtNode(DOM);
}

/**
 * 可选生命周期钩子，仅在父组件使用 loadMicroApp 方式加载本应用时生效
 */
export async function update(props) {
  console.log("update props", props);
}
