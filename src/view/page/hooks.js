import React, { useState, useEffect, useMemo } from "react";
import Echarts from "./echarts";
import Event from "./../components/event";
export default function Hooks() {
  let [count, setCount] = useState(1);
  let [val, setVal] = useState("");

  let expensive = useMemo(() => {
    console.log("执行计算函数");
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  return (
    <div>
      use memo:
      <br />
      <h4>
        count:{count} --- val:{val} --- {expensive}
      </h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <br />
        <br />
        <input value={val} onChange={event => setVal(event.target.value)} />
      </div>
      <Event />
    </div>
  );
}
