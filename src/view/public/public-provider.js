/*
 * @Author: junjie.lean
 * @Date: 2020-03-17 09:52:08
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-05-29 15:13:18
 */

import React, { createContext } from "react";
import zhCN from "antd/lib/locale-provider/zh_CN";
import RouterRelation from "../router/router-index";
import PerformanceMonitor from "./public-monitor";
import Antd from "antd";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import allReducers from "../../redux/index.reducer";
// import {
//   registerMessageEvent,
//   removeMessageEvent,
// } from "../../util/plugin-cross-platform";
// const store = createStore(allReducers, applyMiddleware(thunk));

export const Context = createContext({});

export default function App() {
  // useEffect(() => {
  //   //注册postMessage事件监听
  //   let receiveMessageCallBack = (receiveMessageObject) => {
  //     console.log(
  //       `receive a new massage from ${receiveMessageObject.origin}:`,
  //       receiveMessageObject.data
  //     );
  //   };
  //   registerMessageEvent(receiveMessageCallBack);
  //   return () => {
  //     //移除postMessage事件监听
  //     removeMessageEvent();
  //   };
  // }, []);

  const store = {
    setValue: (key, value) => {
      store[key] = value;
    },
    deleteKey: (key) => {
      delete store[key];
    },
  };

  return (
    <PerformanceMonitor>
      <Antd.ConfigProvider locale={zhCN}>
        <Context.Provider store={store}>
          <RouterRelation />
        </Context.Provider>
      </Antd.ConfigProvider>
    </PerformanceMonitor>
  );
}
