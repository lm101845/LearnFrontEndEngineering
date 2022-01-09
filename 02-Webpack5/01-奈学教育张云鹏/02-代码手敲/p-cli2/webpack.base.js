/*
 * @Author: liming
 * @Date: 2022-01-08 13:30:10
 * @LastEditTime: 2022-01-09 20:48:37
 * @FilePath: \p-cli2\webpack.base.js
 */



const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name].bundle.js',
        filename: '[name]-[chunkhash].bundle.js',
        publicPath: ''
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    { loader: 'file-loader' }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    { loader: 'vue-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),

            filename: 'index.html',

            chunk: ['main'],
        }),
        new VueLoaderPlugin({

        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.vue', '.css', '.less', '.scss'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}