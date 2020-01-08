/*
 * @Author: junjie.lean
 * @Date: 2019-12-19 15:41:40
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-01-08 14:32:47
 */

/**
 * webpack dev server config  list.
 */
const path = require("path");

module.exports.setDevServer = function(defaultConfig = {}) {
  let devConfig = {
    ...defaultConfig,
    contentBase: path.join(__dirname, "..", "public"),
    port: require("./../package").port,
    hot: true,
    watchContentBase: true,
    watchOptions: {
      ignored: path.join(__dirname, "..", "node_modules")
    },
    publicPath: "/",
    inline: true,
    quiet: true,
    noInfo: true,
    lazy: false,
    overlay: false,
    compress: true, //gzip
    host: "0.0.0.0",
    // stats: defaultConfig.stats,
    index: "index.html",
    // clientLogLevel: "none",
    historyApiFallback: {
      disableDotRule: true
    },
    open: true,
    openPage: `http://localhost:${require("./../package").port}`,
    after: () => {
      console.log("Server start up by Webpack-dev-server");
    }
  };

  return devConfig;
};
