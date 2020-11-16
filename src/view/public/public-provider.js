/*
 * @Author: junjie.lean
 * @Date: 2020-03-17 09:52:08
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-16 10:40:12
 */

import React from "react";
import zhCN from "antd/lib/locale-provider/zh_CN";
import RouterRelation from "../router/router-index";
import ProfilerMoniter from "./public-profile";
import { ConfigProvider } from "antd";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./../../redux/index.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storageLocal from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { PersistGate } from "redux-persist/integration/react";

const ContextProvider = (props) => {
  //redux同步机制
  //利用redux-persist持久化本地数据,使刷新页面后,redux状态值不丢失.
  const persistConfig = {
    key: "root",
    storage: storageSession,
    // storage: storageLocal,
    stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
  };
  const myPersistReducer = persistReducer(persistConfig, reducers);

  //redux中间件处理.
  const middlewares = [thunk];
  const enhancers = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(...[enhancers]);

  //修改store生成方式
  const store = createStore(myPersistReducer, composedEnhancers);
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <ProfilerMoniter id="react-app-moniter-root" open={false}>
        <ContextProvider>
          <RouterRelation />
        </ContextProvider>
      </ProfilerMoniter>
    </ConfigProvider>
  );
}
