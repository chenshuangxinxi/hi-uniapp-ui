<!--
 * hi-ui - 页头组件演示页面
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <view class="block"></view>

        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__tips">默认左侧的返回按钮会自动判断是否显示。</view>
            <view class="demo-module__tips">默认 header 标题为在 pages.json 中配置的页面标题。</view>
            <view class="demo-module__tips">默认 header 背景色为在 pages.json 中配置的页面背景色。</view>
            <view class="demo-module__tips">默认自动吸附到顶部。</view>
            <view class="demo-module__tips">提示：如果想让 header 自动吸附到顶部，需要将 header 放到根元素下，否则吸附效果会失效。</view>
        </view>

        <hi-page-header></hi-page-header>
        <view class="gap"></view>

        <!-- 自定义标题演示 -->
        <view class="demo-module">
            <view class="demo-module__title">自定义标题演示</view>
            <view class="demo-module__tips">也可以通过 `navigationBarProps` 属性配置自定义标题和导航栏的其它属性。</view>
        </view>

        <hi-page-header :navigationBarProps="{ title: '我是自定义标题' }"></hi-page-header>

        <view class="block" v-for="i in 20" :key="i"></view>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .block {
        height: 88px;
        background: #f8f8f8;
        margin: 20px 0;
    }

    .gap {
        height: 20px;
    }

    .demo-module {
        margin-bottom: 0rpx;

        &__content {
            overflow: auto;
        }
    }
</style>
