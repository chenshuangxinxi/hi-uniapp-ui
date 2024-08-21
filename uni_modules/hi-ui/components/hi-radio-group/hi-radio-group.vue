<!--
 * hi-radio-group - 单选框组
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-radio-group" :class="_classes" :style="_styles">
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
        return styles;
    });

    // 向子组件提供复选框组选中的值
    provide(
        "hiRadioGroupValue",
        computed(() => _props.modelValue)
    );

    /**
     * 更新选中的值
     */
    function updateValue(value) {
        // 值相同，不用更新
        if (_props.modelValue === value) return;

        // 异步变更
        if (_props.async) {
            _emits("asyncChange", value);
            return;
        }

        // 同步变更
        _emits("change", value);
        _emits("update:modelValue", value);
    }

    // 将更新函数提供给子组件
    provide("hiRadioGroupUpdateValue", updateValue);
</script>

<style lang="scss" scoped>
    .hi-radio-group {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>
