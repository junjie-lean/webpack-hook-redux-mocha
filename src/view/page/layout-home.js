/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:00:47
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2021-04-21 12:24:33
 */

import React, { useEffect, useState, useRef } from "react";
import "./../../style/index.scss";
import { Button, Input } from "antd";
import { useSelector } from "react-redux";
import Axios from "axios";
function Home(props) {
  const [count, setCount] = useState(1);
  const [res, setRes] = useState();
  const [isReady, setReadyState] = useState(false);
  const inputRef = useRef();

  const getData = (page) => {
    Axios.get("https://www.randomuser.me/api?page=" + page).then((res) => {
      setRes(res.data);
      setReadyState(true);
    });
  };

  useEffect(() => {
    getData(count);
  }, [count]);

  return (
    <div style={{ padding: 20 }}>
      <p>---------- {count}</p>
      <Button
        type="primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        计数器+1
      </Button>
      <br />
      <br />
      <br />
      {/* <Button
        type="primary"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        计数器-1
      </Button> */}
      <br />
      <br />
      {isReady ? (
        <div>
          {res?.results?.map((item) => {
            return (
              <div key={item.email}>
                <div>name:{item.name?.first}</div>
                <div>gender:{item.gender}</div>
              </div>
            );
          })}
        </div>
      ) : (
        "请求中.."
      )}
    </div>
  );
}

export default Home;
