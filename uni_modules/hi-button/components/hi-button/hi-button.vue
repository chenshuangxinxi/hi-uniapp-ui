<!--
 * HiUi - 按钮
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <button
        class="hi-button"
        :class="_classes"
        :style="_styles"
        :hover-class="hoverClass"
        :form-type="formType"
        :open-type="openType"
        :hover-start-time="hoverStartTime"
        :hover-stay-time="hoverStayTime"
        :app-parameter="appParameter"
        :hover-stop-propagation="hoverStopPropagation"
        :lang="lang"
        :session-from="sessionFrom"
        :send-message-title="sendMessageTitle"
        :send-message-path="sendMessagePath"
        :send-message-img="sendMessageImg"
        :show-message-card="showMessageCard"
        :group-id="groupId"
        :guild-id="guildId"
        :public-id="publicId"
        :data-im-id="dataImId"
        :data-im-type="dataImType"
        :data-goods-id="dataGoodsId"
        :data-order-id="dataOrderId"
        :data-biz-line="dataBizLine"
        @getphonenumber="_emits('getphonenumber')"
        @getuserinfo="_emits('getuserinfo')"
        @error="_emits('error')"
        @opensetting="_emits('opensetting')"
        @launchapp="_emits('launchapp')"
        @contact="_emits('contact')"
        @chooseavatar="_emits('chooseavatar')"
        @agreeprivacyauthorization="_emits('agreeprivacyauthorization')"
        @addgroupapp="_emits('addgroupapp')"
        @chooseaddress="_emits('chooseaddress')"
        @chooseinvoicetitle="_emits('chooseinvoicetitle')"
        @subscribe="_emits('subscribe')"
        @login="_emits('login')"
        @im="_emits('im')"
    >
        <!-- loading 图标 -->
        <hi-icon
            class="hi-button__icon hi-button__icon--loading hi-button__loading"
            :name="loadingIconName"
            :size="loadingIconSize || iconSize"
            :color="loadingIconColor || iconColor"
            :mode="loadingIconMode || iconMode"
            v-if="loading"
        ></hi-icon>

        <!-- 左侧图标 -->
        <hi-icon
            class="hi-button__icon hi-button__icon--left"
            :name="leftIconName"
            :size="leftIconSize || iconSize"
            :color="leftIconColor || iconColor"
            :mode="leftIconColor || iconMode"
            v-if="!loading"
        ></hi-icon>

        <!-- loading 提示 -->
        <view class="hi-button__text hi-button__text--loading" v-if="loading && shape !== 'circle'">{{ loadingText ?? text }}</view>

        <!-- 按钮文本 -->
        <slot>
            <view class="hi-button__text" v-if="!loading && shape !== 'circle'">
                <!-- 主文本 -->
                <text class="hi-button__text__main">{{ text }}</text>

                <!-- 副文本 -->
                <text class="hi-button__text__sub" v-if="subText">{{ subText }}</text>
            </view>
        </slot>

        <!-- 右侧图标 -->
        <hi-icon
            class="hi-button__icon hi-button__icon--right"
            :name="rightIconName"
            :size="rightIconSize || iconSize"
            :color="rightIconColor || iconColor"
            :mode="rightIconMode || iconMode"
            v-if="!loading"
        ></hi-icon>
    </button>
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
    const _emits = defineEmits([
        "getphonenumber",
        "getuserinfo",
        "error",
        "opensetting",
        "launchapp",
        "contact",
        "chooseavatar",
        "agreeprivacyauthorization",
        "addgroupapp",
        "chooseaddress",
        "chooseinvoicetitle",
        "subscribe",
        "login",
        "im"
    ]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 是否禁用
        if (_props.disabled) classes.push(`${_props.disabledClass} hi-button--disabled`);

        // loading 的时候也要禁用
        if (_props.loading) classes.push(`${_props.disabledClass} hi-button--disabled`);

        // 主题按钮
        if (_props.theme) classes.push(`hi-button--theme hi-button--theme--${_props.theme}`);

        // 镂空按钮
        if (_props.plain) classes.push("hi-button--plain");

        // 块级按钮
        if (_props.block) classes.push("hi-button--block");

        // 按钮形状
        if (_props.shape) classes.push(`hi-button--${_props.shape}`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 主题按钮
        if (_props.theme) styles.push(`--hi-button-theme: var(--hi-theme-${_props.theme})`);

        // 文字大小
        if (_props.size) styles.push(`--hi-button-font-size: ${_props.size}`);

        // 文字颜色
        if (_props.color) styles.push(`--hi-button-color: ${_props.color}`);

        // 副文字大小
        if (_props.subSize) styles.push(`--hi-button-sub-text-font-size: ${_props.subSize}`);

        // 副文字颜色
        if (_props.subColor) styles.push(`--hi-button-sub-text-color: ${_props.subColor}`);

        // 背景
        if (_props.bg) styles.push(`--hi-button-background: ${_props.bg}`);

        // 圆角
        if (_props.radius) styles.push(`--hi-button-border-radius: ${_props.radius}`);

        // 宽
        if (_props.width) styles.push(`--hi-button-width: ${_props.width}`);

        // 高
        if (_props.height) styles.push(`--hi-button-height: ${_props.height}`);

        // 边框颜色
        if (_props.borderColor) styles.push(`--hi-button-border-color: ${_props.borderColor}`);

        return styles;
    });
