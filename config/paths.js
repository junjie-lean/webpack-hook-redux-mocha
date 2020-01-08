const { resolve } = require("path");

const appCwd = resolve(__dirname, "../");

const pathBasedRoot = path => resolve(appCwd, path);

module.exports.paths = {
  publicPath: "./",
  entry: pathBasedRoot("./src/index.js"),
  template: pathBasedRoot("./public/index.html"),
  buildPath: pathBasedRoot("./build")
};
