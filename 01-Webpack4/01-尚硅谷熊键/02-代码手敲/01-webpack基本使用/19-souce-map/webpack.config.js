/*
 * @Author: liming
 * @Date: 2021-09-12 05:09:28
 * @LastEditTime: 2021-09-12 06:41:45
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\19-souce-map\webpack.config.js
 */

/*
  source-map: 一种 提供源代码到构建后代码映射 技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）

    [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

    source-map：外部
      错误代码准确信息 和 源代码的错误位置

    inline-source-map：内联
      只生成一个内联source-map
      错误代码准确信息 和 源代码的错误位置

    hidden-source-map：外部
      错误代码错误原因，但是没有错误位置
      不能追踪源代码错误，只能提示到构建后代码的错误位置

    eval-source-map：内联
      每一个文件都生成对应的source-map，都在eval
      错误代码准确信息 和 源代码的错误位置

    nosources-source-map：外部
      错误代码准确信息, 但是没有任何源代码信息

    cheap-source-map：外部
      错误代码准确信息 和 源代码的错误位置
      只能精确到行

    cheap-module-source-map：外部
      错误代码准确信息 和 源代码的错误位置
      module会将loader的source map加入

    内联 和 外部的区别：1. 外部生成了文件，内联没有 2. 内联构建速度更快

    开发环境：速度快，调试更友好
      速度快(eval第一>inline第二>cheap第三>...)
        eval-cheap-souce-map
        eval-source-map
      调试更友好
        souce-map
        cheap-module-souce-map
        cheap-souce-map

      --> eval-source-map(脚手架里默认用的这个)  / eval-cheap-module-souce-map  ————————————————开发环境综合选这两个

    生产环境：源代码要不要隐藏? 调试要不要更友好
      内联会让代码体积变大，所以【在生产环境不用内联】
      nosources-source-map 全部隐藏
      hidden-source-map 只隐藏源代码，会提示构建后代码错误信息

      --> source-map / cheap-module-souce-map ————————————————生产环境综合选这两个(不考虑隐藏源代码的情况下)
*/

const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
// 插件切记需要下载和引入才能使用
// loader则只需要下载就能使用了

module.exports = {
    //向外暴露出去6个对象(5个基本概念(entry,output,loader(写成module),plugins,mode)+1个devServer)
    //入口文件
    entry: ['./src/js/index.js', './src/index.html'],
    //出口文件
    output: {
        //output里面有2个操作
        filename: 'js/built.js',
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
                },
            },
        ],
    },
    //插件
    plugins: [
        //plugins的配置
        //html资源不通过loader来处理，通过功能更强大的plugins(插件)来处理
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    mode: 'development',
    //开发环境配置
    devServer: {
        //项目构建后的路径
        contentBase: resolve(__dirname, "build"),
        //启动gzip压缩
        compress: true,
        //端口号
        port: 3001,
        //自动打开浏览器(默认浏览器)
        open: true,
        // 开启HMR功能(热更新功能)
        // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
        hot: true
    },
    // devtool:'source-map'
    // devtool:'inline-source-map', 
    // devtool:'eval-source-map'
};
