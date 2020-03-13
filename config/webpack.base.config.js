/*
 * @Author: junjie.lean
 * @Date: 2019-12-19 13:33:20
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-11 16:17:31
 */

/**
 *  webpack base config,do not change any config if you not know how it works;
 */

const { setDefaultModule } = require("./module.config.js");
const { setDevServer } = require("./webpack.dev.config.js");
const { setDefaultPlugins } = require("./plugins.config.js");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { paths } = require("./paths");

/**
 * debugLevel 调试等级,输出等级. 0 到 4.
 * 0不输出sourceMap, 打包速度最快;
 * 4输出详细sourceMap,打包构建速度最慢;
 */
const debugLevel = 2;

/** mode */
const mode =
  process.env.NODE_ENV !== "production" ? "development" : "production";

/** 是否是bundle分析模式,用来分析bundle依赖是否有问题. */
const isOpenAnalyze =
  process.env.ANALYZE_MODE && process.env.ANALYZE_MODE === "true";

function setSourceMapAbout(debugLevel) {
  let stats, devtool;
  switch (debugLevel) {
    case 1: {
      devtool = "cheap-module-eval-source-map";
      stats = "errors-only";
      break;
    }
    case 2: {
      devtool = "eval-source-map";
      stats = "minimal";
      break;
    }
    case 3: {
      devtool = "cheap-module-source-map";
      stats = "normal";
      break;
    }
    case 4: {
      devtool = "source-map";
      stats = "verbose";
      break;
    }
    default: {
      devtool = "evel";
      stats = "none";
    }
  }
  return { devtool, stats };
}

module.exports = {
  mode,
  entry: "./src/index.js",
  output: {
    path: paths.buildPath,
    filename:
      mode == "production"
        ? "static/js/i.[hash:6].js" //index.hash.js
        : "static/js/dev.b.js", //dev.b.js
    chunkFilename:
      mode == "production"
        ? "static/js/c.[name].[hash:6].js" //c.main.hash.js
        : "static/js/dev.c.[name].js", //dev.c.main.js
    publicPath: "./"
  },
  devtool: setSourceMapAbout(debugLevel).devtool,
  stats: setSourceMapAbout(debugLevel).stats,
  module: setDefaultModule({ debugLevel, mode }),
  plugins: setDefaultPlugins({ debugLevel, mode, isOpenAnalyze }),
  devServer: setDevServer({ stats: setSourceMapAbout(debugLevel).stats }),
  resolve: {
    mainFields: ["main"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: "all",
          minSize: 1024 * 20,
          maxSize: 1024 * 40,
          automaticNameDelimiter: "-"
        },
        vendor: {
          test: /node_modules/,
          name: "vendors", 
          chunks: "initial"
        }
      }
    }
  }
};
