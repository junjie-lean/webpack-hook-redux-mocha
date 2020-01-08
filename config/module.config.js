/*
 * @Author: junjie.lean
 * @Date: 2019-12-19 13:22:01
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-12-20 15:29:12
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
              useBuiltIns: "entry", //入口文件出注入polyfill
              // useBuiltIns: "usage",
              targets: {
                esmodules: true,
                node: "current"
              },
              corejs: "3"
            }
          ]
        ],
        plugins: [
          // ["add-module-exports"],
          "autobind-class-methods",
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
          [
            "import",
            {
              libraryName: "antd",
              libraryDirectory: "es",
              style: "css"
              // style: true
            },
            "ant"
          ]
        ]
      }
    }
  };

  const urlLoader = {
    test: /\.(png|jqeg|gif)$/,
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
    use: [
      {
        loader: "sass-loader"
      },
      {
        loader: "css-loader"
      },
      {
        loader: "less-loader",
        options: {
          // lessPlugins: [new LessNpmImportPlugin({ prefix: "~" })],
          javascriptEnabled: true
        }
      }
    ],
    include: resolve(__dirname, "..", "src")
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
    happypackLoader,
  );

  return { rules };
};
