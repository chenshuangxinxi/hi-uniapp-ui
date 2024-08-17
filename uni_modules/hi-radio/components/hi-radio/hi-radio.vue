<!--
 * hi-radio - 单选框
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-radio" :class="_classes" :style="_styles" :hoverClass="hoverClass" @tap="handleClick">
        <view class="hi-radio__value">
            <hi-icon class="hi-radio__icon" :name="iconName"></hi-icon>
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

        // 选中
        if (_isChecked.value) classes.push(`hi-radio--checked`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];
        return styles;
    });

    // 单选框组选中的值
    const groupValue = inject("hiRadioGroupValue", ref(""));

    // 是否选中
    const _isChecked = computed(() => groupValue.value === _props.value);

    // 单选框组的值更新函数
    const updateGroupValue = inject("hiRadioGroupUpdateValue", () => {});

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
            border: 0.5px solid var(--hi-border-color);
            border-radius: 50%;
            width: 1.25em;
            height: 1.25em;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            position: relative;
        }

        &__icon {
            opacity: 0;
            transform: scale(0);
            transition: 100ms ease-in-out;
            line-height: 1;
        }

        &__label {
            display: inline-block;
            vertical-align: middle;
            margin-left: 5px;
        }

        &--checked {
            .hi-radio__icon {
                opacity: 1;
                transform: scale(1);
            }
        }
    }
</style>
