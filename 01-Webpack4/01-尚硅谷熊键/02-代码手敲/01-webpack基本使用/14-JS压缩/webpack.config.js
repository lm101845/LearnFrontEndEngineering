/*
 * @Author: liming
 * @Date: 2021-08-24 03:43:56
 * @LastEditTime: 2021-08-24 06:33:44
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\14-JS压缩\webpack.config.js
 */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    ],
//   生产环境下会自动压缩js代码，所以我们不需要操心这些事情了
  mode: "production",
};
