/*
 * @Author: liming
 * @Date: 2022-01-08 19:48:23
 * @LastEditTime: 2022-01-08 20:36:58
 * @FilePath: \02-代码手敲\p-cli\src\test.js
 */

//现在我们这里有2个文件，2个文件里分别引入了css和scss，我想要让这2个文件都引入到index.html里面
//这个是可以的，是允许有多个入口的，我们来改造一下webapck.base.js

// import './test.scss'
import '@/test/style/test' //后缀也可以不写，我们配置了可以省略
import img from './img/cat.jpg'
console.log(img);
console.log('我是test');

// document.querySelector('#img').src = './img/cat.jpg'
//src下面的图片我们把它当成一个对象来引入，就可以访问了，这样写不行，下面可以

document.querySelector('#img').src = img