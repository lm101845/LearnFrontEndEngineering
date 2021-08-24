/*
 * @Author: liming
 * @Date: 2021-08-24 03:46:44
 * @LastEditTime: 2021-08-24 06:18:06
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\13-JS兼容处理\src\js\index.js
 */
// import '@babel/polyfill'
// 我们使用第三种方案core-js，则不能使用第二种方案了，我们把它给注释掉
const add = (x, y) =>{
    return x + y;
}
console.log(add(2, 5));


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("定时器执行完了");
      resolve();
      // resolve可以将Promise对象状态改为成功状态
      // 放在IE里面会报错：SCRIPT5009: “Promise”未定义
    },1000)
});

console.log(promise);
