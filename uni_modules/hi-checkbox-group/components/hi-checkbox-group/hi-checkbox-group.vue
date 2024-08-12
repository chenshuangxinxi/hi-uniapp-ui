<!--
 * HiUi - 复选框组
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-checkbox-group" :class="_classes" :style="_styles">
        <slot></slot>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed, provide } from "vue";
    import props from "./props.js";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits(["change", "asyncChange", "update:modelValue"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];
        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 间距
        if (_props.gap) styles.push(`--hi-checkbox-group-gap: ${_props.gap}`);

        return styles;
    });

    // 向子组件提供复选框组选中的值
    provide(
        "hiCheckBoxGroupValues",
        computed(() => _props.modelValue)
    );

    /**
     * 更新选中的值
     */
    function updateValues(value) {
        // 当前值是否已被选中
        const isChecked = _props.modelValue.includes(value);

        // 异步变更
        if (_props.async) {
            _emits("asyncChange", value, isChecked);
            return;
        }

        // 同步变更
        // 当前值是选中状态
        if (isChecked) {
            const newValues = _props.modelValue.filter((v) => v !== value);
            _emits("change", newValues);
            _emits("update:modelValue", newValues);
            return;
        }

        // 当前值是未选中状态
        const newValues = _props.modelValue.concat(value);
        _emits("change", newValues);
        _emits("update:modelValue", newValues);
    }

    // 将更新函数提供给子组件
    provide("hiCheckBoxGroupUpdateValues", updateValues);
</script>

<style lang="scss" scoped>
    .hi-checkbox-group {
        display: flex;
        flex-wrap: wrap;
        gap: var(--hi-checkbox-group-gap, 10px);
    }
</style>
