import React, { useState, useEffect } from "react";
import ReactLoding from "react-loading";
import { Button } from "antd";

export default function Loading(props) {
  const [change, setChange] = useState(false);

  const listener = [change];
  const {
    history: { push }
  } = props;

  useEffect(() => {
    console.log("componentDidMount and when click button");
  }, listener);

  const goto = () => {
    setChange(!change);
    props.history.push("/home");
  };

  let types = [
    "blank",
    "balls",
    "bars",
    "bubbles",
    "cubes",
    "cylon",
    "spin",
    "spinningBubbles",
    "spokes"
  ];
  return (
    <>
      <div
        style={{
          position: "fixed",
          background: "#282c34",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        className="lean-mask"
      >
        <div style={{ margin: "100px 100px" }}>
          <span style={{ color: "#fff", margin: "0 0 30px" }}>hello hooks</span>
          <br />
          <br />
          <br />
          <Button
            type="danger"
            ghost={true}
            onClick={goto}
            style={{ width: 120 }}
            onClick={() => {
              goto();
            }}
          >
            to home
          </Button>
          <br />
          <br />

          <ReactLoding type={"bars"} color="#c0c0c0" />
        </div>
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 62
          }}
        >
          <ReactLoding
            type={"bubbles"}
            color="#fff"
            width="35px"
            height="35px"
          />
        </div>
      </div>
    </>
  );
}
