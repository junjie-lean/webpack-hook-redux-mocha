/*
 * @Author: junjie.lean
 * @Date: 2020-03-17 09:52:08
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-17 14:25:50
 */

import zhCN from "antd/lib/locale-provider/zh_CN";
import RouterRelation from "../router/router-index";
import PerformanceMonitor from "./public-monitor";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducers from "../../redux/index.reducer";
import {
  registerMessageEvent,
  removeMessageEvent
} from "../../util/plugin-cross-platform";

const store = createStore(allReducers, applyMiddleware(thunk));

export default function App() {
  useEffect(() => {
    //注册postMessage事件监听
    let receiveMessageCallBack = receiveMessageObject => {
      console.log(
        `receive a new massage from ${receiveMessageObject.origin}:`,
        receiveMessageObject.data
      );
    };
    registerMessageEvent(receiveMessageCallBack);
    return () => {
      //移除postMessage事件监听
      removeMessageEvent();
    };
  }, []);

  return (
    <PerformanceMonitor>
      <Antd.ConfigProvider Local={zhCN}>
        <Provider store={store}>
          <RouterRelation />
        </Provider>
      </Antd.ConfigProvider>
    </PerformanceMonitor>
  );
}
