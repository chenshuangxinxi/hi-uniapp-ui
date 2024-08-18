<!--
 * hi-empty - 内容为空
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-empty" :class="_classes" :style="_styles">
        <!-- 图标 -->
        <hi-icon class="hi-empty__icon" :name="iconName" :mode="iconMode"></hi-icon>

        <!-- 文字 -->
        <text class="hi-empty__tips" v-if="tips">{{ tips }}</text>

        <!-- 按钮 -->
        <slot name="button">
            <hi-button :text="btnText" v-bind="btnProps" class="hi-empty__button" v-if="showBtn" @click="_emits('click')"></hi-button>
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
        color: var(--hi-color-light);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 500rpx;

        // 图标
        &__icon {
            font-size: 100rpx;
        }

        // 文字
        &__tips {
            font-size: 24rpx;
        }

        // 按钮
        &__button {
            font-size: 24rpx;
            height: 60rpx;
            padding: 0 24rpx;
            margin-top: 30rpx;
            border: 0.5px solid var(--hi-border-color);
        }
    }
</style>
