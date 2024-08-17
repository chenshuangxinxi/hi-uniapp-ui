<!--
 * hi-filter - 过滤器
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
                        :class="[
                            _item?.class,
                            current === _index ? 'hi-filter__item--active' : '',
                            _item?.disabled ? 'hi-disabled hi-filter__item--disabled' : ''
                        ]"
                        :style="_item?.style"
                        v-for="(_item, _index) in list"
                        :key="_index"
                        @tap="_emits('itemClick', _item, _index)"
                        :hover-class="hoverClass"
                    >
                        <slot name="item" :item="_item" :index="_index">
                            <view class="hi-filter__item__content">
                                <view class="hi-filter__item__text">
                                    {{ current === _index ? _item?.checkedText || _item?.text : _item?.text }}
                                </view>
                                <hi-icon class="hi-filter__item__icon" v-bind="calcItemIconProps(_item, _index)"></hi-icon>
                            </view>
                        </slot>
                    </view>
                </view>
            </scroll-view>
        </view>
        <view class="hi-filter__right" v-if="showRight" :hover-class="hoverClass" @tap="_emits('rightClick')">
            <slot name="right">
                <view class="hi-filter__right__text">{{ rightText }}</view>
                <hi-icon class="hi-filter__right__icon" :name="rightIconName"></hi-icon>
            </slot>
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
     * @param {Number} index 过滤项下标
     */
    function calcItemIconProps(item, index) {
        if (_props.current === index) {
            return {
                name: item?.checkedIconName || item?.iconName
            };
        }

        return {
            name: item?.iconName
        };
    }
</script>

<style lang="scss" scoped>
    .hi-filter {
        display: flex;

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
            gap: 15px;
        }

        &__item {
            flex-shrink: 0;
            position: relative;

            &__content {
                display: flex;
                align-items: center;
                gap: 2px;
                position: relative;
            }

            &__icon {
                font-size: 1.15em;
            }

            &--active {
                color: var(--hi-theme-primary);
                font-weight: 500;
            }
        }

        &__right {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            gap: 2px;
            margin-left: 10px;

            &__icon {
                font-size: 1.15em;
            }
        }
    }
</style>
