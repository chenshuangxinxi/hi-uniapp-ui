<!--
 * HiUi - 状态栏
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-status-bar" :class="_classes" :style="_styles"></view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed, onMounted } from "vue";
    import props from "./props.js";
    import pages from "@/pages.json";
    import { getCurrentPageData } from "@/uni_modules/hi-functions";

    // 当前页面的数据
    const currentPageData = ref(null);

    // 组件属性
    const _props = defineProps(props);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];
        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 背景
        if (_props.bg) styles.push(`--hi-status-bar-background: ${_props.bg}`);

        // 高度
        if (_props.height) styles.push(`--hi-status-bar-height: ${_props.height}`);

        // 状态栏默认高度
        styles.push(`--hi-status-bar-height--default: ${uni.getSystemInfoSync().statusBarHeight}px`);

        // 状态栏默认背景色
        styles.push(
            `--hi-status-bar-background--default: ${
                currentPageData.value?.style?.navigationBarBackgroundColor ?? pages?.globalStyle?.navigationBarBackgroundColor
            }`
        );

        return styles;
    });

    // 获取页面数据
    onMounted(() => {
        currentPageData.value = getCurrentPageData();
    });
</script>

<style lang="scss" scoped>
    .hi-status-bar {
        height: var(--hi-status-bar-height, var(--hi-status-bar-height--default));
        background: var(--hi-status-bar-background, var(--hi-status-bar-background--default));
    }
</style>
