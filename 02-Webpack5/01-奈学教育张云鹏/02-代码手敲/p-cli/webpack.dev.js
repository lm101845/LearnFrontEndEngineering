/*
 * @Author: liming
 * @Date: 2022-01-08 13:30:16
 * @LastEditTime: 2022-01-08 20:12:15
 * @FilePath: \02-代码手敲\p-cli\webpack.dev.js
 */

const { merge } = require('webpack-merge');
const base = require('./webpack.base.js')
const path = require('path');
module.exports = merge(base, {
    //这里不能直接写大括号，而是要把base和dev的配置合并
    mode: 'development',
    devtool: 'inline-source-map', //内联配置源码映射
    devServer: {
        //devServer这个属性是用于自动打开浏览器的，这里我们配置了自动打开浏览器
        host: 'localhost',
        // host: '0.0.0.0',
        //如果你想让别人也访问到我的项目，可以把这个配置成局域网下的IP
        //配置成0.0.0.0的话，localhost和别人都可以访问到,但windows电脑由于默认网关的问题，可能会出现访问不到的情况
        port: '8080',
        open: true,
        //默认自动打开电脑默认的浏览器
        static: [
            //这里是配置项目静态资源文件夹
            path.resolve(__dirname, 'dist'),
            path.resolve(__dirname, 'public')
            //写在public文件夹下的静态资源是可以被直接访问的，是公开的
        ]
    },
    module: {
        rules: [{ //用来编译css代码
                test: /\.css$/,
                use: [
                    // loader的配置是有顺序的，plugins配置是没有顺序要求的
                    //自下而上
                    { loader: 'style-loader' },
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
    }
})