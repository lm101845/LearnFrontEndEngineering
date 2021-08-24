/*
 * @Author: liming
 * @Date: 2021-08-24 06:59:34
 * @LastEditTime: 2021-08-24 07:56:40
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\16-生产环境配置\webpack.config.js
 */

const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 对CSS进行压缩——大驼峰命名法
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//定义Node.js的环境变量
process.env.NODE_ENV = "production";

//复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  "css-loader",
  {
    //还需要在package.json中定义browserslist
    loader: "postcss-loader",
    options: {
      ident: "postcss",
      //指示postcss以什么插件进行工作
      plugins: () => [require("postcss-preset-env")()],
    },
  },
];

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        //css文件处理
        test: /\.css$/,
        use: [
          //   MiniCssExtractPlugin.loader,
          //   "css-loader",
          //   {
          //     //还需要在package.json中定义browserslist
          //     loader: "postcss-loader",
          //     options: {
          //       ident: "postcss",
          //       //指示postcss以什么插件进行工作
          //       plugins: () => [require("postcss-preset-env")()],
          //     },
          //   },
          ...commonCssLoader,
          // 使用三目运算符将其展开
        ],
      },
      {
        //less文件处理
        test: /\.less$/,
        use: [
          //   MiniCssExtractPlugin.loader,
          //   "css-loader",
          //   {
          //     //还需要在package.json中定义browserslist
          //     loader: "postcss-loader",
          //     options: {
          //       ident: "postcss",
          //       //指示postcss以什么插件进行工作
          //       plugins: () => [require("postcss-preset-env")()],
          //     },
          //   },
          ...commonCssLoader,
          // 这样写就可以不用写太多重复代码了
          "less-loader",
        ],
      },

      /**
       * 正常来讲，一个文件只能被一个loader处理，
       * 当一个文件要被多个loader处理，那么我们一定要搞清楚loader执行的先后顺序
       * 先执行eslint，再执行babel
       */

      //   js语法检查——只检查自己的文件，千万不要检查别人的文件
      // 在package.json中，要添加eslintConfig配置说明我们使用哪种规则--->这里我们使用airbnb规则
      /**
       *  "eslintConfig": {
       * "extends": "airbnb-base"
       * },
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        //优先执行——不论它是放上面还是放下面，都是优先执行的
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          // 使用fix:true来自动修复我们的问题——不需要我们自己一个一个修改了
          fix: true,
        },
      },

      //   对js进行兼容性处理
      {
        test: /\.js$/,
        //指定清楚检测的文件
        exclude: /node_modules/,
        // 注意：这里也要和eslint一样，把node_modules里面的东西给去掉，不然它会把里面的东西也给一并转换了
        loader: "babel-loader",
        //这个babel-loader只能做一些简单的兼容性处理
        options: {
          //预设：指示babel做怎么样的兼容性处理
          // presets: ['@babel/preset-env']
          // 一个基本的兼容性处理——预设环境的兼容性处理

          // 我们使用core-js来解决兼容性问题(按需加载，更好)
          presets: [
            [
              "@babel/preset-env",
              {
                // 可以理解为按需加载
                useBuiltIns: "usage",
                //指定core-js版本
                corejs: {
                  version: 3,
                },
                // 指定兼容性做到哪个版本的浏览器
                targets: {
                  chrome: "60",
                  firefox: "50",
                  ie: "9",
                  safari: "10",
                  edge: "17",
                },
              },
            ],
          ],
        },
      },
      //   处理css中的图片
      {
        test: /\.(jpg|png|gif)/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
          name: "[hash:10].[ext]",
          //ext是它自己的文件扩展名
          outputPath: "imgs",
          esModule: false,
          // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
          // 解析时会出问题：[object Module]
          // 解决：关闭url-loader的es6模块化，使用commonjs解析
        },
      },
      //解决html文件中的图片问题
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      // 打包其他资源(除了html/js/css资源以外的资源)
      {
        // 排除css/js/html资源
        exclude: /\.(css|js|html|less)$/,
        loader: "file-loader",
        options: {
          outputPath: "media",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/built.css",
      //改一下路径，单独放到一个文件下
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // html压缩
      minify: {
        // 移除空格
        collapseWhitespace: true,
        //移除注释
        removeComments: true,
      },
    }),
  ],
  mode: "production",
  //   只要将mode改成production，js就自动压缩了
};
