/*
 * @Author: junjie.lean
 * @Date: 2020-03-13 15:31:34
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-16 20:37:30
 */
import { combineReducers } from "redux";

const test_reducer = (state, action) => {
  switch (action.type) {
    case "test": {
      return {
        data: "hello"
      };
    }

    default: {
      return {
        data: "world"
      };
    }
  }
};


export default combineReducers({
  test_reducer
});
