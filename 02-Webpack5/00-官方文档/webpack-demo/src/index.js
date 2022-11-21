/**
 * @Author liming
 * @Date 2022/9/13 11:19
 **/
// import _ from 'lodash';
// import './style.css';
// import Icon from './icon.jpg';
// import Data from './data.xml';
// import Notes from './data.csv';
import printMe from './print.js';

function component(){
// function getComponent() {
//     return import('lodash')
//         .then(({default: _}) => {
//             const element = document.createElement('div');
//
//             element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//             return element;
//         })
//         .catch((error) => 'An error occurred while loading the component');
    const element = document.createElement('div');
    // const btn = document.createElement('button');
    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');
    //
    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    // element.appendChild(btn);

    // 将图像添加到我们已经存在的 div 中。
    // const myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    // console.log(Data);
    // console.log(Notes);
    element.onclick = printMe.bind(null, 'Hello webpack!111');
    return element;
}

// document.body.appendChild(component())
// getComponent().then((component) => {
//     document.body.appendChild(component);
// });
