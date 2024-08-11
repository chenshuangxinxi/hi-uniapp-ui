<!--
 * 商品/物品参数组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-params-aster" :class="_classes" :style="_styles">
        <view class="hi-params-aster__row" v-for="(_row, _index) in list" :key="_index">
            <view class="hi-params-aster__row__label">{{ _row.label }}</view>
            <view class="hi-params-aster__row__value">{{ _row.value }}</view>
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

    // 组件事件
    const _emits = defineEmits([]);

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

    // 组件数据
    // ...

    // 组件函数
    // ...

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-params-aster {
        font-weight: var(--hi-params-aster-font-weight, 500);

        &__row {
            display: flex;
            padding: var(--hi-params-aster-row-padding, 0.3em 0);

            &__label {
                color: var(--hi-params-aster-label-font-color, var(--hi-font-color-middle));
                font-size: var(--hi-params-aster-label-font-size);
                font-weight: var(--hi-params-aster-label-font-weight);
                flex-shrink: 0;
                width: var(--hi-params-aster-label-width, 8em);
            }

            &__value {
                color: var(--hi-params-aster-value-font-color);
                font-size: var(--hi-params-aster-value-font-size);
                font-weight: var(--hi-params-aster-value-font-weight);
                flex: 1;
                text-align: var(--hi-params-aster-value-text-align, right);
            }
        }
    }
</style>
