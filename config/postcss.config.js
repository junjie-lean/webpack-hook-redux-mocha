/*
 * @Author: junjie.lean
 * @Date: 2020-01-09 13:55:32
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-01-09 14:14:08
 */

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      stage: 3
    },
    cssnano: {}
  }
};

// cssnano优化包括下面一些类型：
// 删除空格和最后一个分号
// 删除注释
// 优化字体权重
// 丢弃重复的样式规则
// 优化calc()
// 压缩选择器
// 减少手写属性
// 合并规则
