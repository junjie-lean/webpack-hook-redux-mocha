/*
 * @Author: junjie.lean
 * @Date: 2019-12-19 13:22:01
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-06-01 13:32:21
 */

/**
 * webpack moduleLoader config list
 */

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path");

module.exports.setDefaultModule = function (config = {}, loaderArr = []) {
  let rules = [...loaderArr];
  let { mode } = config;

  const rawLoader = {
    test: /\.(txt|svg)$/i,
    use: "raw-loader",
    // include: resolve(__dirname, "..", "src"),
  };

  const babelLoader = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        compact: mode === "production",
        presets: [
          //此配置如果修改，可能需要同步修改happyPack插件的配置,以优化打包构建效率
          ["@babel/react"],
          [
            "@babel/env",
            {
              // spec: false, //是否启用更为规范的转换
              // debug: false,
              // useBuiltIns: "entry", //入口文件出注入polyfill
              useBuiltIns: "usage", //按需加入polyfill
              targets: {
                chrome: "58",
                ie: "11",
              },
              corejs: "3",
            },
          ],
        ],
        plugins: [
          [
            "import",
            {
              libraryName: "antd",
              libraryDirectory: "es",
              // style: "css"
              style: true,
            },
            "antd",
          ],
          [
            "import",
            {
              libraryName: "lodash",
              libraryDirectory: "",
              camel2DashComponentName: false,
            },
            "lodash",
          ],
          ["@babel/plugin-proposal-class-properties", { loose: false }],
          [
            "module-resolver",
            {
              extensions: [".js", ".jsx"],
            },
          ],
          [
            "@babel/plugin-transform-runtime",
            {
              corejs: "3",
            },
          ],
          [
            "@babel/plugin-transform-modules-commonjs",
            {
              allowTopLevelThis: true,
            },
          ],
          [
            "@babel/plugin-proposal-decorators",
            {
              legacy: true,
            },
          ],
          "@babel/plugin-syntax-dynamic-import",
        ],
      },
    },
  };

  const styleLoader = {
    test: /\.(scss|css)$/i,
    use: [
      "style-loader",
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: "../../",
          hmr: process.env.NODE_ENV == "development",
          reloadAll: true,
          esModule: true,
        },
      },
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: { auto: true },
        },
      },
      {
        loader: "sass-loader",
      },
    ],
  };

  const urlLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 1000 * 1024 * 2, //unit:byte,under this value to transform to base64 code.
          name: "./static/media/pic/[name].[hash:8].[ext]",
          // name: "[name].[hash:8].[ext]",
        },
      },
    ],
    include: resolve(__dirname, "..", "src"),
  };

  const fontLoader = {
    test: /.(ttf|eot|woff|woff2)$/i, // ttf|eot|svg|woff|woff2
    use: [
      {
        loader: "url-loader",
        options: {
          name: "[name].[hash:8].[ext]",
          limit: 1000 * 1024,
          name: "./static/media/font/[name].[hash:8].[ext]",
        },
      },
    ],
    include: resolve(__dirname, "..", "src"),
  };

  const lessLoader = {
    test: /\.less$/i,
    // include: [/[\\/]node_modules[\\/].*antd/],
    use: [
      MiniCssExtractPlugin.loader, // replaces extract text plugin in webpack 4
      "css-loader",
      {
        loader: "postcss-loader",
        options: {
          config: {
            path: "./config/postcss.config.js",
          },
        },
      },
      {
        loader: "less-loader",
        options: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    ],
  };

  const markdownLoader = {
    test: /\.md$/,
    use: [
      {
        loader: "html-loader",
      },
      {
        loader: "markdown-loader",
      },
    ],
  };

  const happypackLoader = {
    test: /.jsx?$/,
    use: "happypack/loader?id=happyPackerJs",
    exclude: /node_modules/,
  };

  rules.push(
    // svgrLoader,
    styleLoader,
    lessLoader,
    rawLoader,
    urlLoader,
    fontLoader,
    // markdownLoader,
    babelLoader,
    happypackLoader
  );

  return { rules };
};
