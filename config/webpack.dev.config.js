/*
 * @Author: junjie.lean
 * @Date: 2019-12-19 15:41:40
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-07-27 10:49:54
 */

/**
 * webpack dev server config  list.
 */
const path = require("path");
const openBrowser = require("react-dev-utils/openBrowser");
// const clearConsole = require("react-dev-utils/clearConsole");

module.exports.setDevServer = function (defaultConfig = {}) {
  let devConfig = {
    ...defaultConfig,
    contentBase: path.join(__dirname, "..", "public"),
    port: require("./../package").port,
    hot: true,
    watchContentBase: true,
    watchOptions: {
      ignored: path.join(__dirname, "..", "node_modules"),
    },
    publicPath: "/",
    inline: true,
    quiet: true,
    noInfo: true,
    lazy: false,
    overlay: false,
    compress: true, //gzip
    host: "0.0.0.0",
    stats: defaultConfig.stats,
    index: "index.html",
    clientLogLevel: "none",
    historyApiFallback: {
      disableDotRule: true,
    },
    open: false,
    after: () => {
      setTimeout(() => {
        let url = `http://localhost:${require("./../package").port}`;
        // clearConsole();
        console.log(
          `\n\n\n\tServer start up @\`http://localhost:${
            require("./../package").port
          }\``
        );
        openBrowser(url);
      }, 0);
    },
  };

  return devConfig;
};
