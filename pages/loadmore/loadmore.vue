<!--
 * HiUi - loadmore - 加载更多
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
                <hi-loadmore></hi-loadmore>
            </view>
        </view>

        <!-- 正在加载 -->
        <view class="demo-module">
            <view class="demo-module__title">正在加载</view>
            <view class="demo-module__content">
                <hi-loadmore status="loading"></hi-loadmore>
            </view>
        </view>

        <!-- 没有更多 -->
        <view class="demo-module">
            <view class="demo-module__title">没有更多</view>
            <view class="demo-module__content">
                <hi-loadmore status="nomore"></hi-loadmore>
            </view>
        </view>

        <!-- 纵向布局 -->
        <view class="demo-module">
            <view class="demo-module__title">纵向布局</view>
            <view class="demo-module__content">
                <hi-loadmore status="loading" direction="column"></hi-loadmore>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .demo-module {
        .hi-loadmore {
            background: #ffffff;
        }
    }
</style>
