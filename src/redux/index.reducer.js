import { combineReducers } from "redux";

//模拟ajax请求
const getAsyncData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2500);
  });
};

export const test_ac = act => {
  return async dispatch => {
    let data = await getAsyncData();
    dispatch({
      type: act,
      data
    });
  };
};

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
