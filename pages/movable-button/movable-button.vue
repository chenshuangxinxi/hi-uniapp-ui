<!--
 * hi-movable-button - 可拖动按钮
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 使用说明 -->
        <view class="demo-module">
            <view class="demo-module__title">使用说明</view>
            <view class="demo-module__tips">按钮默认大小为 88rpx * 88rpx</view>
            <view class="demo-module__tips">通过 position 属性设置按钮的默认位置</view>
            <view class="demo-module__tips">通过 text 属性设置按钮文字</view>
            <view class="demo-module__content"></view>
        </view>

        <hi-movable-button></hi-movable-button>
        <hi-movable-button text="主页" position="left-center">
            <template #other>
                <hi-badge :value="9"></hi-badge>
            </template>
        </hi-movable-button>
        <hi-movable-button text="主页" position="center-center" showBadge :badgeValue="8"></hi-movable-button>
        <hi-movable-button text="主页" position="left-top"></hi-movable-button>
        <hi-movable-button text="主页" position="left-bottom"></hi-movable-button>
        <hi-movable-button text="主页" position="right-top"></hi-movable-button>
        <hi-movable-button text="主页" position="right-bottom"></hi-movable-button>
        <hi-movable-button text="主页" position="center-top"></hi-movable-button>
        <hi-movable-button text="主页" position="center-bottom"></hi-movable-button>
    </view>
</template>

<script setup>
    import { ref, getCurrentInstance } from "vue";
    import { onReady } from "@dcloudio/uni-app";
</script>

<style lang="scss" scoped>
    .demo-module {
    }
</style>
