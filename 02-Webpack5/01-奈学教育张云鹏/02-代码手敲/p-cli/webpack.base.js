/*
 * @Author: liming
 * @Date: 2022-01-08 13:30:10
 * @LastEditTime: 2022-01-08 20:38:33
 * @FilePath: \02-代码手敲\p-cli\webpack.base.js
 */

//webpack的配置我们需要使用common.js模块(Node.js的模块化规范)

const path = require('path');
/**
应用node环境的时候，这个path模块的方法经常被用到，处理路径的方法。
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        //设置2个入口
        index: './src/index.js',
        test: './src/test.js'
    },
    output: {
        //对于output来说，它会根据2个entry，动态的取key生成2个bundle
        //这个是webpack在处理多页面应用时候的解决方案
        path: path.resolve(__dirname, 'dist'),
        /**
         * path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
            给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。
            例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。
            dirname 代表当前所在文件路径
         */
        filename: '[name].bundle.js',
        //filename 代表当前所在文件名称
        publicPath: ''
    },
    module: {
        rules: [
            //规则：是一个数组
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                //在webpack.base.js中增加file-loader用来解析文件
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    { loader: 'file-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            //template是模板，我从哪里找一个模板文件
            filename: 'index.html',
            //filename是输出之后的文件名，配置完文件名后，它会随着output一起进入dist文件夹
            chunk: ['index', 'test'], //设置2个入口
            //chunk是灵魂文件，只要有这个文件，就会自动引入
            //chunk是这个网页里需要依赖的js有啥
        })
    ],
    resolve: {
        //配置免后缀的文件类型
        extensions: ['.js', '.jsx', '.vue', '.css', '.less', '.scss'],
        //为全路径配置缩写@
        //我们在项目中引入路径的时候，通常不会使用相对路径去引用，而是使用绝对路径去引
        alias: {
            '@': path.resolve(__dirname, 'src')
                //我们不仅可以给路径起别名，还可以给插件起别名
                //注意：配置文件一旦改完后一定要记得重启一下项目
        }
    }
}