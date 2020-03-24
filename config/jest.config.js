/*
 * @Author: junjie.lean
 * @Date: 2020-03-16 14:56:48
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-18 10:59:05
 */

module.exports = {
  testMatch: ["<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"], //文件匹配
  testRnviroment: "jsdom", //测试环境
  moduleFileExtensions: ["js", "json", "jsx", "node"], //需要测试的文件类型
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    "^.+\\.js$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "\\.css$": "<rootDir>/__mocks__/styleMock.js"
  }
};
