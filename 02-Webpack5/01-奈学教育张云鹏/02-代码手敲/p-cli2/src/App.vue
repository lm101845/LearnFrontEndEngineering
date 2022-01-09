<!--
 * @Author: liming
 * @Date: 2022-01-09 19:06:21
 * @LastEditTime: 2022-01-09 20:12:51
 * @FilePath: \p-cli2\src\App.vue
-->
<template>
    <div>
        <router-link to='/'>
            首页
        </router-link>

        <router-link to='/about'>
            首页
        </router-link>

        <router-link to='/page1'>
            页面1
        </router-link>

        <router-link to='/page2'>
            页面2
        </router-link>

        <router-link to='/page3'>
            页面3
        </router-link>
        <br />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
        title: 'Hello Vue!'
        };
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style scoped>
</style>

