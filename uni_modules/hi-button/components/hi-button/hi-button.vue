<!--
 * hi-ui - 按钮组件
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
        <hi-icon :name="loadingName" v-bind="loadingProps" v-if="loading" class="hi-button__icon hi-button__loading"></hi-icon>
        <hi-icon
            :name="prevIconName"
            v-bind="prevIconProps"
            v-if="(prevIconName || prevIconProps?.name) && !loading"
            class="hi-button__icon hi-button__icon--prev"
        ></hi-icon>
        <view class="hi-button__text hi-button__text--loading" v-if="loading && !iconButton">{{ loadingText ?? text }}</view>
        <slot>
            <view class="hi-button__text" v-if="!loading && !iconButton">
                <text class="hi-button__text__main">{{ text }}</text>
                <text class="hi-button__text__sub" v-if="subText">{{ subText }}</text>
            </view>
        </slot>
        <hi-icon
            :name="nextIconName"
            v-bind="nextIconProps"
            v-if="(nextIconName || nextIconProps?.name) && !loading"
            class="hi-button__icon hi-button__icon--next"
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
        if (_props.disabled) classes.push("hi-button--disabled");

        // loading 的时候也要禁用
        if (_props.loading) classes.push("hi-button--disabled");

        // 块级按钮
        if (_props.block) classes.push("hi-button--block");

        // 镂空按钮
        if (_props.plain) classes.push("hi-button--plain");

        // 按钮形状
        if (_props.shape) classes.push(`hi-button--${_props.shape}`);

        // 图标按钮
        if (_props.iconButton) classes.push("hi-button--icon-button");

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 主题按钮
        if (_props.theme)
            styles.push(
                `--hi-button-background: var(--hi-theme-${_props.theme}); --hi-button-border-color: var(--hi-theme-${_props.theme}); --hi-button-color: #ffffff;`
            );

        // 镂空按钮
        if (_props.plain) {
            // 有主题
            if (_props.theme)
                styles.push(
                    `--hi-button-background: transparent; --hi-button-border-color: var(--hi-theme-${_props.theme}); --hi-button-color: var(--hi-theme-${_props.theme});`
                );
            // 无主题
            else styles.push(`--hi-button-background: transparent;`);
        }

        return styles;
    });
</script>

<style lang="scss" scoped>
    .hi-button {
        display: var(--hi-button-display, inline-flex);
        align-items: center;
        justify-content: center;
        font-size: var(--hi-button-size, 1em);
        color: var(--hi-button-color, inherit);
        width: var(--hi-button-width, auto);
        height: var(--hi-button-height, 88rpx);
        border-width: var(--hi-button-border-wdith, 1px);
        border-style: var(--hi-button-border-style, solid);
        border-color: var(--hi-button-border-color, var(--hi-border-color-default));
        border-radius: var(--hi-button-border-radius, var(--hi-radius-middle));
        background: var(--hi-button-background);
        padding: var(--hi-button-padding, 0 2.5em);
        margin: var(--hi-button-margin, 0);
        line-height: var(--hi-button-line-height, 1);

        &::before,
        &::after {
            display: none;
        }

        &__text {
            margin: var(--hi-button-text-margin, 0 3px);
            display: flex;
            flex-direction: column;
            text-align: center;
            gap: var(--hi-button-text-conent-gap, 5px);

            &__sub {
                font-size: var(--hi-button-text-sub-font-size, 0.7em);
                color: var(--hi-button-text-sub-font-color);
            }
        }

        &__icon {
            --hi-icon-size: var(--hi-button-icon-size, 1.1em);
        }

        &--disabled {
            pointer-events: none;
            opacity: var(--hi-button-opacity-disabled, var(--hi-opacity-disabled, 0.5));
        }

        &--block {
            display: var(--hi-button-display, flex);
            width: var(--hi-button-width, 100%);
        }

        &--round {
            border-radius: 1000px;
        }

        &--circle {
            border-radius: 50%;
        }

        &--icon-button {
            width: var(--hi-button-width, var(--hi-button-height, 88rpx));
            height: var(--hi-button-height, var(--hi-button-height, 88rpx));
            padding: var(--hi-button-padding, 0);
        }

        &__loading {
            animation-name: hi-ani-spin;
            animation-duration: var(--hi-button-loading-duration, 1500ms);
            animation-timing-function: var(--hi-button-loading-function, linear);
            animation-iteration-count: infinite;
        }
    }
</style>
