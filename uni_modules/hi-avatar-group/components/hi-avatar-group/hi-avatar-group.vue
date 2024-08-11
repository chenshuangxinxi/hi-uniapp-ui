<!--
 * 商品/物品属性组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-avatar-group" :class="_classes" :style="_styles">
        <view
            class="hi-avatar-group__item"
            v-for="(_item, _index) in avatars"
            :key="_index"
            :class="calcItemClass(_item, _index)"
            @animationend="onAnimationend(_index)"
        >
            <image class="hi-avatar-group__image" :src="_item[keyName]" :mode="mode" />
        </view>
        <view class="hi-avatar-group__item hi-avatar-group__item--more" v-if="showMore" @tap="_emits('more')">
            <hi-icon class="hi-avatar-group__icon" :name="moreIconName" v-bind="moreIconProps"></hi-icon>
        </view>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed, onMounted, nextTick } from "vue";
    import props from "./props.js";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits(["more"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 是否开启动画
        if (isAnimation.value) classes.push("hi-avatar-group--animation");

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 头像宽度
        if (_props.width) styles.push(`--hi-avatar-group-avatar-size: ${_props.width}`);

        // 头像高度
        if (_props.height) styles.push(`--hi-avatar-group-avatar-size: ${_props.height}`);

        // 头像偏移量
        if (_props.offset) styles.push(`--hi-avatar-group-avatar-offset: ${_props.offset}`);

        // 列数
        styles.push(`--hi-avatar-group-columns: ${_props.columns}`);

        return styles;
    });

    // 展示数据的起始索引
    const startIndex = ref(0);

    // 是否应用动画
    const isAnimation = computed(() => {
        // 头像数量小于设置的展示数量，不应用动画
        if (_props.list.length <= _props.number) return false;
        return _props.animation;
    });

    // 展示的头像列表
    const avatars = computed(() => {
        // 传入的头像列表长度 <= 设置的展示数量
        if (_props.list.length <= _props.number) return _props.list;

        // 开启了动画
        if (isAnimation.value) {
            // 多设置一个，用于动画
            const count = _props.number + 1;

            // 传入的头像列表长度 > 设置的展示数量
            // 如果从起始索引开始到结束的数量小于设置的展示数量
            if (_props.list.length - startIndex.value < count) {
                // 剩余的头像列表
                const lastList = _props.list.slice(startIndex.value);
                // 循环从头像列表的起始索引开始到设置的展示数量
                return lastList.concat(_props.list.slice(0, count - lastList.length));
            }

            // 传入的头像列表长度 > 设置的展示数量
            return _props.list.slice(startIndex.value, startIndex.value + count);
        }

        // 没开启动画
        return _props.list.slice(0, _props.number);
    });

    // 动画状态
    const animationStatus = ref("wait");

    // 启动动画
    onMounted(() => {
        startAnimation();
    });

    /**
     * 计算 item 的 class
     */
    function calcItemClass(item, index) {
        const classes = [];

        if (index === 0) classes.push("hi-avatar-group__item--first");
        if (index === avatars.value.length - 1) classes.push("hi-avatar-group__item--last");

        classes.push(`hi-avatar-group__item--animation-${animationStatus.value}`);

        return classes;
    }

    /**
     * 开始动画
     */
    function startAnimation() {
        if (isAnimation.value) {
            let timer = setTimeout(() => {
                animationStatus.value = "play";
                clearTimeout(timer);
            }, _props.delay);
        }
    }

    /**
     * 动画结束的回调函数
     * @param {Number} index 头像下标，主要是为了只触发一次这个函数
     */
    function onAnimationend() {
        if (animationStatus.value === "play") {
            // 更新索引
            startIndex.value = startIndex.value + 1 >= _props.list.length ? 0 : startIndex.value + 1;

            nextTick(() => {
                // H5需要延迟一下，要不会抖动，小程序反而不用，🐶🐶🐶🐶🐶🐶🐶🐶
                // #ifdef H5
                let timer = setTimeout(() => {
                    animationStatus.value = "";
                    clearTimeout(timer);
                }, 10);
                // #endif

                // #ifndef H5
                animationStatus.value = "";
                // #endif
            });

            // 开始下次动画
            startAnimation();
        }
    }

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-avatar-group {
        display: inline-flex;
        align-items: center;

        &__item {
            width: var(--hi-avatar-group-avatar-size, 40rpx);
            height: var(--hi-avatar-group-avatar-size, 40rpx);
            border-radius: var(--hi-avatar-group-avatar-border-radius, 50%);
            overflow: hidden;
            position: relative;
            z-index: 1;
            flex-shrink: 0;
            background: var(--hi-avatar-group-avatar-background, #ffffff);

            &:not(:first-child) {
                margin-left: calc(-1 * var(--hi-avatar-group-avatar-offset, 15rpx));
            }

            &--more {
                background: var(--hi-avatar-group-more-background, #c8c8c8);
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        &__image {
            width: 100%;
            height: 100%;
        }

        &--animation {
            .hi-avatar-group__item {
                animation-timing-function: ease-in-out;
                animation-duration: var(--hi-avatar-group-animation-duration, 500ms);
                animation-fill-mode: forwards;

                &.hi-avatar-group__item--animation-play {
                    animation-name: hi-avatar-group-ani-move;
                }
            }

            .hi-avatar-group__item--more {
                margin-left: calc(-1 * var(--hi-avatar-group-avatar-size, 40rpx));
            }

            .hi-avatar-group__item--first {
                &.hi-avatar-group__item--animation-play {
                    animation-name: hi-avatar-group-ani-leave;
                }
            }

            .hi-avatar-group__item--last {
                opacity: 0;
                transform: scale(0);

                &.hi-avatar-group__item--animation-play {
                    animation-name: hi-avatar-group-ani-enter;
                }
            }
        }

        @keyframes hi-avatar-group-ani-leave {
            100% {
                opacity: 0;
                transform: scale(0);
            }
        }

        @keyframes hi-avatar-group-ani-move {
            100% {
                transform: translateX(calc(-1 * (var(--hi-avatar-group-avatar-size, 40rpx) - var(--hi-avatar-group-avatar-offset, 15rpx))));
            }
        }

        @keyframes hi-avatar-group-ani-enter {
            100% {
                opacity: 1;
                transform: scale(1) translateX(calc(-1 * (var(--hi-avatar-group-avatar-size, 40rpx) - var(--hi-avatar-group-avatar-offset, 15rpx))));
            }
        }
    }
</style>
