<!--
 * hi-ui - 页面头部组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-page-header" :class="_classes" :style="_styles">
        <!-- 状态栏 -->
        <template v-if="showStatusBar">
            <slot name="statusBar">
                <hi-status-bar v-bind="statusBarProps"></hi-status-bar>
            </slot>
        </template>

        <!-- 导航栏 -->
        <template v-if="showNavigationBar">
            <slot name="navigationBar">
                <hi-navigation-bar
                    v-bind="navigationBarProps"
                    @back="_emits('back')"
                    @leftClick="handleLeftClick"
                    @rightClick="handleRightClick"
                ></hi-navigation-bar>
            </slot>
        </template>
    </view>
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

    // 组件事件
    const _emits = defineEmits(["back", "leftClick", "rightClick"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];
        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 默认 Header 文字颜色
        styles.push(
            `--hi-page-header-color--default: ${currentPageData.value?.style?.navigationBarTextStyle ?? pages?.globalStyle?.navigationBarTextStyle};`
        );

        // 默认 Header 背景
        styles.push(
            `--hi-page-header-background--default: ${
                currentPageData.value?.style?.navigationBarBackgroundColor ?? pages?.globalStyle?.navigationBarBackgroundColor
            };`
        );

        return styles;
    });

    // 获取页面数据
    onMounted(() => {
        currentPageData.value = getCurrentPageData();
    });

    /**
     * 左边按钮点击事件
     * @param {Object} item 按钮数据
     * @param {Number} index 按钮下标
     */
    function handleLeftClick(item, index) {
        _emits("leftClick", item, index);
    }

    /**
     * 右边按钮点击事件
     * @param {Object} item 按钮数据
     * @param {Number} index 按钮下标
     */
    function handleRightClick(item, index) {
        _emits("rightClick", item, index);
    }

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-page-header {
        --hi-status-bar-background: var(--hi-page-header-status-bar-background, transparent);
        --hi-navigation-bar-background: var(--hi-page-header-navigation-bar-background, transparent);

        background: var(--hi-page-header-background, var(--hi-page-header-background--default));
        color: var(--hi-page-header-color, var(--hi-page-header-color--default));
        position: var(--hi-page-header-position, sticky);
        top: var(--hi-page-header-top, 0px);
        z-index: var(--hi-page-header-index, var(--hi-index-middle, 1688));
    }
</style>
