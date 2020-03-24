/*
 * @Author: junjie.lean
 * @Date: 2020-03-16 17:35:21
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-19 15:31:27
 */

/**
 *  跨项目数据交换相关
 *  非react技术栈实现,原生js实现,挂载在window对象上,项目内调用即可;
 */

/**
 * 在发送消息时候,请避免发送带有"react-devtools"/"webpack"此类的关键字
 * 避免导致触发异常消息
 */
function MessageEvent(callback) {
  let e = window.event || arguments.callee.caller.arguments[0];
  let data = e.data ? JSON.stringify(e.data) : "";
  let checkRegexp = new RegExp("(.*react-devtools.*)|(.*webpack.*)", "ig");
  if (data.match(checkRegexp) || data == "") {
    return false;
  } else {
    callback(e);
  }
}

export function registerMessageEvent(callback) {
  window.addEventListener("message", MessageEvent.bind(null, callback), false);
}

export function removeEventListener() {
  window.removeEventListener("message", MessageEvent, false);
}

export default function sendMessage() {
  console.log("Ready to register plugin about cross-platform!");
  window.targetWindowList = [];
  window.done = false;
  window.to = (url, data = {}, windowStyle = "") => {
    let targetName = "jf-web-app-hooks:" + Math.floor(Math.random() * 1e10);
    window.targetWindowList.push(window.open(url, targetName, windowStyle));
    window.targetWindowList[window.targetWindowList.length - 1].postMessage(
      data,
      "*"
    );
  };

  window.send = data => {
    window.targetWindowList[window.targetWindowList.length - 1].postMessage(
      data,
      "*"
    );
  };
}


