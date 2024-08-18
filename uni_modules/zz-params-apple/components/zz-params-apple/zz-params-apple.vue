<!--
 * zz-params-apple - 参数
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="zz-params-aster" :class="_classes" :style="_styles">
        <view class="zz-params-aster__row" v-for="(_row, _index) in list" :key="_index">
            <view class="zz-params-aster__row__label">{{ _row?.label }}</view>
            <view class="zz-params-aster__row__value">{{ _row?.value }}</view>
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
</script>

<style lang="scss" scoped>
    .zz-params-aster {
        font-weight: 500;

        &__row {
            display: flex;
            padding: 0.3em 0;

            &__label {
                color: var(--hi-color-middle);
                flex-shrink: 0;
                width: 8em;
            }

            &__value {
                flex: 1;
                text-align: right;
            }
        }
    }
</style>
