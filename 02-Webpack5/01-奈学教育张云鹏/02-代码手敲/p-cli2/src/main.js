/*
 * @Author: liming
 * @Date: 2022-01-09 19:00:49
 * @LastEditTime: 2022-01-09 19:05:46
 * @FilePath: \p-cli2\src\main.js
 */

import Vue from 'vue'
import App from './App'
import router from '@/router'
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')