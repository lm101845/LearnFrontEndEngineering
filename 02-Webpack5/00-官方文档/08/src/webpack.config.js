/**
 * @Author liming
 * @Date 2022/12/3 19:31
 **/

const path = require('path');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'webpack-numbers.js',
        // library:"webpackNumbers"
        library:{
            name:'webpackNumbers',
            type:'umd'
        }
    },
    externals: {
        // externals 用于排除一些引入的模块，不进行打包，引用外部的模块。
        /**
         * 如果需要引用一个库，但是又不想让webpack打包（减少打包的时间），
         * 并且又不影响我们在程序中以CMD、AMD或者window/global全局等方式进行使用（一般都以import方式引用使用），那就可以通过配置externals。
         *
         * 这样做的目的就是将不怎么需要更新的第三方库脱离webpack打包，不被打入bundle中，从而减少打包时间，但又不影响运用第三方库的方式，
         * 例如import方式等。
         */
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
    },
}
