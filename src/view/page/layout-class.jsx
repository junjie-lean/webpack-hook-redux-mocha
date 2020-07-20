/*
 * @Author: junjie.lean
 * @Date: 2020-07-16 15:34:02
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-07-20 09:47:50
 */

import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  // testfoo = () => {
  //   console.log("箭头函数");
  // };

  render() {
    return (
      <div>
        <button onClick={this.testfoo}>test</button>
      </div>
    );
  }
}
