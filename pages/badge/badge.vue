<!--
 * hi-badge - 徽标数
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__tips">默认值为0时不显示，需配置 showZero 为 true 才会显示</view>
            <view class="demo-module__content">
                <hi-badge :value="0" showZero></hi-badge>
                <hi-badge :value="99" theme="primary"></hi-badge>
                <hi-badge :value="199" theme="success"></hi-badge>
                <hi-badge :value="999" theme="warning"></hi-badge>
                <hi-badge :value="1999" theme="error"></hi-badge>
                <hi-badge :value="19999" theme="info"></hi-badge>
            </view>
        </view>

        <!-- 圆点模式 -->
        <view class="demo-module">
            <view class="demo-module__title">圆点模式</view>
            <view class="demo-module__content">
                <hi-badge mode="dot"></hi-badge>
                <hi-badge mode="dot" theme="primary"></hi-badge>
                <hi-badge mode="dot" theme="success"></hi-badge>
                <hi-badge mode="dot" theme="warning"></hi-badge>
                <hi-badge mode="dot" theme="error"></hi-badge>
                <hi-badge mode="dot" theme="info"></hi-badge>
            </view>
        </view>

        <!-- overflow 模式 -->
        <view class="demo-module">
            <view class="demo-module__title">overflow 模式</view>
            <view class="demo-module__tips">max 的值默认为 99</view>
            <view class="demo-module__content">
                <hi-badge :value="99" mode="overflow"></hi-badge>
                <hi-badge :value="199" mode="overflow" theme="primary"></hi-badge>
            </view>
        </view>

        <!-- ellipsis 模式 -->
        <view class="demo-module">
            <view class="demo-module__title">ellipsis 模式</view>
            <view class="demo-module__tips">max 的值默认为 99</view>
            <view class="demo-module__content">
                <hi-badge :value="99" mode="ellipsis"></hi-badge>
                <hi-badge :value="199" mode="ellipsis" theme="primary"></hi-badge>
            </view>
        </view>

        <!-- limit 模式 -->
        <view class="demo-module">
            <view class="demo-module__title">limit 模式</view>
            <view class="demo-module__tips">limit 的分割值默认为 1000，limit 分割后的后缀默认为 k</view>
            <view class="demo-module__content">
                <hi-badge :value="1999" mode="limit"></hi-badge>
                <hi-badge :value="19999" mode="limit" theme="primary"></hi-badge>
                <hi-badge :value="19999" mode="limit" theme="success" suffix="千"></hi-badge>
                <hi-badge :value="19999" mode="limit" theme="warning" suffix="w"></hi-badge>
                <hi-badge :value="19999" mode="limit" theme="error" suffix="万"></hi-badge>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .demo-module {
        &__content {
            display: flex;
            flex-wrap: wrap;
            gap: 30rpx;
        }

        .hi-badge {
            position: static;
        }
    }
</style>
