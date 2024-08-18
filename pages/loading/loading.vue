<!--
 * hi-loading - 加载
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
                <hi-loading></hi-loading>
            </view>
        </view>

        <!-- 加载文字 -->
        <view class="demo-module">
            <view class="demo-module__title">加载文字</view>
            <view class="demo-module__content">
                <hi-loading text="加载中..."></hi-loading>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .demo-module {
    }
</style>
