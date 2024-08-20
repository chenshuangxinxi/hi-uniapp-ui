<!--
 * hi-region-picker - 省市区选择器
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-region-picker" :class="_classes" :style="_styles" v-if="show">
        <!-- 遮罩 -->
        <hi-overlay class="hi-region-picker__overlay" :show="show" align="center-bottom" @close="handleMaskClick"></hi-overlay>

        <!-- 内容 -->
        <view class="hi-region-picker__content">
            <!-- Header -->
            <view class="hi-region-picker__header">
                <view class="hi-region-picker__header__button hi-region-picker__header__button--cancel" @tap="handleCancel" hover-class="hi-hover">取消</view>
                <view class="hi-region-picker__header__title">{{ title }}</view>
                <view class="hi-region-picker__header__button hi-region-picker__header__button--confirm" @tap="handleConfirm" hover-class="hi-hover">
                    确认
                </view>
            </view>

            <!-- picker-view -->
            <picker-view class="hi-region-picker__picker-view" :value="modelValue" :indicator-style="_indicatorStyle" @change="onChange">
                <!-- 省 -->
                <picker-view-column class="hi-region-picker__column hi-region-picker__column--province">
                    <view class="hi-region-picker__column__item hi-region-picker__column__item--province" v-for="(item, index) in provinceList" :key="index">
                        {{ item[keyName] }}
                    </view>
                    <!-- 至少保留一个，否则会默认滚动到下标为1的选项 -->
                    <view class="hi-region-picker__column__item hi-region-picker__column__item--province" v-if="!provinceList.length"></view>
                </picker-view-column>

                <!-- 市 -->
                <picker-view-column class="hi-region-picker__column hi-region-picker__column--city">
                    <view class="hi-region-picker__column__item hi-region-picker__column__item--city" v-for="(item, index) in cityList" :key="index">
                        {{ item[keyName] }}
                    </view>
                    <!-- 至少保留一个，否则会默认滚动到下标为1的选项 -->
                    <view class="hi-region-picker__column__item hi-region-picker__column__item--city" v-if="!cityList.length"></view>
                </picker-view-column>

                <!-- 区 -->
                <picker-view-column class="hi-region-picker__column hi-region-picker__column--area">
                    <view class="hi-region-picker__column__item hi-region-picker__column__item--area" v-for="(item, index) in areaList" :key="index">
                        {{ item[keyName] }}
                    </view>
                    <!-- 至少保留一个，否则会默认滚动到下标为1的选项 -->
                    <view class="hi-region-picker__column__item hi-region-picker__column__item--area" v-if="!areaList.length"></view>
                </picker-view-column>
            </picker-view>

            <!-- loading -->
            <view class="hi-region-picker__loading" v-if="loading">
                <hi-loading></hi-loading>
            </view>
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

    // emits
    const _emits = defineEmits(["change", "update:modelValue", "close", "confirm", "changeProvince", "changeCity", "changeArea"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 是否显示
        if (_props.show) classes.push("hi-region-picker--show");

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // item 高度
        styles.push(`--hi-region-picker-item-height: ${_props.itemHeight};`);

        return styles;
    });

    // 选择器中间选中框的样式
    const _indicatorStyle = computed(() => {
        return `height: var(--hi-region-picker-item-height);`;
    });

    // 省数据
    const provinceList = computed(() => {
        if (_props?.region) return _props.region;
        return _props.provinces;
    });

    // 市数据
    const cityList = computed(() => {
        const provinceIndex = _props.modelValue[0];
        if (_props?.region) return _props.region?.[provinceIndex]?.children ?? [];
        return _props.cities;
    });

    // 区数据
    const areaList = computed(() => {
        const provinceIndex = _props.modelValue[0];
        const cityIndex = _props.modelValue[1];
        if (_props?.region) return _props.region?.[provinceIndex]?.children?.[cityIndex]?.children ?? [];
        return _props.areas;
    });

    /**
     * 当滚动选择，value 改变时触发 change 事件
     * @param {Object} event event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）
     */
    function onChange(event) {
        const value = event.detail.value.slice(0, 3);

        // 判断滚动的是哪一列
        if (value[0] !== _props.modelValue[0]) {
            // 如果切换后需要将市和区重置为0，则需要将value[1]和value[2]重置为0
            if (_props.returnZero) {
                value[1] = 0;
                value[2] = 0;
            }

            _emits("update:modelValue", value);
            _emits("change", value, getSelectedDatas(value));
            _emits("changeProvince", value[0], getSelectedProvinceData(value));
        } else if (value[1] !== _props.modelValue[1]) {
            // 如果切换后需要将区重置为0，value[2]重置为0
            if (_props.returnZero) {
                value[2] = 0;
            }
            _emits("update:modelValue", value);
            _emits("change", value, getSelectedDatas(value));
            _emits("changeCity", value[1], getSelectedCityData(value));
        } else {
            _emits("update:modelValue", value);
            _emits("change", value, getSelectedDatas(value));
            _emits("changeArea", value[2], getSelectedAreaData(value));
        }
    }

    /**
     * 获取选中的数据
     * @param {Array} value 当前选中项的下标
     */
    function getSelectedDatas(value) {
        return {
            province: getSelectedProvinceData(value),
            city: getSelectedCityData(value),
            area: getSelectedAreaData(value)
        };
    }

    /**
     * 获取选中的省份数据
     * @param {Array} value 选中的省市区数据下标
     */
    function getSelectedProvinceData(value) {
        const provinceIndex = value[0];
        if (_props.region) return _props.region[provinceIndex];
        return _props.provinces[provinceIndex];
    }

    /**
     * 获取选中的城市数据
     * @param {Array} value 选中的省市区数据下标
     */
    function getSelectedCityData(value) {
        const provinceIndex = value[0];
        const cityIndex = value[1];
        if (_props.region) return _props.region[provinceIndex].children[cityIndex];
        return _props.cities[cityIndex];
    }

    /**
     * 获取选中的地区数据
     * @param {Array} value 选中的省市区数据下标
     */
    function getSelectedAreaData(value) {
        const provinceIndex = value[0];
        const cityIndex = value[1];
        const areaIndex = value[2];
        if (_props.region) return _props.region[provinceIndex].children[cityIndex].children[areaIndex];
        return _props.areas[areaIndex];
    }

    /**
     * 遮罩点击事件
     */
    function handleMaskClick() {
        if (_props.closeOnClickOverlay) {
            _emits("close");
        }
    }

    /**
     * 取消事件
     */
    function handleCancel() {
        _emits("close");
    }

    /**
     * 确认事件
     */
    function handleConfirm() {
        _emits("confirm");
    }
</script>

<style lang="scss" scoped>
    .hi-region-picker {
        &__content {
            background: #ffffff;
            max-height: 50%;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 20px;
            text-align: center;
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: var(--hi-index-big);
            animation-duration: 300ms;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in-out;
        }

        &__header {
            display: flex;
            align-items: center;
            flex-shrink: 0;
            margin-bottom: 30px;

            &__button {
                flex-shrink: 0;
                font-weight: 500;

                &--cancel {
                    color: var(--hi-color-light);
                }

                &--confirm {
                    color: var(--hi-theme-primary);
                }
            }

            &__title {
                flex: 1;
                font-weight: 700;
            }
        }

        &__picker-view {
            width: 100%;
            flex: 1;
        }

        &__column {
            &__item {
                height: var(--hi-region-picker-item-height);
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        &__loading {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.8);
            z-index: var(--hi-index-big);
            font-size: 1.5em;
            pointer-events: none;
        }

        &--show {
            .hi-region-picker__content {
                animation-name: hi-region-picker-content-ani;
            }
        }

        @keyframes hi-region-picker-content-ani {
            0% {
                transform: translateY(100%);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
</style>
