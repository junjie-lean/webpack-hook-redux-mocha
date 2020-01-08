/*
 * @Author: junjie.lean
 * @Date: 2019-12-24 17:29:06
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-12-24 17:34:29
 */

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    react: [
      "react",
      "react-dom",
      "react-redux",
      "react-router-dom",
      "echarts",
      "antd",
      "lodash"
    ]
  },
  output: {
    filename: "[name].dll.js",
    path: path.join(__dirname, "..", "public"),
    // library必须和后面dllplugin中的name一致
    library: "[name]_dll_[hash]"
  },
  plugins: [
    // 接入 DllPlugin
    new webpack.DllPlugin({
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
      name: "[name]_dll_[hash]",
      // 描述动态链接库的 manifest.json 文件输出时的文件名称
      path: path.join(__dirname, "..", "public", "manifest.json")
    })
  ]
};
