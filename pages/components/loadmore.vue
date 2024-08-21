<!--
 * hi-loadmore - 加载更多
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用">
            <hi-loadmore status="loadmore"></hi-loadmore>
        </module-demo>

        <!-- 正在加载 -->
        <module-demo title="正在加载">
            <hi-loadmore status="loading"></hi-loadmore>
        </module-demo>

        <!-- 正在加载 -->
        <module-demo title="正在加载">
            <hi-loadmore status="nomore"></hi-loadmore>
        </module-demo>

        <!-- 自定义提示内容 -->
        <module-demo title="正在加载">
            <hi-loadmore status="loadmore" loadmoreText="上拉加载更多"></hi-loadmore>
            <hi-loadmore status="loading" loadingText="正在努力加载中..."></hi-loadmore>
            <hi-loadmore status="nomore" nomoreText="已经加载全部数据啦~"></hi-loadmore>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped></style>
