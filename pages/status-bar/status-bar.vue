<!--
 * hi-ui - 状态栏组件演示页面
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__tips">状态栏默认高度：`${uni.getSystemInfoSync().statusBarHeight}px`</view>
            <view class="demo-module__tips">
                状态栏默认背景：`pages.json -> 页面设置 -> navigationBarBackgroundColor` -> `pages.json -> globalStyle -> navigationBarBackgroundColor`
            </view>
            <view class="demo-module__tips">
                提示：在 H5 端因为状态栏高度为 0，此处为了演示，在 H5 端打开时设置了一个固定高度，如需查看实际效果，需运行到其他端查看
            </view>
            <view class="demo-module__content">
                <hi-status-bar class="status-bar"></hi-status-bar>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .demo-module {
        .status-bar {
            // #ifdef H5
            --hi-status-bar-height: 50px;
            // #endif
        }
    }
</style>
