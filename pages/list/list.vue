<!--
 * hi-list - 列表
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__tips">默认两列</view>
            <view class="demo-module__content">
                <hi-list>
                    <view class="item" v-for="i in 6" :key="i">列表项</view>
                </hi-list>
            </view>
        </view>

        <!-- 设置列数 -->
        <view class="demo-module">
            <view class="demo-module__title">设置列数</view>
            <view class="demo-module__content">
                <hi-list columns="4">
                    <view class="item" v-for="i in 6" :key="i">列表项</view>
                </hi-list>
            </view>
        </view>

        <!-- 设置间距 -->
        <view class="demo-module">
            <view class="demo-module__title">设置间距</view>
            <view class="demo-module__content">
                <hi-list columns="3" gap="20rpx">
                    <view class="item" v-for="i in 6" :key="i">列表项</view>
                </hi-list>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .item {
        height: 120px;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
    }
</style>
