/*
 * @Author: liming
 * @Date: 2022-01-08 13:32:24
 * @LastEditTime: 2022-01-08 21:08:50
 * @FilePath: \02-代码手敲\p-cli\src\index.js
 */

import './index.css'
// import './test.scss'
// import { userInfo } from './obj'   //第一种
const { userInfo } = require('./obj') //第二种

//这2种写法差距甚大，第2种是解构赋值,里面没用的东西也会被打包

console.log(userInfo);
console.log('你好');
console.log(123);
console.log(123);

new Promise((resolve) => {
    resolve(123)
}).then((res) => {
    console.log(res)
})

let arr = [1, 2, 3];
arr.map(item => {
    console.log(item);
})

class Person {
    constructor(name) {
        this.name = name;
        console.log('人');
    }

    getName() {
        return this.name
    }
}

let p = new Person('liming');
console.log(p);