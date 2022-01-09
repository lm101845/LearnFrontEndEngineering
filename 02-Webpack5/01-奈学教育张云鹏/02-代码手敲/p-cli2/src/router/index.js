/*
 * @Author: liming
 * @Date: 2022-01-09 19:29:21
 * @LastEditTime: 2022-01-09 20:46:09
 * @FilePath: \p-cli2\src\router\index.js
 */

// 我们需要做的事情是：减少请求发送的数量(不能一个页面就打一个包)，并且让包的【体积】合理化。
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
// import About from '@/views/About'

//推荐首页同步加载，其他页面异步加载，不要所有路由都异步加载
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        //这种是同步加载
    },
    {
        path: '/about',
        name: 'About',
        // component:About
        // 一般大文件我们用Prefetch预加载比较好，不是所有的地方用Prefetch就好
        component: () =>
            /* webpackChunkName: "about" */
            /* webpackPrefetch: true */
            import ('@/views/About'),
        //import这种是异步加载，它的作用是不直接参与网页的默认加载
        // 当路由访问到/about页面之后才会去加载这个模块的源代码
    },
    {
        path: '/page1',
        name: 'Page1',
        component: () =>
            /* webpackChunkName: "page" */
            /* webpackPrefetch: true */
            import ('@/views/Page1'),
    },
    {
        path: '/page2',
        name: 'Page2',
        component: () =>
            /* webpackChunkName: "page" */
            /* webpackPrefetch: true */
            import ('@/views/Page2'),
    },
    {
        path: '/page3',
        name: 'Page3',
        component: () =>
            /* webpackChunkName: "page" */
            /* webpackPrefetch: true */
            import ('@/views/Page3'),
    },
]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router