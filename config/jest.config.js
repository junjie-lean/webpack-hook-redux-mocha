/*
 * @Author: junjie.lean
 * @Date: 2020-03-16 14:56:32
 * @Last Modified by:   junjie.lean
 * @Last Modified time: 2020-03-16 14:56:32
 */

module.exports = {
  testMatch: ["<rootDir>"],
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    "^.+\\.js$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.css$": "<rootDir>/__mocks__/styleMock.js"
  }
};
