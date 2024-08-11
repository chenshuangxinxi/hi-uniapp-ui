<!--
 * hi-ui - 过滤器组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
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
                            'hi-filter__item--reverse': _item.reverse
                        }"
                        v-for="(_item, _index) in items"
                        :key="_index"
                        @tap="_emits('itemClick', _item, _index)"
                        :hover-class="hoverClass"
                    >
                        <slot name="item" :item="_item" :index="_index">
                            <view class="hi-filter__item__content">
                                <hi-icon
                                    class="hi-filter__item__icon"
                                    :name="_item?.checked && _item?.checkedIconName ? _item?.checkedIconName : _item?.iconName"
                                    v-bind="_item?.checked && _item?.checkedIconProps ? _item?.checkedIconProps : _item?.iconProps"
                                    v-if="
                                        _item?.checked
                                            ? _item?.checkedIconName || _item?.checkedIconProps?.name || _item?.iconName || _item?.iconProps?.name
                                            : _item?.iconName || _item?.iconProps?.name
                                    "
                                ></hi-icon>
                                <view class="hi-filter__item__label" v-if="_item?.checked ? _item.checkedLabel ?? _item?.label : _item?.label">
                                    {{ _item?.checked ? _item?.checkedLabel ?? _item?.label : _item?.label }}
                                </view>
                            </view>
                        </slot>
                    </view>
                </view>
            </scroll-view>
        </view>
        <view class="hi-filter__right" v-if="showRight" :hover-class="hoverClass" @tap="_emits('rightClick')">
            <view class="hi-filter__right__text" v-if="rightText">{{ rightText }}</view>
            <hi-icon class="hi-filter__right__icon" :name="rightIconName" :props="rightIconProps" v-if="rightIconName || rightIconProps?.name"></hi-icon>
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
