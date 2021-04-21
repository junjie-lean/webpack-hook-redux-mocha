/*
 * @Author: junjie.lean
 * @Date: 2020-12-29 09:55:58
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2021-01-06 13:09:02
 */

/**
 * 常用工具集
 */

/**
 * @description 从url里取对应的get参数
 * @param { String } key
 * @return { String } key => value
 */
export const getQueryString = (key) => {
  const query = {};
  location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (query[k] = v));
  return query[key];
};

/**
 * @description 判断变量的数据类型
 * @param { Any } value
 * @return { String } any one of typeof(value)
 */
export const typeOfValue = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
};

/**
 * @description 使js解释器阻塞 {timer} 毫秒
 * @param { Number } timer
 * @return null
 */
export const sleep = (timer) => {
  const now = performance.now();
  while (performance.now() - now < timer) {}
};

/**
 * @description 深复制一个对象
 * @param { Object or Array } obj
 */
export const deepClone = (obj) => {
  let clone = obj;
  if (obj && typeof obj === "object") {
    clone = new obj.constructor();
    Object.getOwnPropertyNames(obj).forEach(
      (prop) => (clone[prop] = deepClone(obj[prop]))
    );
  }
  return clone;
};
