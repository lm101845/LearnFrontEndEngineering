'use strict';

const path = require('path');
const webpack = require('webpack');
//引入webpack自带的hotmodulereplacementplugin插件,因为是自带的，这里我们先引入webpack

module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        search: './src/search.js'
            //入口可以有多个
    },
    output: {
        // filename: 'bundle.js',
        //出口只有一个，通过占位符进行区分
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
    // mode: 'production',
    mode: 'development',
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                    //注意：loader的调用是链式调用的，而且执行顺序是从右到左(从下往上)
                    //css-loader找出css中的依赖，压缩资源
                    //style-loader把css转换成脚本加载的JavaScript代码
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                // use: 'file-loader'
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240
                            //如果图片大小小于10k，则转换成base64
                            // base64的格式，优点：要访问效率要高一些
                            //转换为base64格式图片会变大（小图片适合这种方式）
                            /***
                             * 首先我们知道在前端技术中每一张图片的加载都会进行一次http请求，而每次http请求都是需要时间的，
                             * 所以当网页中图片资源很多的时候,如果不进行base64转译，就会进行很多的http请求，会使页面加载时间大大的增加。
                             * base64编码可以将图片添加到css中，实现请求css即可下载下来图片，减少了在此请求图片的请求
                             */
                        }
                    }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',   // 服务基础目录
        hot: true,  //开启热更新
    }
};