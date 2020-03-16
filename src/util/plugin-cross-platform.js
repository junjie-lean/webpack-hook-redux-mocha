/*
 * @Author: junjie.lean
 * @Date: 2020-03-16 17:35:21
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-16 22:06:15
 */

/**
 *  跨项目数据交换相关
 *  非react技术栈实现,原生js实现,挂载在window对象上,项目内调用即可;
 */

export default function() {
  console.log("Ready to register plugin about cross-platform!");
  //sendSide

  let targetWindow;
  window.done = false;
  window.to = (url, data = {}, windowStyle = "") => {
    let targetName = "jf-web-app" + Math.floor(Math.random() * 1e10);
    targetWindow = window.open(url, targetName, windowStyle);
    console.log("before send message:", data);
    targetWindow.postMessage(data, "*");
  };

  window.send = data => {
    console.log("before send message:", data);
    targetWindow.postMessage(data, "*");
  };

  //receiveSide
  const receiveMessage = e => {
    if (!e || window.done) {
      // return;
    } else {
      console.log("触发事件:", e, e.data);
      window.done = true;
    }
  };
  window.addEventListener("message", receiveMessage, false);
}
// 链接: https://pan.baidu.com/s/1tUs2rPMUKcutvWWZX20wdg 提取码: f6qt
