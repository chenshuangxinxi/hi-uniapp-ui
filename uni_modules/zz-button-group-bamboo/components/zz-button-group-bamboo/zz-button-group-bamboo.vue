<!--
 * zz-button-group-bamboo - 按钮组合
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="zz-button-group-bamboo" :class="_classes" :style="_styles">
        <view class="zz-button-group-bamboo__content">
            <view class="zz-button-group-bamboo__total">
                <text class="zz-button-group-bamboo__total__label">{{ label }}</text>
                <hi-price class="zz-button-group-bamboo__total__price" :value="price"></hi-price>
            </view>
            <hi-button class="zz-button-group-bamboo__button" text="去结算" @tap="_emits('click')"></hi-button>
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
    .zz-button-group-bamboo {
        width: 100%;

        &__content {
            display: flex;
            align-items: center;
            gap: 20rpx;
        }

        &__total {
            flex: 1;

            &__price {
                color: #ff4952;

                :deep(.hi-price__unit) {
                    font-size: 0.9em;
                }

                :deep(.hi-price__value) {
                    font-size: 1.65em;
                }
            }
        }

        &__button {
            &.hi-button {
                flex-shrink: 0;
                background: linear-gradient(90deg, #ee86e4, #6269fd);
                height: 80rpx;
                font-size: 32rpx;
                font-weight: 700;
                color: #ffffff;
                border-radius: 1000px;
                padding: 0 72rpx;
            }
        }
    }
</style>
