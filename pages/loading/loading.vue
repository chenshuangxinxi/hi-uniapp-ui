<!--
 * hi-ui - loading - 加载组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-loading></hi-loading>
                </view>
            </view>
        </view>

        <!-- 加载文字 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">加载文字</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-loading text="加载中..."></hi-loading>
                </view>
            </view>
        </view>

        <!-- 布局方向 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">布局方向</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-loading text="加载中..." direction="column"></hi-loading>
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
    }
</style>
