<!--
 * hi-ui - 内容为空组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-empty" :class="_classes" :style="_styles">
        <!-- 图标 -->
        <hi-icon class="hi-empty__icon" :name="name" v-bind="iconProps"></hi-icon>

        <!-- 文字 -->
        <text class="hi-empty__text" v-if="text">{{ text }}</text>

        <!-- 按钮 -->
        <slot>
            <hi-button
                hover-class="hi-hover-class"
                :theme="btnTheme"
                :text="btnText"
                v-bind="btnProps"
                class="hi-empty__button"
                v-if="btnShow"
                @tap="_emits('click')"
            ></hi-button>
        </slot>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { computed } from "vue";
    import props from "./props.js";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits(["click"]);

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
    .hi-empty {
        color: var(--hi-empty-color, var(--hi-font-color-middle));
        display: flex;
        line-height: 1;
        flex-direction: var(--hi-empty-flex-direction, column);
        align-items: center;
        justify-content: center;
        padding: var(--hi-empty-padding, 80rpx 30rpx);

        // 图标
        &__icon {
            --hi-icon-color: var(--hi-empty-icon-color, var(--hi-empty-color));
            --hi-icon-size: var(--hi-empty-icon-size, 3.5em);
            margin: var(--hi-empty-icon-margin, 0 0 30rpx 0);
        }

        // 文字
        &__text {
            color: var(--hi-empty-text-color, var(--hi-empty-color));
            font-size: var(--hi-empty-text-size, 0.8em);
        }

        // 按钮
        &__button {
            --hi-button-size: var(--hi-empty-button-size, 0.9em);
            --hi-button-height: var(--hi-empty-button-width, 68rpx);
            --hi-button-padding: var(--hi-empty-button-padding, 0 0.8em);
            --hi-button-margin: var(--hi-empty-buttom-margin, 30rpx auto 0);
        }
    }
</style>
