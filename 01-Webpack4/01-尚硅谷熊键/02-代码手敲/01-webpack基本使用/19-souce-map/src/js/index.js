/*
 * @Author: liming
 * @Date: 2021-08-06 18:05:03
 * @LastEditTime: 2021-09-12 05:50:26
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\18-HMR\src\js\index.js
 */

//引入资源
import print from './print'
import '../css/iconfont.css'
import '../css/index.less'


console.log('index.js文件被加载了~');

print();

function add(x, y) {
    return x + y;
}

console.log(add(1, 2));

//一旦module.hot为true,说明开启了HMR功能——让HMR功能代码生效
//如果不加这段代码，则一个模块发生变化，所有js模块都会重新构建
if (module.hot) {
    module.hot.accept('./print.js', function () {
        //方法会监听print.js文件的变化，一旦print.js发生变化，其他模块不会重新构建
        // 会执行后面的回调函数
        print();
    })
}