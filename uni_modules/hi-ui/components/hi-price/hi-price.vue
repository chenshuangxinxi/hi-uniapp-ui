<!--
 * hi-price - 价格
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-price" :class="_classes" :style="_styles">
        <!-- 单位 -->
        <text class="hi-price__unit">{{ unit }}</text>

        <!-- 值 -->
        <text class="hi-price__value">{{ fmtPrice }}</text>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { computed } from "vue";
    import props from "./props.js";
    import numeral from "numeral";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits([]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 删除线
        if (_props.showDelete) classes.push("hi-price--delete");

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];
        return styles;
    });

    // 格式化
    const fmtPrice = computed(() => {
        // 固定长度的小数位数
        if (_props.fixed) return numeral(_props.value).format(`0${_props.thousands}0.${_props.decimals}`);
        // 自动舍弃默认为0的小数位
        return numeral(_props.value).format(`0${_props.thousands}0.[${_props.decimals}]`);
    });

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-price {
        display: inline-block;
        font-weight: 700;
        position: relative;
        line-height: 1;

        &__unit {
            display: inline-block;
        }

        &__value {
            display: inline-block;
        }

        &--delete {
            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 1px;
                background: currentColor;
                left: 0;
                bottom: 50%;
                transform: translateY(50%);
                z-index: 6;
            }
        }
    }
</style>
