<!--
 * zz-button-group-apple - 按钮组合
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="zz-button-group-apple" :class="_classes" :style="_styles">
        <view class="zz-button-group-apple__content">
            <hi-button class="zz-button-group-apple__button zz-button-group-apple__button--left" text="加入购物车" @tap="handleAdd"></hi-button>
            <hi-button class="zz-button-group-apple__button zz-button-group-apple__button--right" text="立即购买" @tap="handleBuy"></hi-button>
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

    /**
     * 添加到购物车
     */
    function handleAdd() {
        uni.showToast({
            title: "已添加到购物车",
            icon: "success",
            mask: true
        });
    }

    /**
     * 立即购买
     */
    function handleBuy() {
        uni.showToast({
            title: "购买成功",
            icon: "success",
            mask: true
        });
    }
</script>

<style lang="scss" scoped>
    .zz-button-group-apple {
        width: 100%;
        color: #ffffff;
        font-size: 32rpx;
        font-weight: 700;

        &__content {
            display: flex;
            align-items: center;
            gap: 20rpx;
        }

        &__button {
            &.hi-button {
                height: 80rpx;
                border-radius: 100rpx;
            }

            &--left.hi-button {
                width: 35%;
                background: #d681e8;
            }

            &--right.hi-button {
                flex: 1;
                background: #8670f7;
            }
        }
    }
</style>
