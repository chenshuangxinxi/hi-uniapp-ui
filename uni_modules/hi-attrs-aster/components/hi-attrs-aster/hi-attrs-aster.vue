<!--
 * 商品/物品属性组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-attrs-aster" :class="_classes" :style="_styles">
        <view
            class="hi-attrs-aster__item"
            v-for="(_item, _index) in list"
            :key="_index"
            :class="{ 'hi-attrs-aster__item--line-hidden': (_index + 1) % _props.columns === 0 }"
        >
            <view class="hi-attrs-aster__item__label">{{ _item.label }}</view>
            <view class="hi-attrs-aster__item__value">{{ _item.value }}</view>
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

        // 列数
        styles.push(`--hi-attrs-aster-columns: ${_props.columns}`);

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
    .hi-attrs-aster {
        display: grid;
        grid-template-columns: repeat(var(--hi-attrs-aster-columns), 1fr);
        gap: var(--hi-attrs-aster-grid-gap, 40rpx 0);

        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--hi-attrs-aster-item-content--gap, 0.45em);
            font-weight: var(--hi-attrs-aster-font-weight, 500);
            position: relative;

            &__label {
                color: var(--hi-attrs-aster-label-font-color, var(--hi-font-color-light-aster));
                font-size: var(--hi-attrs-aster-label-font-size);
                font-weight: var(--hi-attrs-aster-label-weight);
            }

            &__value {
                color: var(--hi-attrs-aster-value-font-color);
                font-size: var(--hi-attrs-aster-value-font-size);
                font-weight: var(--hi-attrs-aster-value-weight);
            }

            &::after {
                content: "";
                width: var(--hi-attrs-aster-line-width, 2px);
                height: var(--hi-attrs-aster-line-height, 0.8em);
                background: var(--hi-attrs-aster-line-background, var(--hi-font-color-light-3));
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(50%, -50%);
                z-index: 2;
            }

            &--line-hidden {
                &::after {
                    display: none;
                }
            }
        }
    }
</style>
