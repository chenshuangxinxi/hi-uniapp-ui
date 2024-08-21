<!--
 * module-menu - 菜单模块
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="module-menu" :class="_classes" :style="_styles">
        <view class="module-menu__header" v-if="title">{{ title }}</view>
        <view class="module-menu__body">
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
</script>

<style lang="scss" scoped>
    .module-menu {
        margin-bottom: 30px;

        &__header {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        &__body {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
</style>
