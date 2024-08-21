<!--
 * hi-list - 列表
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-list" :class="_classes" :style="_styles">
        <view class="hi-list__items" v-if="!!length">
            <slot></slot>
        </view>

        <!-- 空数据 -->
        <view class="hi-list__empty" v-if="showEmpty && !length && !!loadmoreStatus">
            <hi-empty v-bind="emptyOpts"></hi-empty>
        </view>

        <!-- 加载状态 -->
        <view class="hi-list__loadmore" v-else-if="showLoadmore && !!loadmoreStatus">
            <hi-loadmore :status="loadmoreStatus" v-bind="loadmoreOpts"></hi-loadmore>
        </view>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { computed } from "vue";
    import props from "./props.js";

    // props
    const _props = defineProps(props);

    // classes
    const _classes = computed(() => {
        const classes = [];
        return classes;
    });

    // styles
    const _styles = computed(() => {
        const styles = [];

        // 列数
        if (_props.columns) styles.push(`--hi-list-columns: ${_props.columns};`);

        // 行列间距
        if (_props.gap) styles.push(`--hi-list-row-gap: ${_props.gap}; --hi-list-column-gap: ${_props.gap};`);

        // 行间距
        if (_props.rowGap) styles.push(`--hi-list-row-gap: ${_props.rowGap};`);

        // 列间距
        if (_props.columnGap) styles.push(`--hi-list-column-gap: ${_props.columnGap};`);

        return styles;
    });
</script>

<style lang="scss" scoped>
    .hi-list {
        &__items {
            display: grid;
            grid-template-columns: repeat(var(--hi-list-columns, 1), 1fr);
            row-gap: var(--hi-list-row-gap, 20rpx);
            column-gap: var(--hi-list-column-gap, 20rpx);
        }

        &__loadmore {
            margin-top: 20px;
        }
    }
</style>
