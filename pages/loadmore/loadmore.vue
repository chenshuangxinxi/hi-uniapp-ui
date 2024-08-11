<!--
 * hi-ui - loadmore 加载更多组件
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
                <hi-loadmore></hi-loadmore>
                <view class="gap"></view>
                <hi-loadmore status="loading"></hi-loadmore>
                <view class="gap"></view>
                <hi-loadmore status="nomore"></hi-loadmore>
                <view class="gap"></view>
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

        .hi-loadmore {
            background: #f8f8f8;
        }
    }
</style>
