<!--
 * HiUi - 内容为空
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-empty" :class="_classes" :style="_styles">
        <!-- 图标 -->
        <hi-icon class="hi-empty__icon" :name="iconName" :color="iconColor" :size="iconSize" :mode="iconMode"></hi-icon>

        <!-- 文字 -->
        <text class="hi-empty__tips" v-if="tips">{{ tips }}</text>

        <!-- 按钮 -->
        <slot name="button">
            <hi-button
                :theme="btnTheme"
                :text="btnText"
                :iconName="$attrs?.btnIconName"
                :iconColor="$attrs?.btnIconColor"
                :iconSize="$attrs?.btnIconSize"
                :iconMode="$attrs?.btnIconMode"
                v-bind="$attrs"
                class="hi-empty__button"
                v-if="showBtn"
                @click="_emits('click')"
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

        // 高度
        if (_props.height) styles.push(`--hi-empty-height: ${_props.height}`);

        // 背景
        if (_props.bg) styles.push(`--hi-empty-background: ${_props.bg}`);

        // 圆角
        if (_props.radius) styles.push(`--hi-empty-border-radius: ${_props.radius}`);

        // 提示文字大小
        if (_props.tipsSize) styles.push(`--hi-empty-tips-font-size: ${_props.tipsSize}px`);

        // 提示文字颜色
        if (_props.tipsColor) styles.push(`--hi-empty-tips-color: ${_props.tipsColor}`);

        return styles;
    });
</script>

<style lang="scss" scoped>
    .hi-empty {
        color: var(--hi-empty-color, var(--hi-color-light));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: var(--hi-empty-height, 460rpx);
        background: var(--hi-empty-background);
        border-radius: var(--hi-empty-border-radius, var(--hi-radius-default));

        // 图标
        &__icon {
            --hi-icon-color: var(--hi-empty-icon-color, inherit);
            --hi-icon-size: var(--hi-empty-icon-size, 100rpx);
        }

        // 文字
        &__tips {
            color: var(--hi-empty-tips-color, inherit);
            font-size: var(--hi-empty-tips-font-size, 24rpx);
        }

        // 按钮
        &__button {
            --hi-button-size: var(--hi-empty-button-size, 24rpx);
            --hi-button-height: var(--hi-empty-button-height, 60rpx);
            --hi-button-padding: var(--hi-empty-button-padding, 0 24rpx);
            margin: var(--hi-empty-button-margin, 30rpx 0 0 0);
        }
    }
</style>
