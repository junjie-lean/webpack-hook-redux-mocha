/*
 * @Author: junjie.lean
 * @Date: 2020-06-17 16:51:24
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2021-04-28 10:36:54
 */

const spawn = require("cross-spawn");
const zipper = require("zip-local");
const chalk = require("chalk");
const package = require("./../package");
const fs = require("fs");
const moment = require("moment");

process.on("unhandledRejection", (err) => {
  throw err;
});

let option = {
  env: {
    ...process.env,
  },
  cwd: process.cwd(),
  stdio: "inherit",
  encoding: "utf8",
  shell: process.platform == "win32",
};

console.log(chalk.hex("#00d684").bold("Build start, please wait..."));

let res = spawn.sync(
  "npx",
  ["webpack", "--config", "./config/webpack.base.config"],
  {
    ...option,
  }
);

console.log(chalk.hex("#00d684").bold("Zip start, please wait..."));

let buildTime = moment(Date.now()).format("MMDDHHmm");

let zipName = `build${
  package.projectName ? "-" + package.projectName + "-v" + package.version : ""
}-${buildTime}.zip`;

if (fs.existsSync("./build")) {
  zipper.sync.zip("./build").compress().save(zipName);
  console.log(
    chalk.hex("#00d684").bold(`Zip completed, package name: "${zipName}"`)
  );
}
