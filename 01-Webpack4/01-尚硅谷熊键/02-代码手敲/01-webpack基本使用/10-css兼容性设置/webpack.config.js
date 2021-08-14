/*
 * @Author: liming
 * @Date: 2021-08-14 16:27:49
 * @LastEditTime: 2021-08-15 03:11:04
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\10-css兼容性设置\webpack.config.js
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 这里要用小大驼峰命名法
// 这个插件可以将css提取成单独文件




//设置Node.js的环境变量
process.env.NODE_ENV = 'development';

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
          /*
            css兼容性处理：postcss --> postcss-loader postcss-preset-env

            帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式

            "browserslist": {
              // 开发环境 --> 设置node环境变量：process.env.NODE_ENV = development
              "development": [
                "last 1 chrome version",
                "last 1 firefox version",
                "last 1 safari version"
              ],
              // 生产环境：默认是看生产环境
              "production": [
                ">0.2%",
                "not dead",
                "not op_mini all"
              ]
            }
          */
          // 使用loader的默认配置——但是我们不使用默认配置
          // 'postcss-loader',
          // 修改loader的配置
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => {
                //postcss的插件
                require("postcss-preset-env")();
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    //plugins的配置
    //html资源不通过loader来处理，通过功能更强大的plugins(插件)来处理
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      //   对输出的文件进行重命名
      filename: "css/built.css",
    }),
  ],
  mode: "development",
};