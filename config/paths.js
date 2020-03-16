/*
 * @Author: junjie.lean
 * @Date: 2020-03-16 14:56:43
 * @Last Modified by:   junjie.lean
 * @Last Modified time: 2020-03-16 14:56:43
 */

const { resolve } = require("path");

const appCwd = resolve(__dirname, "../");

const pathBasedRoot = path => resolve(appCwd, path);

module.exports.paths = {
  publicPath: "./",
  entry: pathBasedRoot("./src/index.js"),
  template: pathBasedRoot("./public/index.html"),
  buildPath: pathBasedRoot("./build")
};
