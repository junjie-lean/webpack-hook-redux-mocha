/*
 * @Author: junjie.lean
 * @Date: 2020-03-17 09:52:08
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-06-09 17:24:35
 */

import React, { createContext } from "react";
import zhCN from "antd/lib/locale-provider/zh_CN";
import RouterRelation from "../router/router-index";
import PerformanceMonitor from "./public-monitor";
import Antd from "antd";
// import thunk from "redux-thunk";
// import {
//   registerMessageEvent,
//   removeMessageEvent,
// } from "../../util/plugin-cross-platform";

import { setConfig } from "./../../util/request";

setConfig(
  "http://10.20.5.191:12210/issre",
  "1E1FEECBD5A04CB2AD9AA1312766812F",
  "51010000010001"
);

// public/heartbeat;
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
