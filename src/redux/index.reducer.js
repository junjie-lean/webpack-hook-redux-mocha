import { combineReducers } from "redux";

const getAsyncData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2500);
  });
};

export const test_ac = async () => {
  let data = await getAsyncData();
  return dispatch =>
    dispatch({
      type: "test",
      data
    });
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
