<!--
 * hi-tag - 标签
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
                <hi-tag text="标签"></hi-tag>
            </view>
        </view>

        <!-- 带图标 -->
        <view class="demo-module">
            <view class="demo-module__title">带图标</view>
            <view class="demo-module__content">
                <hi-tag text="标签" iconName="douyin"></hi-tag>
            </view>
        </view>

        <!-- 显示关闭按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">显示关闭按钮</view>
            <view class="demo-module__content">
                <hi-tag text="标签" showClose @close="handleClose(1)"></hi-tag>
                <hi-tag text="标签" showClose iconName="weixin" @close="handleClose"></hi-tag>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    /**
     * 关闭按钮点击事件
     * @param {Number} order 关闭按钮的序号
     */
    function handleClose(order) {
        uni.showToast({
            title: `点击了标签的关闭按钮`,
            icon: "none"
        });
    }
</script>

<style lang="scss" scoped>
    .demo-module {
        &__content {
            display: flex;
            flex-wrap: wrap;
            gap: 20rpx;
        }
    }
</style>
