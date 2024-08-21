<!--
 * module-demo - 演示模块
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="module-demo" :class="_classes" :style="_styles">
        <view class="module-demo__header" v-if="title">{{ title }}</view>
        <view class="module-demo__tips" v-if="_tips">
            <view class="module-demo__tips__item" v-for="item in _tips" :key="item">{{ item }}</view>
        </view>
        <view class="module-demo__body">
            <slot></slot>
        </view>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed } from "vue";
    import props from "./props.js";

    // 组件属性
    const _props = defineProps(props);

    // 事件
    const _emits = defineEmits([""]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];
        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];
        return styles;
    });

    // 提示
    const _tips = computed(() => {
        if (typeof _props.tips === "string") return [_props.tips];
        return _props.tips;
    });
</script>

<style lang="scss" scoped>
    .module-demo {
        margin-bottom: 30px;

        &__header {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        &__tips {
            font-size: 13px;
            color: var(--hi-color-light);
            margin-bottom: 10px;
            gap: 10px;
            display: flex;
            flex-direction: column;
            text-align: justify;
        }

        &__body {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
        }
    }
</style>
