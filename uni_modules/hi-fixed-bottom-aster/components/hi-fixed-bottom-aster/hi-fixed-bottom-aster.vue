<!--
 * 固定在页面底部的组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-fixed-bottom-aster" :class="_classes" :style="_styles">
        <view class="hi-fixed-bottom-aster__content">
            <hi-button
                class="hi-fixed-bottom-aster__button hi-fixed-bottom-aster__button--left"
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
                class="hi-fixed-bottom-aster__button hi-fixed-bottom-aster__button--right"
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
    const _emits = defineEmits([
        "leftClick",
        "rightClick",
        "leftgetphonenumber",
        "leftgetuserinfo",
        "lefterror",
        "leftopensetting",
        "leftlaunchapp",
        "leftcontact",
        "leftchooseavatar",
        "leftagreeprivacyauthorization",
        "leftaddgroupapp",
        "leftchooseaddress",
        "leftchooseinvoicetitle",
        "leftsubscribe",
        "leftlogin",
        "leftim",
        "rightgetphonenumber",
        "rightgetuserinfo",
        "righterror",
        "rightopensetting",
        "rightlaunchapp",
        "rightcontact",
        "rightchooseavatar",
        "rightagreeprivacyauthorization",
        "rightaddgroupapp",
        "rightchooseaddress",
        "rightchooseinvoicetitle",
        "rightsubscribe",
        "rightlogin",
        "rightim"
    ]);

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
        text: "加入购物车",
        shape: "round",
        block: true
    });

    // 右侧按钮的默认配置项
    const _rightBtnProps = ref({
        theme: "primary",
        text: "立即购买",
        shape: "round",
        block: true
    });

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-fixed-bottom-aster {
        position: fixed;
        width: var(--hi-fixed-bottom-aster-width, 100%);
        left: var(--hi-fixed-bottom-aster-left, 0);
        bottom: var(--hi-fixed-bottom-aster-bottom, 0);
        padding-bottom: env(safe-area-inset-bottom);

        &__content {
            display: flex;
            align-items: center;
            gap: var(--hi-fixed-bottom-aster-gap, 0.85em);
            padding: var(--hi-fixed-bottom-aster-padding, 1em);
        }

        &__button {
            --hi-button-padding: var(--hi-fixed-aster-bottom-padding, 0 1em);

            &--left {
                --hi-button-width: var(--hi-fixed-aster-bottom-left-button-width, 35%);
            }

            &--right {
                --hi-button-width: var(--hi-fixed-aster-bottom-right-button-width, auto);
                flex: 1;
            }
        }
    }
</style>
