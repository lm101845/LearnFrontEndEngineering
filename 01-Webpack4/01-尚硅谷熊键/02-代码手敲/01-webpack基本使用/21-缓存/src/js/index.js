/*
 * @Author: liming
 * @Date: 2021-09-20 18:14:36
 * @LastEditTime: 2021-09-20 19:18:28
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\21-缓存\src\js\index.js
 */

import '../css/index.css';

function sum(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}

// eslint-disable-next-line
console.log(sum(1, 2, 3, 4,5));
