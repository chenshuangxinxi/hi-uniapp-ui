<!--
 * hi-ui - 轮播组件演示页面
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__content">
                <hi-swiper :list="list" :autoplay="true"></hi-swiper>
            </view>
        </view>

        <!-- 指示器在外部 -->
        <view class="demo-module demo-module--outside">
            <view class="demo-module__title">指示器在外部</view>
            <view class="demo-module__content">
                <hi-swiper :list="list" :autoplay="true"></hi-swiper>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 轮播数据
    const list = ref([
        { id: 1, url: "/static/images/zgm.jpg" },
        { id: 2, url: "/static/images/zgm.jpg" },
        { id: 3, url: "/static/images/zgm.jpg" },
        { id: 4, url: "/static/images/zgm.jpg" },
        { id: 5, url: "/static/images/zgm.jpg" }
    ]);
</script>

<style lang="scss" scoped>
    .demo-module {
        &--outside {
            .hi-swiper {
                --hi-swiper-dots-bottom: -40rpx;
                --hi-swiper-dot-color: var(--hi-theme-info);
            }
        }
    }
</style>
