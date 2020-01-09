import React, { useState, useEffect, useReducer, useContext } from "react";
import { Button } from "antd";
import "./../../style/index.scss";
import Event from "./../components/event";
import { test_ac } from "./../../redux/index.reducer";
import { connect, useSelector, useDispatch } from "react-redux";

function Home(props) {
  const { history } = props;
  const {
    test_reducer: { data }
  } = useSelector(state => state);

  const dispatch = useDispatch();
  console.log(props);
  return (
    <div className="screenshot-zone">
      <br />
      <hr />
      <br />
      {data}
      <br />
      <Button
        type="primary"
        onClick={() => {
          props.test_ac();
          // dispatch({type:"test"})
        }}
      >
        ac
      </Button>
      <br />
      <br />
      <br />

      <Button
        onClick={() => {
          history.push("/loading");
        }}
      >
        BACK
      </Button>
      <hr />
      <br />
      <Event />
    </div>
  );
}

export default connect(store => store, { test_ac })(Home);
