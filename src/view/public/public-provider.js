/*
 * @Author: junjie.lean
 * @Date: 2020-03-17 09:52:08
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-07-28 10:01:59
 */

import React, { createContext } from "react";
import zhCN from "antd/lib/locale-provider/zh_CN";
import RouterRelation from "../router/router-index";
import PerformanceMonitor from "./public-monitor";
import Antd from "antd";

import { setConfig } from "./../../util/request";

export const Context = createContext({});

export default function App() {
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
        <Context.Provider value={store}>
          <RouterRelation />
        </Context.Provider>
      </Antd.ConfigProvider>
    </PerformanceMonitor>
  );
}
