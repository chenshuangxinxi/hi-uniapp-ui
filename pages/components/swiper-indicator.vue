<!--
 * hi-swiper-indicator - 轮播指示器
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用">
            <hi-swiper :list="list" autoplay>
                <template #indicator="{ current }">
                    <hi-swiper-indicator :count="list.length" :current="current"></hi-swiper-indicator>
                </template>
            </hi-swiper>
        </module-demo>

        <!-- 指示器位置 -->
        <module-demo title="指示器位置">
            <!-- bottom-left -->
            <hi-swiper :list="list" autoplay>
                <template #indicator="{ current }">
                    <hi-swiper-indicator :count="list.length" :current="current" position="bottom-left"></hi-swiper-indicator>
                </template>
            </hi-swiper>

            <!-- bottom-right -->
            <hi-swiper :list="list" autoplay>
                <template #indicator="{ current }">
                    <hi-swiper-indicator :count="list.length" :current="current" position="bottom-right"></hi-swiper-indicator>
                </template>
            </hi-swiper>

            <!-- left-bottom -->
            <hi-swiper :list="list" autoplay>
                <template #indicator="{ current }">
                    <hi-swiper-indicator :count="list.length" :current="current" position="left-bottom"></hi-swiper-indicator>
                </template>
            </hi-swiper>

            <!-- left-center -->
            <hi-swiper :list="list" autoplay>
                <template #indicator="{ current }">
                    <hi-swiper-indicator :count="list.length" :current="current" position="left-center"></hi-swiper-indicator>
                </template>
            </hi-swiper>

            <!-- right-bottom -->
            <hi-swiper :list="list" autoplay>
                <template #indicator="{ current }">
                    <hi-swiper-indicator :count="list.length" :current="current" position="right-bottom"></hi-swiper-indicator>
                </template>
            </hi-swiper>

            <!-- right-center -->
            <hi-swiper :list="list" autoplay>
                <template #indicator="{ current }">
                    <hi-swiper-indicator :count="list.length" :current="current" position="right-center"></hi-swiper-indicator>
                </template>
            </hi-swiper>
        </module-demo>

        <!-- 指示器类型 -->
        <module-demo title="指示器类型">
            <hi-swiper :list="list" autoplay>
                <template #indicator="{ current }">
                    <hi-swiper-indicator :count="list.length" :current="current" mode="line"></hi-swiper-indicator>
                </template>
            </hi-swiper>
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
