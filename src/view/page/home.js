import React, { useState, useEffect, useReducer, useContext } from "react";
import { Button } from "antd";
import "./../../style/index.scss";
import Event from "./../components/event";
import { test_ac } from "./../../redux/index.reducer";
import { connect, useSelector, useDispatch } from "react-redux";
import { Input } from "antd";

import useKeyPress from "./../../hooks/useKeyPress";

function Home(props) {
  const { history } = props;
  const {
    test_reducer: { data }
  } = useSelector(state => state);

  const [inputVal, setInputVal] = useState("");
  const [inputValList, setInputValList] = useState([]);

  const isEnter = useKeyPress(13);
  const isEsc = useKeyPress(27);

  const inputChange = ({ target: { value } }) => {
    setInputVal(value);
  };

  useEffect(() => {
    if (isEnter) {
      // console.log("is enter press");
      let arr = inputValList;
      if (inputVal !== "") {
        arr.push(inputVal);
      }
      setInputValList(arr);
      setInputVal("");
    }
    if (isEsc) {
      setInputVal("");
    }
  });

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
      <br />
      <br />
      <Input onChange={inputChange} value={inputVal} />
      <br />
      <div>
        {inputValList.map((item, index) => {
          return (
            <span key={index}>
              {item} {"       "}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default connect(store => store, { test_ac })(Home);
