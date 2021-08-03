/*
 * @Author: liming
 * @Date: 2021-08-03 19:14:25
 * @LastEditTime: 2021-08-03 20:41:15
 * @FilePath: \LearnWebpack5\01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\02-webpack初体验\src\index.js
 */

/**
 *index.js:webpack的入口起点文件 
 webpack只能处理js文件和json文件，其他文件处理不了，只能通过翻译官(loader)去处理

 1.运行指令
 开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
 webpack会以./src/index.js为入口文件开始打包，打包后输出到./build/built.js
 整体打包环境。是开发环境

 生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
      webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
      整体打包环境，是生产环境

    2. 结论：
    1. webpack能处理js/json资源，不能处理css/img等其他资源
    2. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化~
    3. 生产环境比开发环境多一个压缩js代码。
 */

// import './index.css'

import data from './data.json'
console.log(data);

function add(x, y) {
  return x + y;
}

console.log(add(1, 2));
