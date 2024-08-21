<!--
 * hi-cell - 单元格
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-cell" :class="_classes" :style="_styles" :hover-class="hoverClass">
        <!-- 垂直居中 -->
        <view class="hi-cell__wrapper" v-if="center">
            <view class="hi-cell__left">
                <slot name="left">
                    <hi-icon class="hi-cell__left__icon" :name="leftIconName" v-if="leftIconName"></hi-icon>
                </slot>
            </view>
            <view class="hi-cell__body">
                <slot name="body">
                    <view class="hi-cell__content">
                        <view class="hi-cell__title">
                            <slot name="title">
                                {{ title }}
                            </slot>
                        </view>
                        <view class="hi-cell__tips">
                            <slot name="tips">
                                {{ tips }}
                            </slot>
                        </view>
                    </view>
                </slot>

                <view class="hi-cell__desc">
                    <slot name="desc">
                        {{ desc }}
                    </slot>
                </view>
            </view>
            <view class="hi-cell__right" v-if="showRight">
                <slot name="right">
                    <hi-icon class="hi-cell__right__icon" :name="rightIconName"></hi-icon>
                </slot>
            </view>
        </view>

        <!-- 非垂直居中 -->
        <view class="hi-cell__wrapper" v-else>
            <view class="hi-cell__body">
                <view class="hi-cell__left">
                    <slot name="left">
                        <hi-icon class="hi-cell__left__icon" :name="leftIconName" v-if="leftIconName"></hi-icon>
                    </slot>
                </view>
                <view class="hi-cell__content">
                    <view class="hi-cell__title hi-line-1">
                        <slot name="title">
                            {{ title }}
                        </slot>
                    </view>
                    <view class="hi-cell__desc">
                        <slot name="desc">
                            {{ desc }}
                        </slot>
                    </view>
                </view>
                <view class="hi-cell__right" v-if="showRight">
                    <slot name="right">
                        <hi-icon class="hi-cell__right__icon" :name="rightIconName"></hi-icon>
                    </slot>
                </view>
            </view>
            <view class="hi-cell__footer">
                <view class="hi-cell__left hi-cell__left--placeholder">
                    <slot name="left">
                        <hi-icon class="hi-cell__left__icon" :name="leftIconName"></hi-icon>
                    </slot>
                </view>
                <view class="hi-cell__tips">
                    <slot name="tips">
                        {{ tips }}
                    </slot>
                </view>
            </view>
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

    // 事件
    const _emits = defineEmits([""]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 垂直居中
        if (_props.center) classes.push("hi-cell--center");

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];
        return styles;
    });
</script>

<style lang="scss" scoped>
    .hi-cell {
        background: #ffffff;
        border-radius: var(--hi-radius-default);
        padding: 12px;

        &__wrapper {
            display: flex;
            flex-direction: column;
        }

        &__body {
            display: flex;
            align-items: center;
        }

        &__left {
            flex-shrink: 0;
            font-size: 1.25em;
            display: flex;
            align-items: center;

            &__icon {
                margin-right: 6px;
            }

            &--placeholder {
                opacity: 0;
                transform: scale(0);
                height: 0;
            }
        }

        &__content {
            display: flex;
            flex: 1;
            align-items: center;
            gap: 10px;
        }

        &__title {
            flex: 1;
            font-weight: 500;
        }

        &__desc {
            flex-shrink: 0;
            color: var(--hi-color-light);
            font-size: 0.8em;
        }

        &__right {
            flex-shrink: 0;
            color: var(--hi-color-light);
            display: flex;
            align-items: center;
            margin-left: 2px;
        }

        &__footer {
            display: flex;
            align-items: center;
        }

        &__tips {
            color: var(--hi-color-light);
            font-size: 0.8em;
            flex: 1;
        }

        &--center {
            .hi-cell__wrapper {
                flex-direction: row;
                align-items: center;
            }

            .hi-cell__body {
                flex: 1;
            }

            .hi-cell__content {
                gap: 0;
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }
</style>
