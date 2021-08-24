/*
 * @Author: liming
 * @Date: 2021-08-24 03:43:56
 * @LastEditTime: 2021-08-24 04:54:57
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\12-JS语法检查\webpack.config.js
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
       * 语法检查：团队工作中规范大家写的代码风格是类似的
       * eslint-loader eslint
       * 注意：只检查自己的源代码！！！第三方的库不要检查！！(eslint也会对插件生效,所以我们需要使用exclude进行排除。)
       * 设置检查规则；
       *  package.json中eslintConfig中设置——推荐使用airbnb
       *  "eslintConfig": {
    "extends": "airbnb-base",
    },
       * eslint-config-airbnb-base eslint eslint-plugin-import
       */
      {
        test: /\.js$/,
        // 注意：语法检查只针对.js代码才进行语法检查的！！！！
        exclude: /node_modules/,
        // 一定要排除node_modules，只检查我们自己的代码
            loader: "eslint-loader",
        // 因为eslint不知道要检查什么东西，所以我们需要给它定一个规则，这里我们选择Airbnb风格指南
        options: {
          // 自动修复eslint错误——这个功能可以！！！我们就不用手动去改了
          fix: true,
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
};
