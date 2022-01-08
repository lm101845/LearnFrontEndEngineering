/*
 * @Author: liming
 * @Date: 2022-01-08 19:26:33
 * @LastEditTime: 2022-01-08 19:26:33
 * @FilePath: \02-代码手敲\p-cli\src\postcss.config.js
 */

//postcss.config.js
module.exports = {
    plugins: {
        'postcss-preset-env': {}, //处理兼容性
        'cssnano': {} //压缩样式
    }
}