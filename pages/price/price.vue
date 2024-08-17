<!--
 * hi-price - 价格
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
                <hi-price value="158"></hi-price>
            </view>
        </view>

        <!-- 保留2位小数 -->
        <view class="demo-module">
            <view class="demo-module__title">保留2位小数</view>
            <view class="demo-module__content">
                <hi-price value="158" fixed></hi-price>
                <view class="gap"></view>
                <hi-price value="158.00" fixed></hi-price>
                <view class="gap"></view>
                <hi-price value="111158.50" fixed></hi-price>
                <view class="gap"></view>
                <hi-price value="111158.58" fixed></hi-price>
            </view>
        </view>

        <!-- 自动舍弃小数位末尾为0的位数 -->
        <view class="demo-module">
            <view class="demo-module__title">自动舍弃小数位末尾为0的位数</view>
            <view class="demo-module__content">
                <hi-price value="111158.00"></hi-price>
                <view class="gap"></view>
                <hi-price value="111158.50"></hi-price>
                <view class="gap"></view>
                <hi-price value="111158.58"></hi-price>
            </view>
        </view>

        <!-- 删除线 -->
        <view class="demo-module">
            <view class="demo-module__title">删除线</view>
            <view class="demo-module__content">
                <hi-price value="111158.00" showDelete></hi-price>
                <view class="gap"></view>
                <hi-price value="-111158.50" showDelete></hi-price>
                <view class="gap"></view>
                <hi-price value="111158.58" showDelete></hi-price>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .demo-module {
        .gap {
            height: 10px;
        }
    }
</style>
