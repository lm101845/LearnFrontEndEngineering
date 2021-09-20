/*
 * @Author: liming
 * @Date: 2021-09-20 19:13:12
 * @LastEditTime: 2021-09-20 19:15:31
 * @FilePath: \01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\21-缓存\server.js
 */

// 服务器代码
// 启动服务器  nodemon server.js
const express = require('express')

const app = express()

app.use(express.static('build', { maxAge: 1000 * 3600 }))

app.listen(3005)