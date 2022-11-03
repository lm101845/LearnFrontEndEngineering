/**
 * @Author liming
 * @Date 2022/9/13 11:40
 **/

const path = require('path');
//path 模块提供了一些实用工具，用于处理文件和目录的路径

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // entry: './src/index.js',
    entry: {
        index:'./src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title:'管理输出',
            title:'开发环境'
        })
    ],
    output:{
        // filename:'bundle.js',
        filename: '[name].bundle.js',
        path:path.resolve(__dirname, 'dist'),
        /**
         * path.resolve() 方法会将路径或路径片段的序列解析为绝对路径。
         *
         * console.log(__dirname);
         * //E:\01-code\15-LearnWebpack5\LearnWebpack5\02-Webpack5\00-官方文档\webpack-demo\src
         *
         * console.log(path.resolve(__dirname, 'dist'))
         * //E:\01-code\15-LearnWebpack5\LearnWebpack5\02-Webpack5\00-官方文档\webpack-demo\src\dist
         */
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test:/\.css$/i,
                use:['style-loader', 'css-loader']
                /**
                 * 模块 loader 可以链式调用。链中的每个 loader 都将对资源进行转换。链会逆序执行。第一个 loader 将其结果（被转换后的资源）
                 * 传递给下一个 loader，依此类推。最后，webpack 期望链中的最后的 loader 返回 JavaScript。
                 *
                 * 应保证 loader 的先后顺序：'style-loader' 在前，而 'css-loader' 在后。如果不遵守此约定，webpack 可能会抛出错误。
                 */
            },
            //加载 images 图像
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            //加载 fonts 字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ]
    },
    optimization: {
        //以上配置告知 webpack-dev-server，将 dist 目录下的文件 serve 到 localhost:8080 下。
        runtimeChunk: 'single',
    },
}