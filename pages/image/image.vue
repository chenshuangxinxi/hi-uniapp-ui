<!--
 * HiUi - 图片
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
                <view class="goods-list-item">
                    <hi-image src="/static/images/temp.jpeg"></hi-image>
                </view>
            </view>
        </view>

        <!-- 加载状态 -->
        <view class="demo-module">
            <view class="demo-module__title">加载状态</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-image src="/static/images/temp.jpeg" class="loading-status"></hi-image>
                </view>
            </view>
        </view>

        <!-- 失败状态 -->
        <view class="demo-module">
            <view class="demo-module__title">失败状态</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-image src="/static/images/temp.jpedg" class="error-status" errorText="图片加载失败啦~"></hi-image>
                </view>
            </view>
        </view>

        <!-- 圆形图片 -->
        <view class="demo-module">
            <view class="demo-module__title">圆形图片</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-image src="/static/images/temp.jpeg" circle></hi-image>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .demo-module {
        .error-status {
            background: #ffffff;
        }
    }
</style>
