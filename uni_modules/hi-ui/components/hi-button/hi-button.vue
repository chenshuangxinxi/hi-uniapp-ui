<!--
 * hi-button - 按钮
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
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
        <hi-icon class="hi-button__icon hi-button__icon--loading hi-button__loading" :name="loadingIconName" v-if="loading && loadingIconName"></hi-icon>

        <!-- 左侧图标 -->
        <hi-icon class="hi-button__icon hi-button__icon--left" :name="leftIconName" v-if="!loading && leftIconName"></hi-icon>

        <!-- loading 提示 -->
        <view class="hi-button__text hi-button__text--loading" v-if="loading">{{ loadingText || text }}</view>

        <!-- 按钮文本 -->
        <slot>
            <view class="hi-button__text" v-if="!loading">
                <!-- 主文本 -->
                <text class="hi-button__text__main">{{ text }}</text>

                <!-- 副文本 -->
                <text class="hi-button__text__sub" v-if="subText">{{ subText }}</text>
            </view>
        </slot>

        <!-- 右侧图标 -->
        <hi-icon class="hi-button__icon hi-button__icon--right" :name="rightIconName" v-if="!loading && rightIconName"></hi-icon>
    </button>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { computed } from "vue";
    import props from "./props.js";

    // props
    const _props = defineProps(props);

    // emits
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

    // calsses
    const _classes = computed(() => {
        const classes = [];

        // 是否禁用
        if (_props.disabled) classes.push(`hi-disabled hi-button--disabled`);

        // loading 的时候也要禁用
        if (_props.loading) classes.push(`hi-disabled hi-button--disabled`);

        return classes;
    });

    // styles
    const _styles = computed(() => {
        const styles = [];
        return styles;
    });
</script>

<style lang="scss" scoped>
    .hi-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: inherit;
        color: #ffffff;
        width: auto;
        height: 80rpx;
        border-radius: var(--hi-radius-small);
        background: var(--hi-theme-main);
        padding: 0 12px;
        line-height: 1.25;
        gap: 3px;
        margin: 0;

        &::before,
        &::after {
            display: none;
        }

        &__loading {
            animation-name: hi-ani-spin;
            animation-duration: 1500ms;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }

        &__text {
            display: flex;
            flex-direction: column;
            text-align: center;

            &__sub {
                font-size: 0.7em;
            }
        }

        &__icon {
            font-size: 1.15em;
        }
    }
</style>
