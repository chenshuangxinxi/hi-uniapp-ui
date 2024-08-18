<!--
 * zz-attrs-apple - 属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="zz-attrs-apple" :class="_classes" :style="_styles">
        <view
            class="zz-attrs-apple__item"
            v-for="(_item, _index) in list"
            :key="_index"
            :class="{ 'zz-attrs-apple__item--line-hidden': (_index + 1) % _props.columns === 0 }"
        >
            <view class="zz-attrs-apple__item__label">{{ _item?.label }}</view>
            <view class="zz-attrs-apple__item__value">{{ _item?.value }}</view>
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
        styles.push(`--zz-attrs-apple-columns: ${_props.columns}`);

        return styles;
    });
</script>

<style lang="scss" scoped>
    .zz-attrs-apple {
        display: grid;
        grid-template-columns: repeat(var(--zz-attrs-apple-columns), 1fr);
        gap: 40rpx 0;

        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.45em;
            font-weight: 500;
            position: relative;

            &__label {
                color: var(--hi-color-light);
            }

            &::after {
                content: "";
                width: 2px;
                height: 0.8em;
                background: currentColor;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(50%, -50%);
                z-index: 2;
                opacity: 0.15;
                border-radius: 2px;
            }

            &--line-hidden {
                &::after {
                    display: none;
                }
            }
        }
    }
</style>
