<!--
 * hi-ui - 内容为空组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__tips">默认组件是无背景的，此处为了演示效果加了背景</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-empty></hi-empty>
                </view>
            </view>
        </view>

        <!-- 显示按钮 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">显示按钮</view>
            <view class="demo-module__tips">默认组件是无背景的，此处为了演示效果加了背景</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-empty btnShow></hi-empty>
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
        .gap {
            height: 10px;
        }

        .hi-empty {
            background: #ffffff;
        }
    }
</style>
