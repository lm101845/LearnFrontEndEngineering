/**
 * @Author liming
 * @Date 2022/12/4 13:02
 **/
import _ from 'lodash'

console.log(_)
/**在默认的情况下，我们的esmodule去导入资源的时候，要么是绝对路径，要么是相对路径
 * 报错：Failed to resolve module specifier "lodash". Relative references must start with
 * either "/", "./", o
 * 你没有给一个具体路径(相对或绝对)，只给了一个名字叫lodash，浏览器就不知道从哪里找(它没有那么聪明，自己去node_modules里面找)
 */

export const count = 0;
/**
 * 问：既然我们现在的最佳实践就是node_modules，那么为什么ES官方在我们导入非绝对路径或者非相对路径的资源的时候，
 * 不默认帮我们搜寻node_modules呢？
 *
 * 答：假设浏览器做了这个事情，将会发生什么情况呢？
 * ——它会发现Lodash,然后发现Lodash里面又依赖了别的东西，它又要导入。。。那浏览器就日了狗了。。。。。。
 * 太消耗网络资源了
 *
 * 再问：那为什么common.js可以呢？
 * 再答：因为common.js是运行在服务端的，你去找node_modules，不是通过网络请求去找的，
 * 而是通过直接读本地的文件拿到的
 */
