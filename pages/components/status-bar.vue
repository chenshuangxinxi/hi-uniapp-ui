<!--
 * hi-status-br - 状态栏
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo
            title="基础使用"
            :tips="[
                '默认高度：uni.getSystemInfoSync().statusBarHeight',
                '默认背景：首先查找在 pages.json 中为页面配置的 navigationBarBackgroundColor，如果未配置，则查找在 pages.json 中全局配置的 navigationBarBackgroundColor',
                '在 H5 端因为状态栏高度为 0，此处为了演示，在 H5 端设置了一个固定高度，如需查看实际效果，需运行到其他端查看'
            ]"
        >
            <hi-status-bar class="status-bar"></hi-status-bar>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .status-bar.hi-status-bar {
        width: 100%;

        // #ifdef H5
        height: 50px;
        background: var(--hi-theme-main);
        // #endif
    }
</style>
