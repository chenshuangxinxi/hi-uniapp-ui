<!--
 * hi-number-step - 步进器
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
        if (_props.disabled) classes.push(`hi-disabled hi-number-step--disabled`);

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
        height: 2em;
        border: 0.5px solid var(--hi-border-color);
        overflow: hidden;
        align-items: stretch;
        text-align: center;

        &__icon {
            width: 2em;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 2em;

            &--disabled {
                pointer-events: none;
                opacity: var(--hi-opacity-disabled);
            }
        }

        &__input {
            border-left: inherit;
            border-right: inherit;
            height: 100%;
            width: 3em;
            flex: 1;
            font-size: inherit;
        }
    }
</style>
