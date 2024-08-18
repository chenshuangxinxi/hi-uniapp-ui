<!--
 * zz-button-group-cherry - 按钮组合
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="zz-button-group-cherry" :class="_classes" :style="_styles">
        <view class="zz-button-group-cherry__content">
            <hi-button
                class="zz-button-group-cherry__button zz-button-group-cherry__button--left"
                text="余额支付"
                :subText="`可用余额：￥0元`"
                @tap="handlePayBalance"
            ></hi-button>
            <hi-button class="zz-button-group-cherry__button zz-button-group-cherry__button--right" text="微信支付" @tap="handlePayWechat"></hi-button>
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

    /**
     * 余额支付
     */
    function handlePayBalance() {
        uni.showToast({
            title: "余额支付",
            icon: "none",
            mask: true
        });
    }

    /**
     * 微信支付
     */
    function handlePayWechat() {
        uni.showToast({
            title: "微信支付",
            icon: "none",
            mask: true
        });
    }
</script>

<style lang="scss" scoped>
    .zz-button-group-cherry {
        width: 100%;

        &__content {
            display: flex;
            align-items: center;
            gap: 30rpx;
        }

        &__button {
            &.hi-button {
                height: 80rpx;
                border-radius: 100px;
                flex: 1;
                font-size: 28rpx;
                font-weight: 700;
            }

            &--left.hi-button {
                background: #efebff;
                border: 1px solid #8670f7;
                color: #8670f7;

                :deep(.hi-button__text__sub) {
                    color: #d481e9;
                    font-size: 20rpx;
                }
            }

            &--right.hi-button {
                background: #8670f7;
                color: #ffffff;
            }
        }
    }
</style>
