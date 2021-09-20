/*
 * @Author: liming
 * @Date: 2021-07-28 19:16:38
 * @LastEditTime: 2021-09-20 19:16:44
 * @FilePath: \01-尚硅谷熊键\01-课程资料\01-代码\4.webpack优化环境配置\21.缓存\server.js
 */
/*
  服务器代码
  启动服务器指令：
    npm i nodemon -g
    nodemon server.js

    node server.js
  访问服务器地址：
    http://localhost:3000

*/
const express = require('express');

const app = express();
// express.static向外暴露静态资源
// maxAge 资源缓存的最大时间，单位ms
app.use(express.static('build', { maxAge: 1000 * 3600 }));

app.listen(3000);
