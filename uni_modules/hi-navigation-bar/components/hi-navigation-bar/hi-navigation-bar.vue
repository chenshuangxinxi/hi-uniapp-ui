<!--
 * HiUi - 导航栏
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-navigation-bar" :class="_classes" :style="_styles">
        <!-- 左侧区域 -->
        <view class="hi-navigation-bar__left">
            <!-- 返回区域 -->
            <view class="hi-navigation-bar__back" @tap="handleBack" v-if="isShowBack" :hover-class="hoverClass">
                <slot name="back">
                    <!-- 返回按钮 -->
                    <view class="hi-navigation-bar__back__icon">
                        <hi-icon :name="backIconName" :color="backIconColor" :size="backIconSize" :mode="backIconMode"></hi-icon>
                    </view>
                    <!-- 返回文字 -->
                    <text class="hi-navigation-bar__back__text" v-if="backText">{{ backText }}</text>
                </slot>
            </view>

            <!-- 左侧插槽 -->
            <slot name="left">
                <view class="hi-navigation-bar__buttons hi-navigation-bar__buttons--left">
                    <block v-for="(btn, btnCurrent) in _leftMenu" :key="btnCurrent">
                        <view
                            class="hi-navigation-bar__button hi-navigation-bar__button--left"
                            @tap="handleMenuClick('left', btn, btnCurrent)"
                            :style="btn?.style"
                            v-if="btn?.show"
                            :hover-class="btn?.hoverClass ?? hoverClass"
                        >
                            <view
                                class="hi-navigation-bar__button__icon hi-navigation-bar__button__icon--left"
                                v-if="btn?.showIcon || (btn?.showIcon !== false && showMenuIcon)"
                                :style="btn?.iconStyle"
                            >
                                <hi-icon
                                    :name="btn?.iconName"
                                    :color="btn?.iconColor ?? menuIconColor"
                                    :size="btn?.iconSize ?? menuIconSize"
                                    :mode="btn?.iconMode ?? menuIconMode"
                                ></hi-icon>
                            </view>
                            <text
                                class="hi-navigation-bar__button__text hi-navigation-bar__button__text--left"
                                v-if="btn?.showText || showMenuText"
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
            <slot name="title" :title="titleText">
                <view class="hi-navigation-bar__title hi-line-1">
                    {{ titleText }}
                </view>
            </slot>
        </view>

        <!-- 右侧区域 -->
        <view class="hi-navigation-bar__right">
            <view class="hi-navigation-bar__right__content">
                <slot name="right">
                    <view class="hi-navigation-bar__buttons hi-navigation-bar__buttons--right">
                        <block v-for="(btn, btnCurrent) in _rightMenu" :key="btnCurrent">
                            <view
                                class="hi-navigation-bar__button hi-navigation-bar__button--right"
                                @tap="handleMenuClick('right', btn, btnCurrent)"
                                :style="btn?.style"
                                v-if="btn?.show"
                                :hover-class="btn?.hoverClass ?? hoverClass"
                            >
                                <view
                                    class="hi-navigation-bar__button__icon hi-navigation-bar__button__icon--right"
                                    v-if="btn?.showIcon || (btn?.showIcon !== false && showMenuIcon)"
                                    :style="btn?.iconStyle"
                                >
                                    <hi-icon
                                        :name="btn?.iconName"
                                        :color="btn?.iconColor ?? menuIconColor"
                                        :size="btn?.iconSize ?? menuIconSize"
                                        :mode="btn?.iconMode ?? menuIconMode"
                                    ></hi-icon>
                                </view>
                                <text
                                    class="hi-navigation-bar__button__text hi-navigation-bar__button__text--right"
                                    v-if="btn?.showText || showMenuText"
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
    const _emits = defineEmits(["back", "menuClick", "leftMenuClick", "rightMenuClick"]);

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

        // 内容文字颜色
        if (_props.color) styles.push(`--hi-navigation-bar-color: ${_props.color};`);

        // 内容文字大小
        if (_props.size) styles.push(`--hi-navigation-bar-font-size: ${_props.size};`);

        // 内容文字字重
        if (_props.weight) styles.push(`--hi-navigation-bar-font-weight: ${_props.weight};`);

        // 高度
        if (_props.height) styles.push(`--hi-navigation-bar-height: ${_props.height};`);

        // 标题颜色
        if (_props.titleColor) styles.push(`--hi-navigation-bar-title-color: ${_props.titleColor};`);

        // 标题文字大小
        if (_props.titleSize) styles.push(`--hi-navigation-bar-title-font-size: ${_props.titleSize};`);

        // 标题字重
        if (_props.titleWeight) styles.push(`--hi-navigation-bar-title-font-weight: ${_props.titleWeight};`);

        // 返回文字大小
        if (_props.backTextSize) styles.push(`--hi-navigation-bar-back-text-font-size: ${_props.backTextSize};`);

        // 返回文字颜色
        if (_props.backTextColor) styles.push(`--hi-navigation-bar-back-text-color: ${_props.backTextColor};`);

        // 返回文字字重
        if (_props.backTextWeight) styles.push(`--hi-navigation-bar-back-text-font-weight: ${_props.backTextWeight};`);

        // 返回按钮内容之间的间距
        if (_props.backGap) styles.push(`--hi-navigation-bar-back-gap: ${_props.backGap};`);

        // 按钮间距
        if (_props.menuGap) styles.push(`--hi-navigation-bar-menu-gap: ${_props.menuGap};`);

        // 菜单按钮文字大小
        if (_props.menuTextSize) styles.push(`--hi-navigation-bar-menu-text-font-size: ${_props.menuTextSize};`);

        // 菜单按钮文字颜色
        if (_props.menuTextColor) styles.push(`--hi-navigation-bar-menu-text-color: ${_props.menuTextColor};`);

        // 菜单按钮文字字重
        if (_props.menuTextWeight) styles.push(`--hi-navigation-bar-menu-text-font-weight: ${_props.menuTextWeight};`);

        return styles;
    });

    // 组件渲染完成后
    onMounted(() => {
        // 获取当前页面的数据
        currentPageData.value = getCurrentPageData();
    });

    // 默认标题
    const titleText = computed(() => {
        if (_props.autoTitle) {
            return _props.title ?? currentPageData.value?.style?.navigationBarTitleText ?? pages?.globalStyle?.navigationBarTitleText;
        }
        return _props.title;
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
        if (_props.autoShowBack && _props.showBack) {
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
        _emits("back");
        if (_props.autoBack) {
            uni.navigateBack({
                delta: 1
            });
        }
    }

    /**
     * 菜单按钮点击事件
     * @param {String} type 菜单类型
     * @param {Object} btn 菜单按钮
     * @param {Number} btnCurrent 菜单按钮索引
     */
    function handleMenuClick(type, btn, btnCurrent) {
        _emits("menuClick", btn, btnCurrent, type);
        if (type === "left") {
            _emits("leftMenuClick", btn, btnCurrent);
        } else {
            _emits("rightMenuClick", btn, btnCurrent);
        }
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
        font-size: var(--hi-navigation-bar-font-size);
        font-weight: var(--hi-navigation-bar-font-weight);

        &__left {
            flex-shrink: 0;
            display: flex;
            align-items: center;
        }

        &__back {
            display: flex;
            align-items: center;
            font-size: var(--hi-navigation-bar-back-font-size);
            color: var(--hi-navigation-bar-back-color);
            gap: var(--hi-navigation-bar-back-gap, 2px);
            font-weight: var(--hi-navigation-bar-back-font-weight);

            &__icon {
                font-size: var(--hi-navigation-bar-back-icon-size, 22px);
                color: var(--hi-navigation-bar-back-icon-color, inherit);
            }

            &__text {
                font-size: var(--hi-navigation-bar-back-text-font-size, 14px);
                color: var(--hi-navigation-bar-back-text-color, inherit);
                font-weight: var(--hi-navigation-bar-back-text-font-weight, inherit);
            }
        }

        &__center {
            flex-shrink: 0;
            font-size: var(--hi-navigation-bar-title-font-size, 16px);
            color: var(--hi-navigation-bar-title-color, inherit);
            font-weight: var(--hi-navigation-bar-title-font-weight, 600);
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
            font-size: var(--hi-navigation-bar-menu-font-size, 18px);
            color: var(--hi-navigation-bar-menu-color, inherit);
            font-weight: var(--hi-navigation-bar-menu-font-weight, 500);
            line-height: var(--hi-navigation-bar-menu-line-height, 1);
            gap: var(--hi-navigation-bar-menu-gap, 8px);
            padding: var(--hi-navigation-bar-buttons-padding, 0 5px);
        }

        &__button {
            display: flex;
            flex-direction: var(--hi-navigation-bar-menu-direction, column);
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: var(--hi-navigation-bar-menu-gap);

            &__text {
                font-size: var(--hi-navigation-bar-menu-text-font-size, 10px);
                color: var(--hi-navigation-bar-menu-text-color, inherit);
                font-weight: var(--hi-navigation-bar-menu-text-font-weight, inherit);
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
