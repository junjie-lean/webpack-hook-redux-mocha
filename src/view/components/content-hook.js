/*
 * @Author: junjie.lean
 * @Date: 2020-03-11 15:19:52
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-25 17:16:36
 */

import { useSelector, useDispatch } from "react-redux";
import Antd from 'antd';
export default function Hooks(props) {
  const dispatch = useDispatch();
  const reducerData = useSelector(state => {
    return state.test_reducer;
  });
  const [a, setA] = useState(1);

  let req = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }).then(() => {
      return {
        data: "hook sync redux, (ajax res data)"
      };
    });
  };

  const test_ac = async () => {
    // dispatch({type:""})
    let res = await req();
    dispatch({ type: "test", data: res.data });
    setA(2);
    console.log(a);
  };

  return (
    <div>
      <br />
      <h3>hello {reducerData.data}</h3>
      <br />
      <Antd.Button type="primary" onClick={test_ac} size={"large"}>
        hook dispatch
      </Antd.Button>
      <br />
    </div>
  );
}
