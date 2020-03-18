/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:02:37
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-18 11:03:50
 */
import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { Button } from "antd";

export default function Loading(props) {
  const goto = () => {
    props.history.push("/home");
  };

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

          <ReactLoading type={"bars"} color="#c0c0c0" />
        </div>
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 62
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
