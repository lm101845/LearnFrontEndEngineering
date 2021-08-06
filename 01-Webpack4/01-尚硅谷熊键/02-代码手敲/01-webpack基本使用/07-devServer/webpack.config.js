/*
 * @Author: liming
 * @Date: 2021-08-06 16:58:55
 * @LastEditTime: 2021-08-06 17:41:38
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\07-devServer\webpack.config.js
 */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // 打包其他资源(除了html/js/css资源以外的资源)
      {
        // 排除css/js/html资源
        exclude: /\.(css|js|html|less)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    ],
    mode: "development",
   //开发服务器devServer:用来自动化(自动编译，自动打开浏览器，自动刷新浏览器等功能，类似Nodemon)
    //devServer特点：没有输出，只会在内存中编译打包，不会在本地代码中有任何输出
    //启动devServer指令为：webpack-dev-server
    // 不属于上述5个概念，所以单独写
    devServer: {
        //项目构建后的路径
        contentBase: resolve(__dirname, 'build'),
        //启动gzip压缩
        compress: true,
        //端口号
        port: 3000,
        //自动打开浏览器(默认浏览器)
        open:true
    }
};
