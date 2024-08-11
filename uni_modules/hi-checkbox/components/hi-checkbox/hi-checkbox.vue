<!--
 * hi-ui - 滚动通知组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-checkbox" :class="_classes" :style="_styles" @tap="handleClick">
        <hi-icon class="hi-checkbox__icon" :name="iconName" v-bind="iconProps"></hi-icon>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed, watch, nextTick } from "vue";
    import props from "./props.js";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits(["change", "update:modelValue"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 是否禁用
        if (_props.disabled) classes.push(`hi-checkbox--disabled`);

        // 是否镂空
        if (_props.plain) classes.push(`hi-checkbox--plain`);

        // 是否选中
        if (_isChecked.value) classes.push(`hi-checkbox--checked`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 主题
        if (_props.theme) styles.push(`--hi-checkbox-theme-color: var(--hi-theme-${_props.theme})`);

        // 大小
        if (_props.size) styles.push(`--hi-checkbox-size: ${_props.size}`);

        return styles;
    });

    // 是否选中
    const _isChecked = computed(() => {
        // 单独使用时
        if (_props.alone) return _props.modelValue;

        // 组合使用时
        // TODO
    });

    /**
     * 点击事件
     */
    function handleClick() {
        // 单独使用时
        if (_props.alone) {
            // 开启了异步变更
            if (_props.async) {
                _emits("change", _props.modelValue);
                return;
            }

            // 未开启异步变更
            _emits("update:modelValue", !_props.modelValue);
        }

        // 组合使用时
        // TODO
    }
</script>

<style lang="scss" scoped>
    .hi-checkbox {
        display: inline-flex;
        border-width: var(--hi-checkbox-border-width, 1px);
        border-style: var(--hi-checkbox-border-style, solid);
        border-color: var(--hi-checkbox-border-color, var(--hi-checkbox-theme-color, var(--hi-border-color-default)));
        border-radius: var(--hi-checkbox-border-radius, var(--hi-radius-middle));
        overflow: hidden;
        width: var(--hi-checkbox-size, 1.5em);
        height: var(--hi-checkbox-size, 1.5em);
        align-items: center;
        justify-content: center;

        &__icon {
            --hi-icon-color: var(--hi-checkbox-icon-color);
            --hi-icon-size: var(--hi-checkbox-icon-size);
            opacity: 0;
            transform: scale(0);
            transition: 100ms ease-in-out;
        }

        &--checked {
            background: var(--hi-checkbox-background, var(--hi-checkbox-theme-color, #999999));
            color: var(--hi-checkbox-icon-color, #ffffff);

            .hi-checkbox__icon {
                opacity: 1;
                transform: scale(1);
            }
        }

        &--plain {
            background: transparent;

            &.hi-checkbox--checked {
                color: var(--hi-checkbox-icon-color, var(--hi-checkbox-theme-color));
            }
        }

        &--disabled {
            opacity: var(--hi-opacity-disabled);
            pointer-events: none;
        }
    }
</style>
