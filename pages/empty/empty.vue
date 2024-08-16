<!--
 * HiUi - 内容为空
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
                <hi-empty></hi-empty>
            </view>
        </view>

        <!-- 显示按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">显示按钮</view>
            <view class="demo-module__content">
                <hi-empty showBtn></hi-empty>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .demo-module {
        .hi-empty {
            background: #ffffff;
        }
    }
</style>
