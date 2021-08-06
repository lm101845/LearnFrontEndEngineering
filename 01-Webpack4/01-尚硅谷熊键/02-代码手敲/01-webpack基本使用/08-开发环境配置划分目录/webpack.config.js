/*
 * @Author: liming
 * @Date: 2021-08-06 17:45:31
 * @LastEditTime: 2021-08-06 18:30:47
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\08-开发环境配置划分目录\webpack.config.js
 */

/*
  开发环境配置：能让代码运行
    运行项目指令：
      webpack 会将打包结果输出出去
      npx webpack-dev-server 只会在内存中编译打包，没有输出
*/

const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
// 插件切记需要下载和引入才能使用
// loader则只需要下载就能使用了

module.exports = {
  //向外暴露出去6个对象(5个基本概念(entry,output,loader(写成module),plugins,mode)+1个devServer)
  //入口文件
  entry: "./src/js/index.js",
  //出口文件
  output: {
    //output里面有2个操作
    filename: "js/built.js",
    //   这个是js默认的输出路径，其他的如果单独写了，则输出build下单独写的输出路径
    //输出路径一般使用绝对路径
    path: resolve(__dirname, "build"),
  },
  //loader
  module: {
    rules: [
      //rules里面写所有loader的配置
      {
        //处理less资源
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        //处理css资源——webpack只能处理js文件和json文件，其他文件处理不了，只能通过翻译官(loader)去处理
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      //   注意：样式(less,css等)并不会输出，它是和js一起输出的，在js里面
      {
        //   处理图片资源
        test: /\.(jpg|jpeg|png|gif|)$/,
        loader: "url-loader",
        // url-loader只能处理样式中的图片，html中的图片资源无法处理，所以还需要使用html-loader来处理
        //   使用多个loader用use关键字，使用一个loader用loader关键字即可
        options: {
          limit: 8 * 1024,
          //8kb以下的图片用base64来处理，可以嵌入到html文件中，不用去服务器再请求资源了，缺点是base64处理后图片变大，所以只用来处理小图片
          name: "[hash:10].[ext]",
          //   哈希值长度太长，只取前10位
          esModule: false,
          // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
          // 解析时会出问题：[object Module]
          // 解决：关闭url-loader的es6模块化，使用commonjs解析
          outputPath: "imgs",
        },
      },
      {
        // url-loader只能处理样式中的图片，html中的图片资源无法处理，所以还需要使用html-loader来处理
        //处理html中img资源
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        //处理其他资源——有些资源不需要什么处理就可以使用，比如字体图标等
        //url-loader是在file-loader的基础上做的一个详细的优化，它们功能是差不多的
        exclude: /\.(html|js|css|less|jpg|jpeg|png|gif)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
          outputPath: "media",
        },
      },
    ],
  },
  //插件
  plugins: [
    //plugins的配置
    //html资源不通过loader来处理，通过功能更强大的plugins(插件)来处理
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  //开发环境配置
  devServer: {
    //项目构建后的路径
    contentBase: resolve(__dirname, "build"),
    //启动gzip压缩
    compress: true,
    //端口号
    port: 3000,
    //自动打开浏览器(默认浏览器)
    open: true,
  },
};
