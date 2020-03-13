/*
 * @Author: junjie.lean
 * @Date: 2019-12-19 13:22:01
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-11 15:31:43
 */

/**
 * webpack moduleLoader config list
 */

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path");

module.exports.setDefaultModule = function(config = {}, loaderArr = []) {
  let rules = [...loaderArr];
  let { mode } = config;
  const rawLoader = {
    test: /\.(txt|svg)$/,
    use: "raw-loader",
    include: resolve(__dirname, "..", "src")
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
                ie: "10"
              },
              corejs: "3"
            }
          ]
        ],
        plugins: [
          [
            "import",
            {
              libraryName: "antd",
              libraryDirectory: "es",
              // style: "css"
              style: true
            },
            "antd"
          ],
          [
            "import",
            {
              libraryName: "lodash",
              libraryDirectory: "",
              camel2DashComponentName: false
            },
            "lodash"
          ],
          ["@babel/plugin-proposal-class-properties", { loose: false }],
          [
            "module-resolver",
            {
              extensions: [".js", ".jsx"]
            }
          ],
          [
            "@babel/plugin-transform-runtime",
            {
              corejs: "3"
            }
          ],
          [
            "@babel/plugin-transform-modules-commonjs",
            {
              allowTopLevelThis: true
            }
          ],
          [
            "@babel/plugin-proposal-decorators",
            {
              legacy: true
            }
          ],
          "@babel/plugin-syntax-dynamic-import"
        ]
      }
    }
  };

  const urlLoader = {
    test: /\.(png|jpg|jqeg|gif)$/,
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10240, //unit:byte,under this value to transform to base64 code.
          name: "static/media/[name].[hash:6].[ext]"
        }
      }
    ],
    include: resolve(__dirname, "..", "src")
  };

  const styleLoader = {
    test: /\.(scss|css)$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV == "development",
          reloadAll: true
        }
      },
      {
        loader: "css-loader"
      },
      {
        loader: "sass-loader"
      }
    ]
  };

  const lessLoader = {
    test: /\.less$/,
    // include: [/[\\/]node_modules[\\/].*antd/],
    use: [
      MiniCssExtractPlugin.loader, // replaces extract text plugin in webpack 4
      "css-loader",
      {
        loader: "postcss-loader",
        options: {
          config: {
            path: "./config/postcss.config.js"
          }
        }
      },
      {
        loader: "less-loader",
        options: {
          javascriptEnabled: true
        }
      }
    ]
  };

  const happypackLoader = {
    test: /.js$/,
    use: "happypack/loader?id=happyPackerJs",
    exclude: /node_modules/
  };

  rules.push(
    styleLoader,
    lessLoader,
    rawLoader,
    urlLoader,
    babelLoader,
    happypackLoader
  );

  return { rules };
};
