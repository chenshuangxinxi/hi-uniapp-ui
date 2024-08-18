<!--
 * hi-ui - 扩展组件 - 按钮组合
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- Apple -->
        <view class="demo-module">
            <view class="demo-module__title">Apple</view>
            <view class="demo-module__content">
                <zz-button-group-apple></zz-button-group-apple>
            </view>
        </view>

        <!-- Bamboo -->
        <view class="demo-module">
            <view class="demo-module__title">Bamboo</view>
            <view class="demo-module__content">
                <zz-button-group-bamboo :price="158" @click="handleBambooButtonClick"></zz-button-group-bamboo>
            </view>
        </view>

        <!-- Cherry -->
        <view class="demo-module">
            <view class="demo-module__title">Cherry</view>
            <view class="demo-module__content">
                <zz-button-group-cherry></zz-button-group-cherry>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    /**
     * Bamboo 去结算
     */
    function handleBambooButtonClick() {
        uni.showToast({
            title: "结算成功",
            icon: "success",
            mask: true
        });
    }
</script>

<style lang="scss" scoped>
    .zz-button-group-bamboo {
        padding: 20rpx;
        background: #ffffff;
    }
</style>
