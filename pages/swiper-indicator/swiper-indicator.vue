<!--
 * hi-swiper-indicator - 轮播指示器
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__content">
                <hi-swiper :list="list" :autoplay="true">
                    <template #indicator="{ current }">
                        <hi-swiper-indicator :count="list.length" :current="current"></hi-swiper-indicator>
                    </template>
                </hi-swiper>
            </view>
        </view>

        <!-- 指示器位置 -->
        <view class="demo-module">
            <view class="demo-module__title">指示器位置 - 底部居左</view>
            <view class="demo-module__content">
                <hi-swiper :list="list" :autoplay="true">
                    <template #indicator="{ current }">
                        <hi-swiper-indicator :count="list.length" :current="current" position="bottom-left"></hi-swiper-indicator>
                    </template>
                </hi-swiper>
            </view>
        </view>

        <!-- 指示器位置 -->
        <view class="demo-module">
            <view class="demo-module__title">指示器位置 - 底部居右</view>
            <view class="demo-module__content">
                <hi-swiper :list="list" :autoplay="true">
                    <template #indicator="{ current }">
                        <hi-swiper-indicator :count="list.length" :current="current" position="bottom-right"></hi-swiper-indicator>
                    </template>
                </hi-swiper>
            </view>
        </view>

        <!-- 指示器位置 -->
        <view class="demo-module">
            <view class="demo-module__title">指示器位置 - 左边靠下</view>
            <view class="demo-module__content">
                <hi-swiper :list="list" :autoplay="true">
                    <template #indicator="{ current }">
                        <hi-swiper-indicator :count="list.length" :current="current" position="left-bottom"></hi-swiper-indicator>
                    </template>
                </hi-swiper>
            </view>
        </view>

        <!-- 指示器位置 -->
        <view class="demo-module">
            <view class="demo-module__title">指示器位置 - 左边居中</view>
            <view class="demo-module__content">
                <hi-swiper :list="list" :autoplay="true">
                    <template #indicator="{ current }">
                        <hi-swiper-indicator :count="list.length" :current="current" position="left-center"></hi-swiper-indicator>
                    </template>
                </hi-swiper>
            </view>
        </view>

        <!-- 指示器位置 -->
        <view class="demo-module">
            <view class="demo-module__title">指示器位置 - 右边靠下</view>
            <view class="demo-module__content">
                <hi-swiper :list="list" :autoplay="true">
                    <template #indicator="{ current }">
                        <hi-swiper-indicator :count="list.length" :current="current" position="right-bottom"></hi-swiper-indicator>
                    </template>
                </hi-swiper>
            </view>
        </view>

        <!-- 指示器位置 -->
        <view class="demo-module">
            <view class="demo-module__title">指示器位置 - 右边居中</view>
            <view class="demo-module__content">
                <hi-swiper :list="list" :autoplay="true">
                    <template #indicator="{ current }">
                        <hi-swiper-indicator :count="list.length" :current="current" position="right-center"></hi-swiper-indicator>
                    </template>
                </hi-swiper>
            </view>
        </view>

        <!-- 线类型指示器 -->
        <view class="demo-module">
            <view class="demo-module__title">线类型指示器</view>
            <view class="demo-module__content">
                <hi-swiper :list="list" :autoplay="true">
                    <template #indicator="{ current }">
                        <hi-swiper-indicator :count="list.length" :current="current" mode="line"></hi-swiper-indicator>
                    </template>
                </hi-swiper>
            </view>
        </view>

        <!-- 线类型指示器 -->
        <view class="demo-module">
            <view class="demo-module__title">线类型指示器</view>
            <view class="demo-module__content">
                <hi-swiper :list="list" :autoplay="true">
                    <template #indicator="{ current }">
                        <hi-swiper-indicator :count="list.length" :current="current" mode="line" position="left-center"></hi-swiper-indicator>
                    </template>
                </hi-swiper>
            </view>
        </view>
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

<style lang="scss" scoped>
    .demo-module {
    }
</style>
