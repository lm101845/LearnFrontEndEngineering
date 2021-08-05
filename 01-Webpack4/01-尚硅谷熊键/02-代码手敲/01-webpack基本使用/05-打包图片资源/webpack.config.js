/*
 * @Author: liming
 * @Date: 2021-08-06 03:06:44
 * @LastEditTime: 2021-08-06 03:51:18
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\05-打包图片资源\webpack.config.js
 */
const { resolve } = require('path');
// 意思是path.resolve = resolve

const htmlWebpackPlugin = require('html-webpack-plugin')
// 小驼峰命名法

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        //要使用多个loader处理用use关键字
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        //处理图片资源
        test: /\.(jpg|png|gif)$/,
        //而只使用一个loader处理时直接写一个loader即可
        //下载url-loader、file-loader
        loader: "url-loader",
        options: {
          // 图片大小小于8kb,就会被base64处理
          // 优点：减少请求数量(减轻服务器压力)
          // 缺点：图片体积会更大（文件请求速度更慢）

          //所以我们需要综合一下：减少请求数量 VS 图片变大，二者不可兼得
          limit: 8 * 1024,
          // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
          // 解析时会出问题：[object Module]
          // 解决：关闭url-loader的es6模块化，使用commonjs解析
          esModule: false,
          // 给图片进行重命名
          // [hash:10]取图片的hash的前10位
          // [ext]取文件原来扩展名
          name: "[hash:10].[ext]",
        },
          },
          {
              test: /\.html$/,
              //处理html文件的img图片的(负责引入img，从而能被url-loader进行处理)
              loader:'html-loader'
          }
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
};