<!--
 * HiUi - 单选框
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-radio" :class="_classes" :style="_styles" :hoverClass="hoverClass" @tap="handleClick">
        <view class="hi-radio__value">
            <hi-icon class="hi-radio__icon" :name="iconName" :size="iconSize" :color="iconColor" :mode="iconMode"></hi-icon>
        </view>
        <view class="hi-radio__label" v-if="label !== undefined">
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
    const _emits = defineEmits(["update:modelValue"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 是否禁用
        if (_props.disabled) classes.push(`hi-disabled hi-radio--disabled`);

        // 主题
        if (groupTheme.value) classes.push(`hi-radio--theme hi-radio--theme--${groupTheme.value}`);
        if (_props.theme) classes.push(`hi-radio--theme hi-radio--theme--${_props.theme}`);

        // 镂空
        if (groupPlain.value) classes.push(`hi-radio--plain`);
        if (_props.plain) classes.push(`hi-radio--plain`);

        // 选中
        if (_isChecked.value) classes.push(`hi-radio--checked`);

        // 方形
        if (groupSquare.value) classes.push(`hi-radio--square`);
        if (_props.square) classes.push(`hi-radio--square`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 大小
        if (_props.size) styles.push(`--hi-radio-size: ${_props.size}`);

        // 背景
        if (_props.color) styles.push(`--hi-radio-background: ${_props.color}`);
        if (_props.activeColor) styles.push(`--hi-radio-active-background: ${_props.activeColor}`);

        // 边框颜色
        if (_props.borderColor) styles.push(`--hi-radio-border-color: ${_props.borderColor}`);
        if (_props.activeBorderColor) styles.push(`--hi-radio-active-border-color: ${_props.activeBorderColor}`);

        // 主题
        if (groupTheme.value) styles.push(`--hi-radio-theme: var(--hi-theme-${groupTheme.value})`);
        if (_props.theme) styles.push(`--hi-radio-theme: var(--hi-theme-${_props.theme})`);

        // 圆角
        if (groupRadius.value) styles.push(`--hi-radio-border-radius: ${groupRadius.value}`);
        if (_props.radius) styles.push(`--hi-radio-border-radius: ${_props.radius}`);

        return styles;
    });

    // 单选框组选中的值
    const groupValue = inject("hiRadioGroupValue", ref(""));

    // 是否选中
    const _isChecked = computed(() => groupValue.value === _props.value);

    // 单选框组的值更新函数
    const updateGroupValue = inject("hiRadioGroupUpdateValue", () => {});

    // 当前组设置的整体主题、镂空、圆角和形状
    const groupTheme = inject("hiRadioGroupTheme", ref(""));
    const groupPlain = inject("hiRadioGroupPlain", ref(false));
    const groupRadius = inject("hiRadioGroupRadius", ref(""));
    const groupSquare = inject("hiRadioGroupSquare", ref(false));

    /**
     * 点击事件
     */
    function handleClick() {
        // 组合使用时
        updateGroupValue(_props.value);
    }
</script>

<style lang="scss" scoped>
    .hi-radio {
        display: inline-block;

        &__value {
            display: inline-flex;
            vertical-align: middle;
            border-width: var(--hi-radio-border-width, 0.5px);
            border-style: var(--hi-radio-border-style, solid);
            border-color: var(--hi-radio-border-color, var(--hi-border-color));
            border-radius: var(--hi-radio-border-radius, 50%);
            overflow: var(--hi-radio-overflow, hidden);
            width: var(--hi-radio-size, 1.25em);
            height: var(--hi-radio-size, 1.25em);
            align-items: center;
            justify-content: center;
            background: var(--hi-radio-background);
            flex-shrink: 0;
            position: relative;
        }

        &__icon {
            --hi-icon-color: var(--hi-radio-icon-color);
            --hi-icon-size: var(--hi-radio-icon-size, calc(var(--hi-radio-size, 1.25em) * 0.7));
            opacity: 0;
            transform: scale(0);
            transition: 100ms ease-in-out;
            line-height: 1;
        }

        &__label {
            display: inline-block;
            vertical-align: middle;
            margin-left: var(--hi-radio-gap, 5px);
        }

        &--checked {
            .hi-radio__value {
                background: var(--hi-radio-active-background);
                color: var(--hi-radio-active-icon-color);
            }

            .hi-radio__icon {
                opacity: 1;
                transform: scale(1);
            }
        }

        &--theme {
            &.hi-radio--checked {
                .hi-radio__value {
                    background: var(--hi-radio-theme);
                    color: var(--hi-radio-icon-color, #ffffff);
                    border-color: var(--hi-radio-theme);
                }
            }
        }

        &--plain {
            &.hi-radio--checked {
                .hi-radio__value {
                    background: transparent;
                    color: var(--hi-radio-icon-color, var(--hi-radio-theme));
                }
            }
        }

        &--square {
            .hi-radio__value {
                border-radius: var(--hi--radio-border-radius, var(--hi-radius-small));
            }
        }
    }
</style>
