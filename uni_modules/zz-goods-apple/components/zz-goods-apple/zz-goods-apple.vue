<!--
 * zz-goods-apple - 商品
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="zz-goods-apple" :class="_classes" :style="_styles" :hover-class="hoverClass">
        <!-- 图片 -->
        <view class="zz-goods-apple__image-box">
            <hi-image class="zz-goods-apple__image" :src="item.image" :mode="mode"></hi-image>
        </view>

        <!-- 内容 -->
        <view class="zz-goods-apple__content">
            <view class="zz-goods-apple__title" :class="`hi-line-${line}`">{{ item.title }}</view>
            <view class="zz-goods-apple__bottom">
                <hi-price :value="item.price" class="zz-goods-apple__price"></hi-price>
                <view class="zz-goods-apple__shopping-cart" v-if="showShoppingCart">
                    <hi-icon class="zz-goods-apple__shopping-cart__icon" :name="shoppingCartIconName" @tap.stop="_emits('addCart', item)"></hi-icon>
                </view>
            </view>
        </view>

        <!-- 标签 -->
        <view class="zz-goods-apple__tags">
            <slot name="tags">
                <hi-tag
                    class="zz-goods-apple__tag"
                    :style="`color: ${_tag.color}; background: ${_tag.background}`"
                    v-for="(_tag, _index) in item.tags"
                    :key="_index"
                    :text="_tag?.text"
                ></hi-tag>
            </slot>
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
    const _emits = defineEmits(["addCart"]);

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
    .zz-goods-apple {
        position: relative;
        border: 0.5px solid var(--hi-border-color);
        border-radius: var(--hi-radius-default);
        overflow: hidden;
        height: 100%;
        display: flex;
        flex-direction: column;

        &__image-box {
            height: 340rpx;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__image {
            width: 100%;
            height: 100%;
        }

        &__content {
            padding: 20rpx 24rpx;
            display: flex;
            flex-direction: column;
            flex: 1;
        }

        &__title {
            font-weight: 700;
            margin: 0 0 1em 0;
        }

        &__bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
        }

        &__shopping-cart {
            width: 2.15em;
            height: 2.15em;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: var(--hi-theme-primary);
            color: #ffffff;
        }

        &__tags {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 9;
            padding: 18rpx 10rpx;
            display: flex;
            flex-wrap: wrap;
            gap: 10rpx;
        }
    }
</style>
