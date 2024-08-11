<!--
 * hi-ui - 导航栏组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-navigation-bar" :class="_classes" :style="_styles">
        <!-- 左侧区域 -->
        <view class="hi-navigation-bar__left">
            <!-- 返回区域 -->
            <view class="hi-navigation-bar__back" @tap="handleBack" v-if="isShowBack">
                <!-- 返回按钮 -->
                <view class="hi-navigation-bar__back__icon">
                    <hi-icon :name="backIconName" v-bind="backIconProps"></hi-icon>
                </view>
                <!-- 返回文字 -->
                <text class="hi-navigation-bar__back__text" v-if="backText">{{ backText }}</text>
            </view>
            <!-- 左侧插槽 -->
            <slot name="left">
                <view class="hi-navigation-bar__buttons">
                    <block v-for="(btn, btnCurrent) in _leftMenu" :key="btnCurrent">
                        <view
                            class="hi-navigation-bar__button"
                            @tap="_emits('leftClick', btn, btnCurrent)"
                            :style="btn?.style"
                            v-if="btn?.show"
                            :hover-class="btn?.hoverClass"
                        >
                            <view class="hi-navigation-bar__button__icon" v-if="btn?.iconName || btn?.iconProps?.name" :style="btn?.iconStyle">
                                <hi-icon :name="btn?.iconName" v-bind="btn?.iconProps"></hi-icon>
                            </view>
                            <text
                                class="hi-navigation-bar__button__text"
                                :class="{ 'hi-navigation-bar__button__text--only': !btn?.iconProps?.name && !btn?.iconName }"
                                v-if="btn?.text"
                                :style="btn?.textStyle"
                            >
                                {{ btn?.text }}
                            </text>
                        </view>
                    </block>
                </view>
            </slot>
        </view>

        <!-- 中间区域 -->
        <view class="hi-navigation-bar__center">
            <slot name="center">
                <view class="hi-navigation-bar__title hi-line-1">
                    {{ title ?? titleText ?? "" }}
                </view>
            </slot>
        </view>

        <!-- 右侧区域 -->
        <view class="hi-navigation-bar__right">
            <view class="hi-navigation-bar__right__content">
                <slot name="right">
                    <view class="hi-navigation-bar__buttons">
                        <block v-for="(btn, btnCurrent) in _rightMenu" :key="btnCurrent">
                            <view
                                class="hi-navigation-bar__button"
                                @tap="_emits('rightClick', btn, btnCurrent)"
                                :style="btn?.style"
                                v-if="btn?.show"
                                :hover-class="btn?.hoverClass"
                            >
                                <view class="hi-navigation-bar__button__icon" v-if="btn?.iconName || btn?.iconProps?.name" :style="btn?.iconStyle">
                                    <hi-icon :name="btn?.iconName" v-bind="btn?.iconProps"></hi-icon>
                                </view>
                                <text
                                    class="hi-navigation-bar__button__text"
                                    :class="{ 'hi-navigation-bar__button__text--only': !btn?.iconProps?.name && !btn?.iconName }"
                                    v-if="btn?.text"
                                    :style="btn?.textStyle"
                                >
                                    {{ btn?.text }}
                                </text>
                            </view>
                        </block>
                    </view>
                </slot>
            </view>
        </view>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed, onMounted } from "vue";
    import { isObject, isTabBar, getCurrentPageData } from "@/uni_modules/hi-functions";
    import props from "./props.js";
    import pages from "@/pages.json";

    // 当前页面的数据
    const currentPageData = ref(null);

    // 系统信息
    const systemInfo = uni.getSystemInfoSync();

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits(["back", "leftClick", "rightClick"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 标题对齐方式
        classes.push(`hi-navigation-bar--${_props.align}`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 胶囊按钮布局信息
        // #ifdef MP
        styles.push(`--hi-navigation-bar-menu-button-width: ${menuButtonInfo.width}px`); // 胶囊按钮宽度
        styles.push(`--hi-navigation-bar-menu-button-right: ${systemInfo.windowWidth - menuButtonInfo.right}px`); // 胶囊按钮距离屏幕右侧的距离
        // #endif

        // 默认导航栏文字颜色
        styles.push(
            `--hi-navigation-bar-color--default: ${currentPageData.value?.style?.navigationBarTextStyle ?? pages?.globalStyle?.navigationBarTextStyle};`
        );

        // 默认导航栏背景
        styles.push(
            `--hi-navigation-bar-background--default: ${
                currentPageData.value?.style?.navigationBarBackgroundColor ?? pages?.globalStyle?.navigationBarBackgroundColor
            };`
        );

        return styles;
    });

    // 组件渲染完成后
    onMounted(() => {
        // 获取当前页面的数据
        currentPageData.value = getCurrentPageData();
    });

    // 默认标题
    const titleText = computed(() => {
        return currentPageData.value?.style?.navigationBarTitleText ?? pages?.globalStyle?.navigationBarTitleText;
    });

    // 胶囊按钮信息
    const menuButtonInfo = uni?.getMenuButtonBoundingClientRect ? uni.getMenuButtonBoundingClientRect() : {};

    // 左侧图标列表
    const _leftMenu = computed(() => {
        if (isObject(_props.leftMenu)) return [_props.leftMenu];
        return _props.leftMenu;
    });

    // 右侧图标列表
    const _rightMenu = computed(() => {
        if (isObject(_props.rightMenu)) return [_props.rightMenu];
        return _props.rightMenu;
    });

    // 是否显示返回按钮？
    const isShowBack = computed(() => {
        // 1. 开启了自动判断是否显示返回按钮
        if (_props.autoShowBack) {
            // 1.1. 如果是 tabBar 页面，不需要显示返回按钮
            if (isTabBar()) return false;

            // 1.2. 如果页面栈长度 <=1，同样不需要显示返回按钮
            return getCurrentPages().length > 1;
        }

        // 2. 否则，使用传入的设置
        return _props.showBack;
    });

    /**
     * 返回按钮点击事件
     */
    function handleBack() {
        if (_props.autoBack) {
            uni.navigateBack({
                delta: 1
            });
        }
        _emits("back");
    }

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-navigation-bar {
        height: var(--hi-navigation-bar-height, 44px);
        display: flex;
        align-items: center;
        padding: var(--hi-navigation-bar-padding, 0 8px);
        background: var(--hi-navigation-bar-background, var(--hi-navigation-bar-background--default));
        color: var(--hi-navigation-bar-color, var(--hi-navigation-bar-color--default));

        &__left {
            flex-shrink: 0;
            display: flex;
            align-items: center;
        }

        &__back {
            display: flex;
            align-items: center;
            font-size: var(--hi-navigation-bar-back-icon-size, 22px);
            color: var(--hi-navigation-bar-back-icon-color);

            &__text {
                font-size: var(--hi-navigation-bar-back-text-size, 0.625em);
                color: var(--hi-navigation-bar-back-text-color);
            }

            &:active {
                opacity: var(--hi-navigation-bar-back-icon-opacity-hover, var(--hi-opacity-hover, 0.9));
            }
        }

        &__center {
            flex-shrink: 0;
            font-size: var(--hi-navigation-bar-title-size, 16px);
            color: var(--hi-navigation-bar-title-color);
            font-weight: var(--hi-navigation-bar-title-weight, 600);
        }

        &__title {
            padding: var(--hi-navigation-bar-title-padding, 0 5px);
            text-align: center;
        }

        &__right {
            flex-shrink: 0;
            margin-left: auto;
            display: flex;
            align-items: center;

            &__content {
                display: flex;
                align-items: center;
                padding-right: calc(var(--hi-navigation-bar-menu-button-width) + var(--hi-navigation-bar-menu-button-right));
            }
        }

        &__buttons {
            display: flex;
            align-items: center;
            font-size: var(--hi-navigation-bar-menu-size, 18px);
            color: var(--hi-navigation-bar-menu-color);
            font-weight: var(--hi-navigation-bar-menu-weight, 500);
            line-height: var(--hi-navigation-bar-menu-line-height, 1);
        }

        &__button {
            display: flex;
            flex-direction: var(--hi-navigation-bar-menu-direction, column);
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: var(--hi-navigation-bar-menu-margin, 0 5px);

            &__text {
                font-size: var(--hi-navigation-bar-menu-text-size, 0.4em);
                color: var(--hi-navigation-bar-menu-text-color);
                font-weight: var(--hi-navigation-bar-menu-text-weight);
                margin: var(--hi-navigation-bar-menu-text-margin, 2px 0 0 0);

                &--only {
                    font-size: var(--hi-navigation-bar-menu-text-size, 0.7em);
                }
            }

            &:active {
                opacity: var(--hi-navigation-bar-menu-opacity-hover, var(--hi-opacity-hover));
            }
        }

        &--center {
            .hi-navigation-bar__left {
                flex: 1;
            }

            .hi-navigation-bar__right {
                flex: 1;
                justify-content: flex-end;
            }
        }
    }
</style>
