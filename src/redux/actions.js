//模拟ajax请求
const getAsyncData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2500);
  });
};

export const test_ac = () => {
  console.log(123123123);
  return async dispatch => {
    let data = await getAsyncData();
    dispatch({
      type: "test",
      data
    });
  };
};
