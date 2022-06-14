'use strict';

const path = require('path');
const webpack = require('webpack');
//引入webpack自带的hotmodulereplacementplugin插件,因为是自带的，这里我们先引入webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')


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
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                    //注意：loader的调用是链式调用的，而且执行顺序是从右到左(从下往上)
                    //css-loader找出css中的依赖，压缩资源
                    //style-loader把css转换成脚本加载的JavaScript代码
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    {
                        loader:'postcss-loader',
                        options: {
                            plugins:()=>[
                                require("autoprefixer")({
                                    browsers:['last 2 versions','>1%','ios 7']
                                })
                            ]
                        }
                    },
                    {
                        loader:"px2rem-loader",
                        options: {
                            remUnit: 75,    //1rem等于750px
                            remPrecesion: 8 //小数点位数
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                // use: 'file-loader'
                use: [{
                    // loader: 'url-loader',
                    loader: 'file-loader',
                    //因为这里图片小于10k,变成了base64,看不到hash效果，所以改成file-loader
                    options: {
                        name: '[name]_[hash:8].[ext]',
                    }
                }]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash:8].[ext]',
                    }
                }]
            }
        ]
    },
    //生产环境不需要代码的热更新，所以把热更新有关代码删掉
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        //一个页面加一个HtmlWebpackPlugin,我们这里有2个页面，所以加2次
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html',  //打包出来的html文件名
            chunks: ['index'],
            inject: true,   //打包的css,js会自动注入到html里面来
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/search.html'),
            filename: 'search.html',
            chunks: ['search'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
        new CleanWebpackPlugin(),
    ]
};