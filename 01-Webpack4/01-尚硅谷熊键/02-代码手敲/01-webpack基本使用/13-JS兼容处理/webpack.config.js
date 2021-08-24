/*
 * @Author: liming
 * @Date: 2021-08-24 03:43:56
 * @LastEditTime: 2021-08-24 06:28:17
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\13-JS兼容处理\webpack.config.js
 */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      /**
       * 使用webpack打包后在IE中打开，虽然页面正常显示，但是控制台输出SCRIPT1002: 语法错误
       * 因为你写了const,还有箭头函数，并且编译的时候也没有将它转变为ES5语法，而ES6语法IE是不认识的
       * js兼容性处理 --> babel-loader @babel/core @babel/preset-env
       *    1.基本的兼容性处理---> @babel/preset-env
       *        问题：只能转换基本语法(比如Promise这些高级语法无法转换，在IE浏览器中会报错)
       *    2.全部js兼容性处理 --> @babel/polyfill
       *        问题：我只要解决部分的兼容性问题，但是将所有兼容性代码全部引入，体积太大了
       *    3.需要做兼容性处理的就做：按需加载-->corejs
       * 
       */
          {
            test:/\.js$/, 
            //指定清楚检测的文件
            exclude: /node_modules/,
            // 注意：这里也要和eslint一样，把node_modules里面的东西给去掉，不然它会把里面的东西也给一并转换了
            loader: 'babel-loader',
            options: {
                //预设：指示babel做怎么样的兼容性处理
                // presets: ['@babel/preset-env']
                // 一个基本的兼容性处理——预设环境的兼容性处理

                // 我们使用core-js来解决兼容性问题(按需加载，更好)
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            // 可以理解为按需加载
                            useBuiltIns: 'usage',
                            //指定core-js版本
                            corejs:{
                                version:3
                            },
                            // 指定兼容性做到哪个版本的浏览器
                            targets: {
                                chrome: '60',
                                firefox: '50',
                                ie: '9',
                                safari: '10',
                                edge: '17'
                            }
                        }

                    ]
                ]
              }
          }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
};
