/*
 * @Author: liming
 * @Date: 2021-08-06 02:34:02
 * @LastEditTime: 2021-08-06 02:57:28
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\04-打包html资源\webpack.config.js
 */

/*
  loader: 1. 下载   2. 使用（配置loader）
  plugins: 1. 下载  2. 引入  3. 使用
*/
const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// htmlWebpackPlugin它是一个类或者说是构造函数，所以使用new调用即可
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      //loader的配置
      //html-webpack-plugin
    ],
  },
  plugins: [
    //plugins的配置
    // html-webpack-plugin
    // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
    // 需求：需要有结构的HTML文件
    new htmlWebpackPlugin({
      // 复制 './src/index.html' 文件，并【自动】引入打包输出的所有资源（JS/CSS）
        // 注意：这个时候你就不要自己再【手动引入】了，这样会引入2次，会出现一些问题
      template: "./src/index.html",
    }),
  ],
  mode: "development",
};