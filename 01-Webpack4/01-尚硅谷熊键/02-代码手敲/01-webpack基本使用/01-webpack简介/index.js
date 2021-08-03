/*
 * @Author: liming
 * @Date: 2021-07-28 19:27:53
 * @LastEditTime: 2021-07-28 21:26:49
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\01-webpack简介\index.js
 */

//引入js资源
// 引入jquery

//引入其他资源... 
import $ from 'jquery';
$('#title').click(() => {
    $('body').css('background-color','deeppink')
})