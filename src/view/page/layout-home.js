import "./../../style/index.scss";
import { test_ac } from "../../redux/index.reducer";
import { connect, useSelector, useDispatch } from "react-redux";

import Hooks from "./../components/content-hook";

function Home(props) {
  const {
    test_reducer: { data }
  } = useSelector(state => state);

  return (
    <div>
      easy design,happy coding.
      <br />
      <Hooks />
    </div>
  );
}

export default connect(store => store, { test_ac })(Home);
