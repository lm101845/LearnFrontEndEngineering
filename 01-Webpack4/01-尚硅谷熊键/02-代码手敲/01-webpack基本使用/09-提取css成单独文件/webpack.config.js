/*
 * @Author: liming
 * @Date: 2021-08-14 16:27:49
 * @LastEditTime: 2021-08-15 02:54:00
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\09-提取css成单独文件\webpack.config.js
 */
const { resolve } = require('path')
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 这里要用小大驼峰命名法
// 这个插件可以将css提取成单独文件

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //创建style标签，将样式放入——升级版：不将样式放入了，将样式单独放
          // "style-loader",
          //这个loader取代style-loader。作用:提取Js中的css成单独文件
          MiniCssExtractPlugin.loader,
          //将css文件整合到js文件中
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    //plugins的配置
    //html资源不通过loader来处理，通过功能更强大的plugins(插件)来处理
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      //   对输出的文件进行重命名
      filename: "css/built.css",
    }),
  ],
  mode: "development",
};