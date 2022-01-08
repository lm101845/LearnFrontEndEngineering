/*
 * @Author: liming
 * @Date: 2022-01-08 13:30:27
 * @LastEditTime: 2022-01-08 20:11:45
 * @FilePath: \02-代码手敲\p-cli\webpack.prod.js
 */
const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 这里要使用解构赋值
module.exports = merge(base, {
    mode: 'production',
    devtool: 'source-map', //独立配置源码映射
    output: {
        filename: '[name]-[hash].bundle.js'
            //使用哈希让index.js每次提交的版本名字就不一样，这样就不会产生因为index.js没有改变而导致的使用本地缓存，而不使用最新的代码的问题
    },

    //发布到生产环境的时候，我们希望CSS样式可以和JS代码分离，所以我们这里配置有所不同 ，这样css样式也是在js代码里面了
    module: {
        rules: [{ //用来编译css代码
                test: /\.css$/,
                use: [
                    // loader的配置是有顺序的，plugins配置是没有顺序要求的
                    //自下而上
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    //postcss-loader是为了解决项目的兼容性处理的
                    //一些兼容性前缀，比如-webkit-这些，不需要我们写了，postcss-loader会帮我们自动处理
                ]
            },
            { //用来编译sass代码
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        //每次哈希值变了的话，为了防止文件夹里面文件夹一直叠加产生碎片，所以我们每次构建前都要把以前的文件给删除掉
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css'
        })
    ]
})