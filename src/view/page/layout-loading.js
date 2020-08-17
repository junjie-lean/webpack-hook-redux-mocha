/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:00:34
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-17 10:57:52
 */

import ReactLoading from "react-loading";
import React, { useEffect } from "react";

export default function Loading(props) {
  useEffect(() => {
    setTimeout(() => {
      props.history.push("/home");
    }, 3000);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          background: "#282c34",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        className="lean-mask"
      >
        <div style={{ margin: "100px 100px" }}>
          <span style={{ color: "#fff", margin: "0 0 30px" }}>
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />

          <ReactLoading type={"bars"} color="#c0c0c0" />
        </div>
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 62,
          }}
        >
          <ReactLoading
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
