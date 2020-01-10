/*
 * @Author: junjie.lean
 * @Date: 2020-01-10 11:06:12
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-01-10 11:22:44
 */

/**
 * 启动脚本
 */

const cp = require("child_process");

// console.log(process.env.NODE_ENV);

// webpack-dev-server --config ./config/webpack.base.config --color
let startDevServer = cp.spawn(
  "npx",
  ["webpack-dev-server", "--config", "./config/webpack.base.config", "--color"],
  {
    ...process.env
  }
);

startDevServer.stdout.on("data", data => {
  console.log(data.toString());
});

startDevServer.stderr.on("data", data => {
  console.log(data.toString());
});

startDevServer.on("close", code => {
  console.log(code);
});
