/*
 * @Author: liming
 * @Date: 2022-01-08 13:32:24
 * @LastEditTime: 2022-01-08 18:50:33
 * @FilePath: \02-代码手敲\p-cli\src\index.js
 */

import './index.css'
// import './test.scss'
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