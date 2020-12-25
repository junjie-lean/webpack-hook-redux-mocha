/*
 * @Author: junjie.lean
 * @Date: 2020-11-26 09:38:33
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-26 17:28:40
 */

class ConnectionIframe {
  constructor(props) {
    this.arr = new Array();
    this.set = new Set();
    this.map = new Map();
    this.object = new Object();
    this.sb = Symbol("symbol");
  }

  consoleThis() {
    console.log(this);
  }

  operationArray() {
    for (let i = 0; i < 3; i++) {
      this.arr.push(i);
      this.set.add(i);
    }
    this.arr.push({ "new:": 1 });
    this.set.add({ "new set:": 1 });
    return this;
  }

  operationObject() {
    for (let v of this.set) {
      this.object[v] = "unset";
      this.map.set(v, "unset");
    }
    this.map.set(this.sb, "unset");
    return this;
  }
}






