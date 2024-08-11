<!--
 * hi-ui - 图片组件
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
                    <hi-image src="/static/images/temp.jpeg"></hi-image>
                </view>
            </view>
        </view>

        <!-- 加载状态 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">加载状态</view>
            <view class="demo-module__tips">请在模拟器中调低网速查看效果</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-image src="/static/images/temp.jpeg" class="loading-status"></hi-image>
                </view>
            </view>
        </view>

        <!-- 失败状态 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">失败状态</view>
            <view class="demo-module__tips">图片组件默认无背景，此处为了演示加了背景</view>
            <view class="demo-module__content">
                <view class="goods-list-item">
                    <hi-image src="/static/images/temp.jpedg" class="error-status"></hi-image>
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
        .error-status {
            background: #ffffff;
        }
    }
</style>
