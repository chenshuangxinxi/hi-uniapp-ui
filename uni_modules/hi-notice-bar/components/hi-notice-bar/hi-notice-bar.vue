<!--
 * HiUi - 滚动通知
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-notice-bar" :class="_classes" :style="_styles" v-if="show">
        <!-- 左侧通知图标 -->
        <hi-icon
            class="hi-notice-bar__icon hi-notice-bar__icon--notice"
            :name="noticeIconName"
            :color="noticeIconColor"
            :size="noticeIconSize"
            :mode="noticeIconMode"
            v-if="showNoticeIcon"
            :hover-class="hoverClass"
        ></hi-icon>

        <!-- 内容区域 -->
        <view class="hi-notice-bar__content">
            <view
                class="hi-notice-bar__text"
                :class="`${_index === current ? 'hi-notice-bar__text--move-to' : ''} ${_textClasses}`"
                :style="getTextStyles(_item, _index)"
                v-for="(_item, _index) in list"
                :key="_index"
                @transitionend="onTransitionEnd(_index)"
                @tap="_emits('click', _item, _index)"
                :hover-class="hoverClass"
            >
                {{ _item[keyName] }}
            </view>
        </view>

        <!-- 更多 -->
        <hi-icon
            class="hi-notice-bar__icon hi-notice-bar__icon--arrow"
            :name="arrowIconName"
            :color="arrowIconColor"
            :size="arrowIconSize"
            :mode="arrowIconMode"
            v-if="mode.split(' ').includes('arrow')"
            @tap="_emits('arrow', current)"
            :hover-class="hoverClass"
        ></hi-icon>

        <!-- 关闭 -->
        <hi-icon
            class="hi-notice-bar__icon hi-notice-bar__icon--close"
            :name="closeIconName"
            :color="closeIconColor"
            :size="closeIconSize"
            :mode="closeIconMode"
            v-if="mode.split(' ').includes('closable')"
            @tap="_emits('close')"
            :hover-class="hoverClass"
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
    const _emits = defineEmits(["click", "arrow", "close"]);

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

        // 步进式滚动时锁定文本为 1 行
        if (_props.step) classes.push(`hi-line-1`);

        return classes.join(" ");
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 背景
        if (_props.bg) styles.push(`--hi-notice-bar-background: ${_props.bg}`);

        // 文字大小
        if (_props.size) styles.push(`--hi-notice-bar-font-size: ${_props.size}`);

        // 文字颜色
        if (_props.color) styles.push(`--hi-notice-bar-color: ${_props.color}`);

        // 内边距
        if (_props.padding) styles.push(`--hi-notice-bar-padding: ${_props.padding}`);

        // 滚动区域的高度
        if (_props.height) styles.push(`--hi-notice-bar-content-height: ${_props.height}`);

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
            }, _props.interval * 1000);
        }

        // 设置了滚动间隔
        // 这里和上面的逻辑一样，应该写到一个判断条件中，为了以后的扩展，先这样写吧~
        else if (_props.interval) {
            let timer = setTimeout(() => {
                current.value = index + 1 >= _props.list.length ? 0 : index + 1;
                clearTimeout(timer);
            }, _props.interval * 1000);
        }

        // 其他，滚动结束后就需要切换下标
        else {
            current.value = index + 1 >= _props.list.length ? 0 : index + 1;
        }
    }

    /**
     * 计算滚动通知文本的样式
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
</script>

<style lang="scss" scoped>
    .hi-notice-bar {
        display: flex;
        align-items: center;
        background: var(--hi-notice-bar-background);
        color: var(--hi-notice-bar-color);
        padding: var(--hi-notice-bar-padding);
        font-size: var(--hi-notice-bar-font-size);
        line-height: var(--hi-notice-bar-line-height, 1.5);

        &__content {
            flex: 1;
            position: relative;
            overflow: hidden;
            height: var(--hi-notice-bar-content-height, 1.5em);
            display: flex;
            align-items: center;
            margin: var(--hi-notice-bar-content-margin, 0 5px);
        }

        &__text {
            position: absolute;
        }

        &__icon {
            --hi-icon-size: var(--hi-notice-bar-icon-size);
            --hi-icon-color: var(--hi-notice-bar-icon-color);
            --hi-icon-image-width: var(--hi-notice-bar-icon-image-width);
            --hi-icon-image-height: var(--hi-notice-bar-icon-image-height);

            &--notice {
                --hi-icon-size: var(--hi-notice-bar-notice-icon-size, var(--hi-notice-bar-icon-size));
                --hi-icon-color: var(--hi-notice-bar-notice-icon-color, var(--hi-notice-bar-icon-color));
                --hi-icon-image-width: var(--hi-notice-bar-notice-icon-image-width, var(--hi-notice-bar-icon-image-width));
                --hi-icon-image-height: var(--hi-notice-bar-notice-icon-image-height, var(--hi-notice-bar-icon-image-height));
            }

            &--arrow {
                --hi-icon-size: var(--hi-notice-bar-arrow-icon-size, var(--hi-notice-bar-icon-size));
                --hi-icon-color: var(--hi-notice-bar-arrow-icon-color, var(--hi-notice-bar-icon-color));
                --hi-icon-image-width: var(--hi-notice-bar-arrow-icon-image-width, var(--hi-notice-bar-icon-image-width));
                --hi-icon-image-height: var(--hi-notice-bar-arrow-icon-image-height, var(--hi-notice-bar-icon-image-height));
            }

            &--close {
                --hi-icon-size: var(--hi-notice-bar-close-icon-size, var(--hi-notice-bar-icon-size));
                --hi-icon-color: var(--hi-notice-bar-close-icon-color, var(--hi-notice-bar-icon-color));
                --hi-icon-image-width: var(--hi-notice-bar-close-icon-image-width, var(--hi-notice-bar-icon-image-width));
                --hi-icon-image-height: var(--hi-notice-bar-close-icon-image-height, var(--hi-notice-bar-icon-image-height));
            }
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
