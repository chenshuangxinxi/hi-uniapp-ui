<!--
 * hi-ui - 电梯导航组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-countdown" :class="_classes" :style="_styles">
        <view class="hi-countdown__content" v-if="endText">
            <slot name="end" :countdown="countdown">
                {{ endText }}
            </slot>
        </view>
        <view class="hi-countdown__content" v-else-if="countdown">
            <slot>
                <text class="hi-countdown__number hi-countdown__number--days" v-if="showDays">{{ days }}</text>
                <text class="hi-countdown__text hi-countdown__text--days" v-if="showDays">{{ separator?.days ?? ":" }}</text>
                <text class="hi-countdown__number hi-countdown__number--hours" v-if="showHours">{{ hours }}</text>
                <text class="hi-countdown__text hi-countdown__text--hours" v-if="showHours">{{ separator?.hours ?? ":" }}</text>
                <text class="hi-countdown__number hi-countdown__number--minutes" v-if="showMinutes">{{ minutes }}</text>
                <text class="hi-countdown__text hi-countdown__text--minutes" v-if="showMinutes">{{ separator?.minutes ?? ":" }}</text>
                <text class="hi-countdown__number hi-countdown__number--seconds" v-if="showSeconds">{{ seconds }}</text>
                <text class="hi-countdown__text hi-countdown__text--seconds" v-if="showSeconds && separator?.seconds">{{ separator?.seconds }}</text>
            </slot>
        </view>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
    import props from "./props.js";
    import { formatCountdown } from "@/uni_modules/hi-functions";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits(["change", "end"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 是否将数字显示成块
        if (_props.block) classes.push("hi-countdown--block");

        // 镂空
        if (_props.plain) classes.push("hi-countdown--plain");

        // 主题
        if (_props.theme) classes.push(`hi-countdown--theme`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 主题
        if (_props.theme) styles.push(`--hi-countdown-theme: var(--hi-theme-${_props.theme})`);

        return styles;
    });

    // 倒计时数据
    const countdown = ref(null);

    // keys
    const _keys = computed(() => {
        let keys = {};
        if (_props.mode.includes("dd")) keys.days = "dd";
        else keys.days = "d";
        if (_props.mode.includes("hh")) keys.hours = "hh";
        else keys.hours = "h";
        if (_props.mode.includes("mm")) keys.minutes = "mm";
        else keys.minutes = "m";
        if (_props.mode.includes("ss")) keys.seconds = "ss";
        else keys.seconds = "s";
        return keys;
    });

    // 判断是否显示天、小时、分钟、秒
    const showDays = computed(() => _props.mode.includes("dd") || _props.mode.includes("d"));
    const showHours = computed(() => _props.mode.includes("hh") || _props.mode.includes("h"));
    const showMinutes = computed(() => _props.mode.includes("mm") || _props.mode.includes("m"));
    const showSeconds = computed(() => _props.mode.includes("ss") || _props.mode.includes("s"));

    // 计算显示的天、小时、分钟、秒数据
    const days = computed(() => countdown.value?.[_keys.value.days]);
    const hours = computed(() => {
        if (showDays.value) return countdown.value?.[_keys.value.hours];
        return days.value * 24 + countdown.value?.[_keys.value.hours];
    });
    const minutes = computed(() => {
        if (showHours.value) return countdown.value?.[_keys.value.minutes];
        return hours.value * 60 + countdown.value?.[_keys.value.minutes];
    });
    const seconds = computed(() => {
        if (showMinutes.value) return countdown.value?.[_keys.value.seconds];
        return minutes.value * 60 + countdown.value?.[_keys.value.seconds];
    });

    // 倒计时定时器
    let timer = null;

    // 监听数据提交事件
    watch(
        countdown,
        (newVal) => {
            _emits("change", newVal);
            if (newVal?.isEnd) {
                _emits("end");
                clearTimer();
            }
        },
        { immediate: true }
    );

    // 组件渲染完成后开始倒计时
    onMounted(() => {
        countdown.value = formatCountdown("d天hh时mm分ss秒", _props.endDate);
        timer = setInterval(() => {
            countdown.value = formatCountdown("d天hh时mm分ss秒", _props.endDate);
        }, 1000);
    });

    // 组件卸载之前清除定时器
    onBeforeUnmount(() => {
        clearTimer();
    });

    /**
     * 清除定时器
     */
    function clearTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }
</script>

<style lang="scss" scoped>
    .hi-countdown {
        display: inline-flex;
        color: var(--hi-countdown-font-color, var(--hi-countdown-theme));

        &__content {
            display: flex;
            gap: var(--hi-countdown-items-gap, 2px);
            align-items: center;
        }

        &--block {
            .hi-countdown__content {
                gap: var(--hi-countdown-items-gap, 5px);
            }

            .hi-countdown__number {
                height: var(--hi-countdown-block-height, 2em);
                width: var(--hi-countdown-block-width);
                padding: var(--hi-countdown-block-padding, 0 0.4em);
                background: var(--hi-countdown-block-background, var(--hi-countdown-theme));
                border-width: var(--hi-countdown-block-border-width, 0.5px);
                border-style: var(--hi-countdown-block-border-style, solid);
                border-color: var(--hi-countdown-block-border-color, var(--hi-border-color-default));
                border-radius: var(--hi-countdown-block-border-radius, var(--hi-radius-middle));
                color: var(--hi-countdown-block-color);
                font-size: var(--hi-countdown-block-font-size);
                font-weight: var(--hi-countdown-block-font-weight);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            &.hi-countdown--theme {
                .hi-countdown__number {
                    color: var(--hi-countdown-block-color, #ffffff);
                }
            }
        }

        &--plain {
            .hi-countdown__number {
                background: var(--hi-countdown-plain-background, transparent);
                color: var(--hi-countdown-plain-color, currentColor);
                border-color: var(--hi-countdown-plain-border-color, currentColor);
            }

            &.hi-countdown--theme {
                .hi-countdown__number {
                    color: var(--hi-countdown-plain-color, var(--hi-countdown-theme));
                }
            }
        }
    }
</style>
