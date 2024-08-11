<!--
 * hi-ui - loadmore 加载更多组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-loadmore" :class="_classes" :style="_styles" :hover-class="hoverClass">
        <!-- loadmore -->
        <view class="hi-loadmore__body hi-loadmore__body--loadmore" v-if="status === 'loadmore'">
            <text class="hi-loadmore__text" @tap="_emits('more')">{{ loadmoreText }}</text>
        </view>

        <!-- loading -->
        <view class="hi-loadmore__body hi-loadmore__body--loading" v-else-if="status === 'loading'">
            <hi-icon class="hi-loadmore__icon" :name="loadingIconName" v-bind="loadingIconProps"></hi-icon>
            <text class="hi-loadmore__text">{{ loadingText }}</text>
        </view>

        <!-- nomore -->
        <view class="hi-loadmore__body hi-loadmore__body--nomore" v-else-if="status === 'nomore'">
            <text class="hi-loadmore__text">{{ nomoreText }}</text>
        </view>
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
    const _emits = defineEmits(["more"]);

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
    .hi-loadmore {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--hi-loadmore-padding, 20rpx);
        font-size: var(--hi-loadmore-size, 0.8em);
        color: var(--hi-loading-more-color, var(--hi-font-color-light));

        &__body {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__icon {
            font-size: var(--hi-loadmore-icon-size, 1.3em);
            color: var(--hi-loadmore-icon-color, var(--hi-loadmore-color));
            animation-name: hi-ani-spin;
            animation-duration: var(--hi-loadmore-duration, 1500ms);
            animation-iteration-count: infinite;
            animation-timing-function: var(--hi-loadmore-function, linear);
        }

        &__text {
            margin: var(--hi-loadmore-text-margin, 0 5px);
        }
    }
</style>
