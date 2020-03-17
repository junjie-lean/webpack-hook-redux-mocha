/*
 * @Author: junjie.lean
 * @Date: 2020-03-11 15:19:52
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-16 20:45:55
 */

import { test_ac } from "./../../redux/actions.js";
import { connect } from "react-redux";


function Hooks(props) {
  useEffect(() => {
    console.log("props:", props);
  }, []);
  const [test, setTest] = useState(props.test_reducer.data);
  return (
    <F>
      <br />
      <br />
      <br />
      <h3>hooks</h3>
      <div>{test}</div>
      <br />
      <br />
      <Antd.Button type="primary" onClick={test_ac}>
        ??
      </Antd.Button>
      <br />
    </F>
  );
}

export default connect(store => store, { test_ac })(Hooks);
