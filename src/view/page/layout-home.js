import "./../../style/index.scss";
import { test_ac } from "../../redux/index.reducer";
import { connect, useSelector, useDispatch } from "react-redux";

import Hooks from "./../components/content-hook";

function Home(props) {
  const {
    test_reducer: { data }
  } = useSelector(state => state);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh"
        }}
      >
        <a href="https://github.com/kelseyhightower/nocode" target="_blank">
          Write nothing, deploy nowhere.
        </a>
      </div>
      <br />
      {/* <Hooks /> */}
      {/*<Antd.Button type="primary" onClick={props.history.goBack}>
        回退
      </Antd.Button> */}
    </>
  );
}

export default connect(store => store)(Home);
