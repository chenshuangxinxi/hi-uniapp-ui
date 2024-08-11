<!--
 * hi-ui - 滚动通知组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-notice-bar" :class="_classes" :style="_styles" v-if="modelValue">
        <hi-icon class="hi-notice-bar__icon hi-notice-bar__icon--notice" :name="noticeIconName" v-bind="noticeIconProps" v-if="noticeIcon"></hi-icon>
        <view class="hi-notice-bar__content">
            <view
                class="hi-notice-bar__text"
                :class="`${_index === current ? 'hi-notice-bar__text--move-to' : ''} ${_textClasses}`"
                :style="getTextStyles(_item, _index)"
                v-for="(_item, _index) in list"
                :key="_index"
                @transitionend="onTransitionEnd(_index)"
                @tap="_emits('click', _item, _index)"
            >
                {{ _item[keyName] }}
            </view>
        </view>
        <hi-icon
            class="hi-notice-bar__icon hi-notice-bar__icon--arrow"
            :name="arrowName"
            v-bind="arrowProps"
            v-if="mode.split(' ').includes('arrow')"
            @tap="_emits('arrow', current)"
        ></hi-icon>
        <hi-icon
            class="hi-notice-bar__icon hi-notice-bar__icon--close"
            :name="closeName"
            v-bind="closeProps"
            v-if="mode.split(' ').includes('closable')"
            @tap="handleClose"
        ></hi-icon>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed, onMounted, getCurrentInstance, nextTick } from "vue";
    import props from "./props.js";
    import { isNumber } from "@/uni_modules/hi-functions";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits(["click", "arrow", "close", "update:modelValue"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 滚动方向
        if (_props.direction) classes.push(`hi-notice-bar--${_props.direction}`);

        // 步进式滚动
        if (_props.step) classes.push(`hi-notice-bar--step`);

        return classes;
    });

    // 滚动文字元素的类名
    const _textClasses = computed(() => {
        const classes = [];

        if (_props.step) classes.push(`hi-line-1`);

        return classes.join(" ");
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];
        return styles;
    });

    // 当前滚动通知的下标
    const current = ref(-1);

    // 所有通知的布局信息
    const rects = ref([]);

    // 组件渲染完后
    onMounted(async () => {
        // 获取所有通知的布局信息
        await getRects();

        // 数据更新完后稍微延时一下再开始
        nextTick(() => {
            let timer = setTimeout(() => {
                current.value = 0;
                clearTimeout(timer);
            }, 250);
        });
    });

    /**
     * 获取所有通知的布局信息
     */
    function getRects() {
        return new Promise((resolve, reject) => {
            uni.createSelectorQuery()
                ?.in(getCurrentInstance())
                .selectAll(".hi-notice-bar__text")
                .boundingClientRect()
                .exec((res) => {
                    rects.value = res[0] ?? [];
                    resolve();
                });
        });
    }

    /**
     * 过渡结束事件
     * @param {Number} index 滚动通知的下标
     */
    function onTransitionEnd(index) {
        // 步近模式时，滚动结束后等待一下再切换下标
        if (_props.step) {
            let timer = setTimeout(() => {
                current.value = index + 1 >= _props.list.length ? 0 : index + 1;
                clearTimeout(timer);
            }, (_props.interval || 5) * 1000);
        }

        // 设置了滚动间隔
        else if (isNumber(_props.interval)) {
            let timer = setTimeout(() => {
                current.value = index + 1 >= _props.list.length ? 0 : index + 1;
                clearTimeout(timer);
            }, _props.interval * 1000);
        }

        // 非步近时，滚动结束后就需要切换下标
        else {
            current.value = index + 1 >= _props.list.length ? 0 : index + 1;
        }
    }

    /**
     * 计算滚动同时的样式
     * @param {Object} _item 滚动通知数据
     * @param {Number} _index 滚动通知下标
     */
    function getTextStyles(_item, _index) {
        const styles = [];

        // 计算动画持续时长
        // 1. 单独设置的动画持续时长
        if (_props?.duration) styles.push(`--hi-notice-bar-duration: ${_props.duration}s`);
        // 2. 设置了每秒滚动距离，需手动计算时长
        else if (_props?.speed) {
            // 横向滚动
            if (_props?.direction === "row") {
                styles.push(`--hi-notice-bar-duration: ${(rects.value[_index]?.width ?? 0) / _props.speed}s`);
            }

            // 纵向滚动
            else {
                styles.push(`--hi-notice-bar-duration: ${(rects.value[_index]?.height ?? 0) / _props.speed}s`);
            }
        }

        return styles;
    }

    /**
     * 关闭事件
     */
    function handleClose() {
        _emits("close");
    }
</script>

<style lang="scss" scoped>
    .hi-notice-bar {
        display: flex;
        align-items: center;
        background: var(--hi-notice-bar-background);
        color: var(--hi-notice-bar-color);
        padding: var(--hi-notice-bar-padding);
        font-size: var(--hi-notice-bar-size);
        line-height: var(--hi-notice-line-height, 1.5);

        &__content {
            flex: 1;
            position: relative;
            overflow: hidden;
            height: var(--hi-notice-bar-text-height, 1.5em);
            display: flex;
            align-items: center;
            margin: var(--hi-notice-bar-text-margin, 0 0.5em);
        }

        &__text {
            position: absolute;
        }

        &__icon {
            font-size: var(--hi-notice-bar-notice-icon-size 1.15em);
            color: var(--hi-notice-bar-notice-icon-color);
        }

        &--row {
            .hi-notice-bar__text {
                top: 0;
                left: 100%;
                transform: translateX(0);
                white-space: nowrap;
            }

            .hi-notice-bar__text--move-to {
                transform: translateX(-100%);
                left: 0;
                transition-duration: var(--hi-notice-bar-duration, 5s);
                transition-timing-function: linear;
                transition-delay: 0s;
            }
        }

        &--column {
            .hi-notice-bar__text {
                width: 100%;
                top: 100%;
                left: 0;
                transform: translateY(0);
            }

            .hi-notice-bar__text--move-to {
                transform: translateY(-100%);
                top: 0;
                transition-duration: var(--hi-notice-bar-duration, 2.5s);
                transition-timing-function: linear;
                transition-delay: 0s;
            }
        }

        &--step {
            &.hi-notice-bar--row {
                .hi-notice-bar__text {
                    width: 100%;
                    left: 100%;
                    transform: translateX(0px);
                    white-space: normal;
                }

                .hi-notice-bar__text--move-to {
                    transform: translateX(0px);
                    left: 0;
                    transition: var(--hi-notice-bar-duration, 1s) linear;
                }
            }

            &.hi-notice-bar--column {
                .hi-notice-bar__text {
                    top: 100%;
                    transform: translateY(0px);
                }

                .hi-notice-bar__text--move-to {
                    transform: translateY(0px);
                    top: 0;
                    transition: var(--hi-notice-bar-duration, 0.5s) linear;
                }
            }
        }
    }
</style>
