/*
 * @Author: liming
 * @Date: 2021-09-12 05:33:52
 * @LastEditTime: 2021-09-12 06:19:49
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\19-souce-map\src\js\print.js
 */
console.log('print.js被加载了~');

export default function print() {
    const content = 'hello print~~~'
    console.log(content)();
}