</script>

<style lang="scss" scoped>
    .hi-button {
        display: var(--hi-button-display, inline-flex);
        align-items: center;
        justify-content: center;
        font-size: var(--hi-button-font-size, inherit);
        color: var(--hi-button-color, inherit);
        width: var(--hi-button-width, auto);
        height: var(--hi-button-height, 80rpx);
        border-width: var(--hi-button-border-wdith, 0.5px);
        border-style: var(--hi-button-border-style, solid);
        border-color: var(--hi-button-border-color, var(--hi-border-color));
        border-radius: var(--hi-button-border-radius, var(--hi-radius-small));
        background: var(--hi-button-background);
        padding: var(--hi-button-padding, 0 20rpx);
        margin: var(--hi-button-margin, 0);
        line-height: var(--hi-button-line-height, 1.25);
        gap: var(--hi-button-gap, 3px);

        &::before,
        &::after {
            display: none;
        }

        &__loading {
            animation-name: hi-ani-spin;
            animation-duration: var(--hi-button-loading-duration, 1500ms);
            animation-timing-function: var(--hi-button-loading-function, linear);
            animation-iteration-count: infinite;
        }

        &__text {
            margin: var(--hi-button-text-margin);
            display: flex;
            flex-direction: column;
            text-align: center;
            gap: var(--hi-button-text-gap);

            &__sub {
                font-size: var(--hi-button-sub-text-font-size, 0.7em);
                color: var(--hi-button-sub-text-color);
            }
        }

        &__icon {
            --hi-icon-size: var(--hi-button-icon-size, 1.15em);
            --hi-icon-color: var(--hi-button-icon-color);

            &--left {
                --hi-icon-size: var(--hi-button-left-icon-size, var(--hi-button-icon-size, 1.15em));
                --hi-icon-color: var(--hi-button-left-icon-color, var(--hi-button-icon-color));
            }

            &--right {
                --hi-icon-size: var(--hi-button-right-icon-size, var(--hi-button-icon-size, 1.15em));
                --hi-icon-color: var(--hi-button-right-icon-color, var(--hi-button-icon-color));
            }

            &--loading {
                --hi-icon-size: var(--hi-button-loading-icon-size, var(--hi-button-icon-size, 1.15em));
                --hi-icon-color: var(--hi-button-loading-icon-color, var(--hi-button-icon-color));
            }
        }

        &--theme {
            background: var(--hi-button-theme, var(--hi-button-background));
            border-color: var(--hi-button-theme, var(--hi-button-border-color, var(--hi-border-color)));
            color: var(--hi-button-color, #ffffff);
        }

        &--plain {
            background: transparent;
            border-color: var(--hi-button-theme, var(--hi-button-border-color, var(--hi-border-color)));
            color: var(--hi-button-theme, var(--hi-button-color));
        }

        &--block {
            display: flex;
            width: 100%;
        }

        &--round {
            border-radius: 1000px;
        }

        &--circle {
            border-radius: 50%;
            width: var(--hi-button-height, 80rpx);
            height: var(--hi-button-height, 80rpx);
            padding: 0;
        }
    }
</style>
