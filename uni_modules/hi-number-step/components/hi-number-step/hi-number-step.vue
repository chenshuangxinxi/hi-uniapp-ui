<!--
 * hi-ui - 滚动通知组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-number-step" :class="_classes" :style="_styles">
        <hi-icon
            class="hi-number-step__icon hi-number-step__icon--minus"
            :name="minusIconName"
            v-bind="minusIconProps"
            @tap="onMinus"
            :class="{ 'hi-number-step__icon--disabled': _disabledMinus }"
            v-if="showMinus"
        ></hi-icon>
        <input class="hi-number-step__input" type="digit" v-model="inputValue" @input="onInput" :disabled="disabledInput" />
        <hi-icon
            class="hi-number-step__icon hi-number-step__icon--plus"
            :name="plusIconName"
            v-bind="plusIconProps"
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
    const _emits = defineEmits(["change", "update:modelValue"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 是否禁用全部？
        if (_props.disabled) classes.push(`hi-number-step--disabled`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];
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
            _emits("change", _props.modelValue + _props.step);
            return;
        }

        // 当前值加上步进值超出最大值
        if (_props.modelValue + _props.step > _props.max) {
            _emits("update:modelValue", _props.max);
            return;
        }

        // 当前值加上步进值未超出最大值
        _emits("update:modelValue", _props.modelValue + _props.step);
    }

    /**
     * 减
     */
    function onMinus() {
        // 开启了异步变更
        if (_props.async) {
            _emits("change", _props.modelValue - _props.step);
            return;
        }

        // 当前值减去步进值小于最小值
        if (_props.modelValue - _props.step < _props.min) {
            _emits("update:modelValue", _props.min);
            return;
        }

        // 当前值减去步进值未小于最小值
        _emits("update:modelValue", _props.modelValue - _props.step);
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
            _emits("change", value);
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
        border-width: var(--hi-number-step-border-width, 1px);
        border-style: var(--hi-number-step-border-style, solid);
        border-color: var(--hi-number-step-border-color, var(--hi-border-color-default));
        border-radius: var(--hi-number-step-border-radius, var(--hi-radius-small));
        overflow: hidden;
        height: var(--hi-number-step-height, 2.5em);
        align-items: stretch;

        &:focus-within {
            border-color: var(--hi-number-step-focus-border-color, var(--hi-border-color-default));
        }

        &__icon {
            width: var(--hi-number-step-button-width, 2.5em);
            flex-shrink: 0;
            background: var(--hi-number-step-button-background);
            --hi-icon-color: var(--hi-number-step-button-font-color);
            --hi-icon-size: var(--hi-number-step-button-font-size);
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;

            &--minus {
                background: var(--hi-number-step-minus-button-background);
                --hi-icon-color: var(--hi-number-step-minus-button-font-color);
                --hi-icon-size: var(--hi-number-step-minus-button-font-size);
            }

            &--plus {
                background: var(--hi-number-step-plus-button-background);
                --hi-icon-color: var(--hi-number-step-plus-button-font-color);
                --hi-icon-size: var(--hi-number-step-plus-button-font-size);
            }

            &:active {
                opacity: var(--hi-number-step-button-active-opacity, var(--hi-opacity-hover));
            }

            &--disabled {
                pointer-events: none;
                opacity: var(--hi-opacity-disabled);
            }
        }

        &__input {
            border-style: var(--hi-number-step-input-border-style, solid);
            border-color: var(--hi-number-step-input-border-color, var(--hi-border-color-default));
            border-left-width: var(--hi-number-step-input-border-left-width, 1px);
            border-right-width: var(--hi-number-step-input-border-right-width, 1px);
            border-top-width: var(--hi-number-step-input-border-top-width, 0);
            border-bottom-width: var(--hi-number-step-input-border-bottom-width, 1px);
            height: var(--hi-number-step-input-height, 100%);
            text-align: var(--hi-number-step-input-text-align, center);
            padding: var(--hi-number-step-input-padding);
            margin: var(--hi-number-step-input-margin);
            width: var(--hi-number-step-input-width, 5em);
            font-size: var(--hi-number-step-input-font-size, inherit);
            color: var(--hi-number-step-input-color, inherit);
            border-radius: var(--hi-number-step-input-border-radius, 0);
            background: var(--hi-number-step-input-background);
        }

        &--disabled {
            pointer-events: none;
            opacity: var(--hi-opacity-disabled);
        }
    }
</style>
