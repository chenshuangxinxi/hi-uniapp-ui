<!--
 * hi-swiper - 轮播
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用" tips="就是一个最基础的数据驱动的轮播组件">
            <hi-swiper :list="list" :autoplay="true" indicatorDots></hi-swiper>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 轮播数据
    const list = ref([
        { id: 1, url: "/static/images/temp.jpeg" },
        { id: 2, url: "/static/images/temp.jpeg" },
        { id: 3, url: "/static/images/temp.jpeg" },
        { id: 4, url: "/static/images/temp.jpeg" },
        { id: 5, url: "/static/images/temp.jpeg" }
    ]);
</script>

<style lang="scss" scoped></style>
