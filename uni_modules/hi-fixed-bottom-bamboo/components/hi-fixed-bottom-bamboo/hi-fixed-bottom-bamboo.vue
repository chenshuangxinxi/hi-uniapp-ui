<!--
 * 固定在页面底部的组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-fixed-bottom-bamboo" :class="_classes" :style="_styles">
        <view class="hi-fixed-bottom-bamboo__content">
            <view class="hi-fixed-bottom-bamboo__total">
                <text class="hi-fixed-bottom-bamboo__total__label">{{ label }}</text>
                <hi-price class="hi-fixed-bottom-bamboo__total__price" :price="price"></hi-price>
            </view>
            <hi-button
                class="hi-fixed-bottom-bamboo__button hi-fixed-bottom-bamboo__button--right"
                v-bind="{ ..._btnProps, ...btnProps }"
                @tap="_emits('click')"
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
        "click",
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
        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];
        return styles;
    });

    // 右侧按钮的默认配置项
    const _btnProps = ref({
        theme: "primary",
        text: "去结算",
        shape: "round"
    });

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-fixed-bottom-bamboo {
        position: fixed;
        width: var(--hi-fixed-bottom-bamboo-width, 100%);
        left: var(--hi-fixed-bottom-bamboo-left, 0);
        bottom: var(--hi-fixed-bottom-bamboo-bottom, 0);
        padding-bottom: env(safe-area-inset-bottom);
        background: var(--hi-fixed-bottom-bamboo-background, #ffffff);

        &__content {
            display: flex;
            align-items: center;
            gap: var(--hi-fixed-bottom-bamboo-gap, 0.85em);
            padding: var(--hi-fixed-bottom-bamboo-padding, 1em);
        }

        &__total {
            flex: 1;
        }

        &__button {
            flex-shrink: 0;
            --hi-button-padding: var(--hi-fixed-bamboo-bottom-padding, 0 2.5em);

            &--right {
                --hi-button-width: var(--hi-fixed-bottom-bamboo-button-width, auto);
            }
        }
    }
</style>
