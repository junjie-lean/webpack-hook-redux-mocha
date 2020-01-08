module.exports = {
  testMatch: ["<rootDir>/tests/**/*.(spec|test).ts?(x)"],
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    "^.+\\.js$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(lodash-es|other-es-lib))"
  ]
};
