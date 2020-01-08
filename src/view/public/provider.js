import React, { createContext, useEffect } from "react";
import { ConfigProvider, message } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import RouterRelation from "../router/router";
import PerformanceMonitor from "./monitor";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducers from "../../redux/index.reducer";

const store = createStore(allReducers, applyMiddleware(thunk));

export default function App() {
  return (
    <PerformanceMonitor>
      <ConfigProvider Local={zhCN}>
        <Provider store={store}>
          <RouterRelation />
        </Provider>
      </ConfigProvider>
    </PerformanceMonitor>
  );
}
