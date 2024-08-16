<!--
 * HiUi - 步进器
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-number-step" :class="_classes" :style="_styles">
        <!-- 减 -->
        <hi-icon
            class="hi-number-step__icon hi-number-step__icon--minus"
            :hover-class="hoverClass"
            :name="minusIconName"
            :size="minusIconSize || iconSize"
            :color="minusIconColor || iconColor"
            :mode="minusIconMode || iconMode"
            @tap="onMinus"
            :class="{ 'hi-number-step__icon--disabled': _disabledMinus }"
            v-if="showMinus"
        ></hi-icon>

        <!-- 值 -->
        <input class="hi-number-step__input" type="digit" v-model="inputValue" @input="onInput" :disabled="disabledInput" />

        <!-- 加 -->
        <hi-icon
            class="hi-number-step__icon hi-number-step__icon--plus"
            :hover-class="hoverClass"
            :name="plusIconName"
            :size="plusIconSize || iconSize"
            :color="plusIconColor || iconColor"
            :mode="plusIconMode || iconMode"
            @tap="onPlus"
            :class="{ 'hi-number-step__icon--disabled': _disabledPlus }"
            v-if="showPlus"
        ></hi-icon>
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
    const _emits = defineEmits(["change", "asyncChange", "update:modelValue"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 是否禁用全部？
        if (_props.disabled) classes.push(`hi-number-step--disabled`);

        // 边框
        if (_props.showBorder) classes.push(`hi-number-step--border`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 文字大小
        if (_props.size) styles.push(`--hi-number-step-font-size: ${_props.size}`);

        // 文字颜色
        if (_props.color) styles.push(`--hi-number-step-color: ${_props.color}`);

        // 背景
        if (_props.bg) styles.push(`--hi-number-step-background: ${_props.bg}`);

        // 圆角
        if (_props.radius) styles.push(`--hi-number-step-border-radius: ${_props.radius}`);

        // 边框颜色
        if (_props.borderColor) styles.push(`--hi-number-step-border-color: ${_props.borderColor}`);

        // 聚焦时边框颜色
        if (_props.focusBorderColor) styles.push(`--hi-number-step-focus-border-color: ${_props.focusBorderColor}`);

        // 宽
        if (_props.width) styles.push(`--hi-number-step-width: ${_props.width}`);

        // 高
        if (_props.height) styles.push(`--hi-number-step-height: ${_props.height}`);

        // 按钮宽
        if (_props.btnWidth) styles.push(`--hi-number-step-button-width: ${_props.btnWidth}`);

        // 输入框宽度
        if (_props.inputWidth) styles.push(`--hi-number-step-input-width: ${_props.inputWidth}`);

        // 输入框文字大小
        if (_props.inputSize) styles.push(`--hi-number-step-input-font-size: ${_props.inputSize}`);

        // 输入框文字颜色
        if (_props.inputColor) styles.push(`--hi-number-step-input-color: ${_props.inputColor}`);

        // 输入框背景
        if (_props.inputBg) styles.push(`--hi-number-step-input-background: ${_props.inputBg}`);

        return styles;
    });

    // 输入框的值
    const inputValue = ref(_props.modelValue);

    // 是否禁用减号按钮
    const _disabledMinus = computed(() => {
        return _props.disabled || _props.disabledMinus || _props.modelValue <= _props.min;
    });

    // 是否禁用加号按钮
    const _disabledPlus = computed(() => {
        return _props.disabled || _props.disabledPlus || _props.modelValue >= _props.max;
    });

    // 同步更新视图的值
    watch(
        () => _props.modelValue,
        (value) => {
            updateInputValue();
        },
        { immediate: true }
    );

    /**
     * 加
     */
    function onPlus() {
        // 开启了异步变更
        if (_props.async) {
            _emits("asyncChange", _props.modelValue + _props.step);
            return;
        }

        // 当前值加上步进值超出最大值
        if (_props.modelValue + _props.step > _props.max) {
            _emits("update:modelValue", _props.max);
            _emits("change", _props.max);
            return;
        }

        // 当前值加上步进值未超出最大值
        _emits("update:modelValue", _props.modelValue + _props.step);
        _emits("change", _props.modelValue + _props.step);
    }

    /**
     * 减
     */
    function onMinus() {
        // 开启了异步变更
        if (_props.async) {
            _emits("asyncChange", _props.modelValue - _props.step);
            return;
        }

        // 当前值减去步进值小于最小值
        if (_props.modelValue - _props.step < _props.min) {
            _emits("update:modelValue", _props.min);
            _emits("change", _props.min);
            return;
        }

        // 当前值减去步进值未小于最小值
        _emits("update:modelValue", _props.modelValue - _props.step);
        _emits("change", _props.modelValue - _props.step);
    }

    /**
     * 输入框输入事件
     * @param {Event} event event.detail.value 输入的值
     */
    function onInput(event) {
        // 输入的值
        const value = Number(event.detail.value);

        // 开启了异步变更
        if (_props.async) {
            _emits("asyncChange", value);
            return;
        }

        // 未开启异步变更
        // 判断是否超出范围
        // 超出范围
        if (value > _props.max || value < _props.min) {
            // 更新输入框视图的值
            updateInputValue();
            return;
        }

        // 未超出范围
        _emits("update:modelValue", value);
        _emits("change", value);
    }

    /**
     * 更新输入框视图的值
     */
    function updateInputValue() {
        // uni-app 更新输入框视图的值需要放到 nextTick 中，并且确保更新还得放到 setTimeout 中，晕~~~
        nextTick(() => {
            setTimeout(() => {
                inputValue.value = _props.modelValue;
            }, 10);
        });
    }
</script>

<style lang="scss" scoped>
    .hi-number-step {
        display: inline-flex;
        width: var(--hi-number-step-width);
        height: var(--hi-number-step-height, 2em);
        border-width: var(--hi-number-step-border-width, 0);
        border-style: var(--hi-number-step-border-style, solid);
        border-color: var(--hi-number-step-border-color, var(--hi-border-color));
        border-radius: var(--hi-number-step-border-radius, var(--hi-radius-small));
        background: var(--hi-number-step-background, #ffffff);
        font-size: var(--hi-number-step-font-size);
        color: var(--hi-number-step-color);
        overflow: hidden;
        align-items: stretch;

        &__icon {
            --hi-icon-color: var(--hi-number-step-button-color);
            --hi-icon-size: var(--hi-number-step-button-size);
            width: var(--hi-number-step-button-width, 2em);
            flex-shrink: 0;
            background: var(--hi-number-step-button-background);
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;

            &--minus {
                --hi-icon-color: var(--hi-number-step-minus-button-color, var(--hi-number-step-button-color));
                --hi-icon-size: var(--hi-number-step-minus-button-size, var(--hi-number-step-button-size));
                background: var(--hi-number-step-minus-button-background, var(--hi-number-step-button-background));
                width: var(--hi-number-step-minus-button-width, var(--hi-number-step-button-width, 2em));
            }

            &--plus {
                --hi-icon-color: var(--hi-number-step-plus-button-color, var(--hi-number-step-button-color));
                --hi-icon-size: var(--hi-number-step-plus-button-size, var(--hi-number-step-button-size));
                background: var(--hi-number-step-plus-button-background, var(--hi-number-step-button-background));
                width: var(--hi-number-step-plus-button-width, var(--hi-number-step-button-width, 2em));
            }

            &--disabled {
                pointer-events: none;
                opacity: var(--hi-opacity-disabled);
            }
        }

        &__input {
            border-style: var(--hi-number-step-input-border-style, inherit);
            border-color: var(--hi-number-step-input-border-color, inherit);
            border-left-width: var(--hi-number-step-input-border-left-width, 0);
            border-right-width: var(--hi-number-step-input-border-right-width, 0);
            border-top-width: var(--hi-number-step-input-border-top-width, 0);
            border-bottom-width: var(--hi-number-step-input-border-bottom-width, 0);
            height: 100%;
            text-align: var(--hi-number-step-input-text-align, center);
            padding: var(--hi-number-step-input-padding);
            margin: var(--hi-number-step-input-margin);
            width: var(--hi-number-step-input-width, 3em);
            font-size: var(--hi-number-step-input-font-size, inherit);
            color: var(--hi-number-step-input-color, inherit);
            border-radius: var(--hi-number-step-input-border-radius, 0);
            background: var(--hi-number-step-input-background);
            flex: 1;
        }

        &--border {
            border-width: var(--hi-number-step-border-width, 0.5px);

            .hi-number-step__input {
                border-left-width: var(--hi-number-step-input-border-left-width, inherit);
                border-right-width: var(--hi-number-step-input-border-right-width, inherit);
            }

            &:focus-within {
                border-color: var(--hi-number-step-focus-border-color, var(--hi-border-color));

                .hi-number-step__input {
                    border-color: var(--hi-number-step-focus-border-color, var(--hi-number-step-input-border-color, inherit));
                }
            }
        }

        &--disabled {
            pointer-events: none;
            opacity: var(--hi-opacity-disabled);
        }
    }
</style>
