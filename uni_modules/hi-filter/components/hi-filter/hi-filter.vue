<!--
 * HiUi - 过滤器
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-filter" :class="_classes" :style="_styles">
        <view class="hi-filter__left">
            <scroll-view scroll-x class="hi-filter__scroll-view">
                <view class="hi-filter__items">
                    <view
                        class="hi-filter__item"
                        :class="{
                            'hi-filter__item--active': _item?.checked,
                            'hi-filter__item--disabled': _item?.disabled,
                            'hi-filter__item--reverse': _item?.reverse
                        }"
                        v-for="(_item, _index) in items"
                        :key="_index"
                        @tap="_emits('itemClick', _item, _index)"
                        :hover-class="hoverClass"
                    >
                        <slot name="item" :item="_item" :index="_index">
                            <view class="hi-filter__item__content">
                                <hi-icon class="hi-filter__item__icon" v-bind="calcItemIconProps(_item)" v-if="_item.showIcon"></hi-icon>
                                <view class="hi-filter__item__text" v-if="_item.showText">
                                    {{ _item?.checked ? _item?.checkedText ?? _item?.text : _item?.text }}
                                </view>
                            </view>
                        </slot>
                    </view>
                </view>
            </scroll-view>
        </view>
        <view class="hi-filter__right" v-if="showRight" :hover-class="hoverClass" @tap="_emits('rightClick')">
            <view class="hi-filter__right__text" v-if="showRightText">{{ rightText }}</view>
            <hi-icon
                class="hi-filter__right__icon"
                :name="rightIconName"
                :size="rightIconSize"
                :color="rightIconColor"
                :mode="rightIconMode"
                v-if="showRightIcon"
            ></hi-icon>
        </view>
    </view>
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
    const _emits = defineEmits(["itemClick", "rightClick"]);

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

    /**
     * 计算过滤项图标的 props
     * @param {Object} item 过滤项数据
     */
    function calcItemIconProps(item) {
        if (item?.checked) {
            return {
                name: item?.checkedIconName ?? item?.iconName,
                color: item?.checkedIconColor ?? _props.checkedItemIconColor ?? item?.iconColor ?? _props.itemIconColor,
                size: item?.checkedIconSize ?? _props.checkedItemIconSize ?? item?.iconSize ?? _props.itemIconSize,
                mode: item?.checkedIconMode ?? _props?.checkedItemIconMode ?? item?.iconMode ?? _props.itemIconMode
            };
        }

        return {
            name: item?.iconName,
            color: item?.iconColor ?? _props.itemIconColor,
            size: item?.iconSize ?? _props.itemIconSize,
            mode: item?.iconMode ?? _props.itemIconMode
        };
    }
</script>

<style lang="scss" scoped>
    .hi-filter {
        display: flex;
        line-height: 1;

        // 隐藏滚动条
        ::-webkit-scrollbar {
            display: none;
        }

        &__left {
            flex: 1;
            overflow: hidden;
        }

        &__scroll-view {
            white-space: nowrap;
        }

        &__items {
            display: inline-flex;
            align-items: center;
            gap: var(--hi-filter-items-gap, 1em);
            font-size: var(--hi-filter-items-font-size);
            color: var(--hi-filter-items-color);
            background: var(--hi-filter-items-background);
        }

        &__item {
            flex-shrink: 0;
            position: relative;

            &__content {
                display: flex;
                align-items: center;
                gap: var(--hi-filter-item-content-gap, 2px);
                position: relative;
            }

            &__icon {
                font-size: var(--hi-filter-item-icon-font-size);
                color: var(--hi-filter-item-icon-font-color);
            }

            &__label {
                font-size: var(--hi-filter-item-label-font-size);
                color: var(--hi-filter-item-label-font-color);
            }

            &--active {
                color: var(--hi-filter-item-active-font-color, var(--hi-theme-main));
                font-size: var(--hi-filter-item-active-font-size);
                font-weight: var(--hi-filter-item-active-font-weight, 500);

                .hi-filter__item__icon {
                    color: var(--hi-filter-item-active-icon-font-color);
                    font-size: var(--hi-filter-item-active-icon-font-size);
                    font-weight: var(--hi-filter-item-active-icon-font-weight);
                }

                .hi-filter__item__label {
                    color: var(--hi-filter-item-active-label-font-color);
                    font-size: var(--hi-filter-item-active-label-font-size);
                    font-weight: var(--hi-filter-item-active-label-font-weight);
                }
            }

            &--reverse {
                .hi-filter__item__content {
                    flex-direction: row-reverse;
                }
            }

            &--disabled {
                opacity: var(--hi-filter-item-disabled-opacity, var(--hi-opacity-disabled));
                pointer-events: none;
            }
        }

        &__right {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            gap: var(--hi-filter-right-content-gap, 2px);
            margin: var(--hi-filter-right-margin, 0 0 0 1em);
            color: var(--hi-filter-right-color);
            font-size: var(--hi-filter-right-font-size);
            font-weight: var(--hi-filter-right-font-weight);

            &__text {
                font-size: var(--hi-filter-right-text-font-size);
                font-weight: var(--hi-filter-right-text-font-weight);
                color: var(--hi-filter-right-text-color);
            }

            &__icon {
                font-size: var(--hi-filter-right-icon-font-size);
                color: var(--hi-filter-right-icon-font-color);
                font-weight: var(--hi-filter-right-icon-font-weight);
            }
        }
    }
</style>
