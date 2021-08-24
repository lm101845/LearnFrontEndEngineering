/*
 * @Author: liming
 * @Date: 2021-08-24 03:46:44
 * @LastEditTime: 2021-08-24 04:32:12
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\12-JS语法检查\src\js\index.js
 */
function add(x, y) {
  return x + y;
}

// 下一行eslint所有规则都失效(下一行不进行eslint检查)
// eslint-disable-next-line
console.log(add(2, 5));
