/*
 * @Author: junjie.lean
 * @Date: 2019-12-24 11:02:57
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-12-24 13:35:41
 */

/**
 *  recompile project and create an analyze file.
 */
const { spawnSync } = require("child_process");
const { writeFileSync } = require("fs");
//webpack complie start:

let webpackCompile = spawnSync(
  "npx",
  [
    "webpack",
    "--config",
    "./config/webpack.base.config",
    "--profile",
    "--json"
  ],
  { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 }
);

console.log("webpack compile end!");
let writeJsonFile = writeFileSync("stats.json", webpackCompile.stdout);

let createAnalyze = spawnSync(
  "npx",
  [
    "webpack-bundle-analyzer",
    "stats.json",
    "build",
    "-m",
    "static",
    "-r",
    "build/analyze.html",
    "-l",
    "debug"
  ],
  { encoding: "utf8" }
);

console.log(createAnalyze.stdout);
