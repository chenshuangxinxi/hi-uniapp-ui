<!--
 * hi-loadmore - 加载更多
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-loadmore" :class="_classes" :style="_styles" :hover-class="hoverClass" v-if="!!status">
        <!-- loadmore -->
        <view class="hi-loadmore__body hi-loadmore__body--loadmore" v-if="status === 'loadmore'">
            <text class="hi-loadmore__text" @tap="_emits('more')">{{ loadmoreText }}</text>
        </view>

        <!-- loading -->
        <view class="hi-loadmore__body hi-loadmore__body--loading" v-else-if="status === 'loading'">
            <hi-icon class="hi-loadmore__icon" :name="iconName"></hi-icon>
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
        color: var(--hi-color-light);
        font-size: 0.8em;

        &__body {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            gap: 5px;
        }

        &__icon {
            font-size: 1.5em;
            animation-name: hi-ani-spin;
            animation-duration: 1500ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }
</style>
