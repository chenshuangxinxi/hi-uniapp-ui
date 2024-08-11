<!--
 * 固定在页面底部的组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-fixed-bottom-camellia" :class="_classes" :style="_styles">
        <view class="hi-fixed-bottom-camellia__content">
            <hi-button
                class="hi-fixed-bottom-camellia__button hi-fixed-bottom-camellia__button--left"
                v-bind="{ ..._leftBtnProps, ...leftBtnProps }"
                @tap="_emits('leftClick')"
                @getphonenumber="_emits('leftgetphonenumber')"
                @getuserinfo="_emits('leftgetuserinfo')"
                @error="_emits('lefterror')"
                @opensetting="_emits('leftopensetting')"
                @launchapp="_emits('leftlaunchapp')"
                @contact="_emits('leftcontact')"
                @chooseavatar="_emits('leftchooseavatar')"
                @agreeprivacyauthorization="_emits('leftagreeprivacyauthorization')"
                @addgroupapp="_emits('leftaddgroupapp')"
                @chooseaddress="_emits('leftchooseaddress')"
                @chooseinvoicetitle="_emits('leftchooseinvoicetitle')"
                @subscribe="_emits('leftsubscribe')"
                @login="_emits('leftlogin')"
                @im="_emits('leftim')"
            ></hi-button>
            <hi-button
                class="hi-fixed-bottom-camellia__button hi-fixed-bottom-camellia__button--right"
                v-bind="{ ..._rightBtnProps, ...rightBtnProps }"
                @tap="_emits('rightClick')"
                @getphonenumber="_emits('rightgetphonenumber')"
                @getuserinfo="_emits('rightgetuserinfo')"
                @error="_emits('righterror')"
                @opensetting="_emits('rightopensetting')"
                @launchapp="_emits('rightlaunchapp')"
                @contact="_emits('rightcontact')"
                @chooseavatar="_emits('rightchooseavatar')"
                @agreeprivacyauthorization="_emits('rightagreeprivacyauthorization')"
                @addgroupapp="_emits('rightaddgroupapp')"
                @chooseaddress="_emits('rightchooseaddress')"
                @chooseinvoicetitle="_emits('rightchooseinvoicetitle')"
                @subscribe="_emits('rightsubscribe')"
                @login="_emits('rightlogin')"
                @im="_emits('rightim')"
            ></hi-button>
        </view>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed } from "vue";
    import props from "./props.js";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits(["leftClick", "rightClick"]);

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

    // 左侧按钮的默认配置项
    const _leftBtnProps = ref({
        theme: "main",
        text: "余额支付",
        subText: "可用余额：￥0元",
        shape: "round"
    });

    // 右侧按钮的默认配置项
    const _rightBtnProps = ref({
        theme: "primary",
        text: "微信支付",
        shape: "round"
    });

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-fixed-bottom-camellia {
        position: fixed;
        width: var(--hi-fixed-bottom-camellia-width, 100%);
        left: var(--hi-fixed-bottom-camellia-left, 0);
        bottom: var(--hi-fixed-bottom-camellia-bottom, 0);
        padding-bottom: env(safe-area-inset-bottom);

        &__content {
            display: flex;
            align-items: center;
            gap: var(--hi-fixed-bottom-camellia-gap, 30rpx);
            padding: var(--hi-fixed-bottom-camellia-padding, 1em);
        }

        &__button {
            --hi-button-padding: var(--hi-fixed-camellia-bottom-padding, 0 1em);

            &--left {
                flex: var(--hi-fixed-camellia-bottom-left-flex, 1);
            }

            &--right {
                flex: var(--hi-fixed-camellia-bottom-right-flex, 1);
            }
        }
    }
</style>
