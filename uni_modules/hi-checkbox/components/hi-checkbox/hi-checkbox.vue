<!--
 * HiUi - 复选框
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-checkbox" :class="_classes" :style="_styles" :hoverClass="hoverClass" @tap="handleClick">
        <view class="hi-checkbox__value">
            <hi-icon class="hi-checkbox__icon" :name="iconName" :size="iconSize" :color="iconColor" :mode="iconMode"></hi-icon>
        </view>
        <view class="hi-checkbox__label" v-if="label !== undefined">
            <slot>{{ label }}</slot>
        </view>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed, inject } from "vue";
    import props from "./props.js";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits(["change", "asyncChange", "update:modelValue"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 是否禁用
        if (_props.disabled) classes.push(`hi-disabled hi-checkbox--disabled`);

        // 主题
        if (_props.theme) classes.push(`hi-checkbox--theme hi-checkbox--theme--${_props.theme}`);

        // 镂空
        if (_props.plain) classes.push(`hi-checkbox--plain`);

        // 选中
        if (_isChecked.value) classes.push(`hi-checkbox--checked`);

        // 圆形
        if (_props.circle) classes.push(`hi-checkbox--circle`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 大小
        if (_props.size) styles.push(`--hi-checkbox-size: ${_props.size}`);

        // 背景
        if (_props.color) styles.push(`--hi-checkbox-background: ${_props.color}`);
        if (_props.activeColor) styles.push(`--hi-checkbox-active-background: ${_props.activeColor}`);

        // 边框颜色
        if (_props.borderColor) styles.push(`--hi-checkbox-border-color: ${_props.borderColor}`);
        if (_props.activeBorderColor) styles.push(`--hi-checkbox-active-border-color: ${_props.activeBorderColor}`);

        // 主题
        if (_props.theme) styles.push(`--hi-checkbox-theme: var(--hi-theme-${_props.theme})`);

        // 圆角
        if (_props.radius) styles.push(`--hi-checkbox-border-radius: ${_props.radius}`);

        return styles;
    });

    // 复选框组选中的值
    const groupValues = inject("hiCheckBoxGroupValues", ref([]));

    // 是否选中
    const _isChecked = computed(() => {
        // 单独使用时
        if (_props.alone) return _props.modelValue;

        // 组合使用时
        return groupValues.value.includes(_props.value);
    });

    // 复选框组的值更新函数
    const updateGroupValues = inject("hiCheckBoxGroupUpdateValues", () => {});

    /**
     * 点击事件
     */
    function handleClick() {
        // 单独使用时
        if (_props.alone) {
            // 开启了异步变更
            if (_props.async) {
                _emits("asyncChange", _props.modelValue);
                return;
            }

            // 未开启异步变更
            _emits("change", !_props.modelValue);
            _emits("update:modelValue", !_props.modelValue);
        }

        // 组合使用时
        updateGroupValues(_props.value);
    }
</script>

<style lang="scss" scoped>
    .hi-checkbox {
        display: inline-block;

        &__value {
            display: inline-flex;
            vertical-align: middle;
            border-width: var(--hi-checkbox-border-width, 0.5px);
            border-style: var(--hi-checkbox-border-style, solid);
            border-color: var(--hi-checkbox-border-color, var(--hi-border-color));
            border-radius: var(--hi-checkbox-border-radius, var(--hi-radius-small));
            overflow: var(--hi-checkbox-overflow, hidden);
            width: var(--hi-checkbox-size, 1.25em);
            height: var(--hi-checkbox-size, 1.25em);
            align-items: center;
            justify-content: center;
            background: var(--hi-checkbox-background);
            flex-shrink: 0;
        }

        &__icon {
            --hi-icon-color: var(--hi-checkbox-icon-color);
            --hi-icon-size: var(--hi-checkbox-icon-size, calc(var(--hi-checkbox-size, 1.25em) * 0.8));
            opacity: 0;
            transform: scale(0);
            transition: 100ms ease-in-out;
            line-height: 1;
        }

        &__label {
            display: inline-block;
            vertical-align: middle;
            margin-left: var(--hi-checkbox-gap, 5px);
        }

        &--checked {
            .hi-checkbox__value {
                background: var(--hi-checkbox-active-background);
                color: var(--hi-checkbox-active-icon-color);
            }

            .hi-checkbox__icon {
                opacity: 1;
                transform: scale(1);
            }
        }

        &--theme {
            &.hi-checkbox--checked {
                .hi-checkbox__value {
                    background: var(--hi-checkbox-theme);
                    color: var(--hi-checkbox-icon-color, #ffffff);
                    border-color: var(--hi-checkbox-theme);
                }
            }
        }

        &--plain {
            &.hi-checkbox--checked {
                .hi-checkbox__value {
                    background: transparent;
                    color: var(--hi-checkbox-icon-color, var(--hi-checkbox-theme));
                }
            }
        }

        &--circle {
            .hi-checkbox__value {
                border-radius: 50%;
            }
        }
    }
</style>
