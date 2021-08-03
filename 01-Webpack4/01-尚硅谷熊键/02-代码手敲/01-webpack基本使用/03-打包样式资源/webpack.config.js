/*
 * @Author: liming
 * @Date: 2021-08-03 21:39:38
 * @LastEditTime: 2021-08-03 23:43:38
 * @FilePath: \01-Webpack4\01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\03-打包样式资源\webpack.config.js
 */

/*
  webpack.config.js  webpack的配置文件
    作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）

    所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。
    * 项目模块(比如src文件)我们使用的是ES6模块
    * 配置模块(比如webpack.config.js)我们使用的是Common.js模块
*/

const { resolve } = require("path");
//path通过解构赋值提取一个属性叫resolve
// resolve用来拼接绝对路径的方法

module.exports = {
  // webpack配置

  // 入口起点
  entry: "./src/index.js",

  //输出
  output: {
    //输出文件名
    filename: "built.js",
    //输出路径(为了避免出错，我们使用的是绝对路径——这里要引入Node的path模块)
    // __dirname是nodejs的变量，代表当前文件(指的是webpack.config.js)的目录绝对路径
    path: resolve(__dirname, "build"),
  },
  //loader的配置——loader可以帮我们去做翻译
  module: {
      rules: [
        //不同的文件(.css,.less等)需要配置不同的loader去处理
      //详细loader配置(是个对象)
      {
        test: /\.css$/,
        //test的值通常是一个正则表达式(代表匹配哪些文件)
        //表示选择的是.css结尾的文件
        use: [
          //use表示使用哪些loader进行处理
          //执行顺序：先css-loader,再style-loader，从右到左(或从下网上)执行
          //创建style标签，将js中的css样式资源插入进去，添加到页面head中生效
          "style-loader",
          //将css文件以字符串形式变成common.js的模块加载到js中，里面内容是【样式字符串】
          "css-loader",
        ],
          },
          {
              test: /\.less$/,
              use: [
                  'style-loader',
                  'css-loader',
                    //上面的这2个还要再写一遍，必须写全，不能够复用
                  //每个对象只能处理一项内容，只能处理一种文件类型
                  //将less文件编译为css文件
                  //需要下载less-loader和less两个包
                  'less-loader',

              ]
          }
    ],
  },
  //plugin的配置——plugin可以让我们更加强大
  plugins: [
    //值是一个数组
    //详细plugins的配置
  ],
  //模式——二选一，不能同时写
  mode: "development",
  // mode:'production'
  // 生产模式会将代码压缩，我们就看不懂了，所以测试都在开发模式测试
};
