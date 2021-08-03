/*
 * @Author: liming
 * @Date: 2021-08-03 21:28:00
 * @LastEditTime: 2021-08-03 23:37:00
 * @FilePath: \01-Webpack4\01-尚硅谷熊键\02-代码手敲\01-webpack基本使用\03-打包样式资源\src\index.js
 */

//引入样式资源
import './index.css'
import './index.less'
/**
 *loader 用于对模块的源代码进行转换。loader 可以使你在 import 或 "load(加载)" 
 模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的得力方式。
 loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。
 【loader甚至允许你直接在 JavaScript 模块中 import CSS 文件】！
 */