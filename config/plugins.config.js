/*
 * @Author: junjie.lean
 * @Date: 2019-12-19 13:22:01
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-10 10:54:31
 */

/**
 * webpack plugins config list
 */

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");
const HappyPack = require("happypack");
const os = require("os");
const threadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const package = require("./../package.json");
module.exports.setDefaultPlugins = function (config = {}, defaultPlugin = []) {
  let plugins = [...defaultPlugin];
  let { debugLevel, mode, isOpenAnalyze } = config;

  if (mode === "production") {
    //打包清空文件夹插件
    plugins.push(new CleanWebpackPlugin());
  }

  //自动引入
  // plugins.push(
  //   new webpack.ProvidePlugin({
  //     React: "react",
  //     F: ["react", "Fragment"],
  //     useEffect: ["react", "useEffect"],
  //     useMemo: ["react", "useMemo"],
  //     useState: ["react", "useState"],
  //     useLayoutEffect: ["react", "useLayoutEffect"],
  //     useCallback: ["react", "useCallback"],
  //     useRef: ["react", "useRef"],
  //     _: "lodash",
  //     // Antd: "antd",
  //   })
  // );

  //hmr热更插件
  // plugins.push(
  //   new webpack.HotModuleReplacementPlugin({
  //     multiStep: true,
  //   })
  // );

  // new webpack.DllReferencePlugin({
  //   context: __dirname,
  //   manifest: require("./../public/manifest.json"),
  // });

  //bundleAnalyze
  if (isOpenAnalyze) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerHost: "localhost", //unuse
        analyzerPort: "10000", //unuse
        analyzerMode: "static",
        reportFilename: "analyze/bundleAnalyzeReport.html",
      })
    );
  }

  //html模板插件
  plugins.push(
    new HtmlWebpackPlugin({
      title: "webpack-app",
      template: "public/index.html",
    })
  );

  if (mode !== "development") {
    //多线程式编译模式
    plugins.push(
      new ParallelUglifyPlugin({
        sourceMap: debugLevel > 0,
        uglifyJS: {
          output: {
            comments: false,
            beautify: false,
          },
        },
      })
    );

    //打包进度可视化
    plugins.push(
      new ProgressBarPlugin({
        format:
          package.projectName +
          "  Now Building: [:bar] " +
          chalk.green.bold(":percent") +
          " (:elapsed seconds)",
        clear: false,
      })
    );
  }

  //css文件打包插件
  plugins.push(
    new MiniCssExtractPlugin({
      filename: "static/css/index.css",
      ignoreOrder: false,
    })
  );

  //多线程处理js插件
  //可也以用来处理less、sass等预编译处理器
  //如果项目较简单，对构建项目的速度提升不大
  plugins.push(
    new HappyPack({
      id: "happyPackerJs",
      // debug: true,
      verbose: false,
      loaders: [
        {
          loader: "babel-loader",
          query: {
            presets: ["@babel/react", "@babel/env"],
          },
        },
      ],
      threadPool: threadPool,
    })
  );

  return plugins;
};
