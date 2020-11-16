/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:00:47
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-16 10:57:09
 */

import React, { useEffect, useState, useRef } from "react";
import "./../../style/index.scss";
import { Button } from "antd";
import { useSelector } from "react-redux";

function Home(props) {
  const [stringSource] = useState("  Write nothing, deploy nowhere...");
  const [string, setStr] = useState("");

  let timer = useRef();

  useEffect(() => {
    let b = 0;
    timer.current = setInterval(() => {
      setStr(stringSource.slice(0, b + 1));
      b++;
      if (b == stringSource.length) {
        clearInterval(timer.current);
      }
    }, 150);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  let reduxProps = useSelector((state) => state);

  useEffect(() => {
    console.log(reduxProps);
  }, []);

  return (
    <div className="lean-homeStyle">
      <div>
        <Button type="link" style={{ paddingRight: 2, fontSize: 32 }}>
          <a href="https://github.com/kelseyhightower/nocode" target="_blank">
            {string}
          </a>
        </Button>
        <span className="lean-homeCursor"> | </span>
      </div>
    </div>
  );
}

export default Home;
