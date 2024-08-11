<!--
 * hi-ui - 价格组件
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
                    <hi-price price="158"></hi-price>
                </view>
            </view>
        </view>

        <!-- 保留2位小数 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">保留2位小数</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-price price="158.00" fixed></hi-price>
                    <view class="gap"></view>
                    <hi-price price="111158.50" fixed></hi-price>
                    <view class="gap"></view>
                    <hi-price price="111158.58" fixed></hi-price>
                </view>
            </view>
        </view>

        <!-- 自动舍弃小数位末尾为0的位数 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">自动舍弃小数位末尾为0的位数</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-price price="111158.00"></hi-price>
                    <view class="gap"></view>
                    <hi-price price="111158.50"></hi-price>
                    <view class="gap"></view>
                    <hi-price price="111158.58"></hi-price>
                </view>
            </view>
        </view>

        <!-- 显示正负号 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">显示正负号</view>
            <view class="demo-module__tips">颜色会自动生效</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-price price="111158.00" symbol></hi-price>
                    <view class="gap"></view>
                    <hi-price price="-111158.50" symbol></hi-price>
                    <view class="gap"></view>
                    <hi-price price="111158.58" symbol></hi-price>
                </view>
            </view>
        </view>

        <!-- 删除线 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">删除线</view>
            <view class="demo-module__tips">颜色会自动生效</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-price price="111158.00" delete></hi-price>
                    <view class="gap"></view>
                    <hi-price price="-111158.50" symbol delete></hi-price>
                    <view class="gap"></view>
                    <hi-price price="111158.58" symbol delete></hi-price>
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
