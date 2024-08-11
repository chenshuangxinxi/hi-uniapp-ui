<!--
 * hi-ui - 电梯导航组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-elevator" :class="_classes" :style="_styles">
        <!-- 左侧楼层 -->
        <view class="hi-elevator__floors">
            <scroll-view class="hi-elevator__floors__scroll-view" scroll-y :scroll-into-view="scrollIntoViewId" scroll-with-animation>
                <view
                    class="hi-elevator__floor"
                    v-for="(_item, _index) in floors"
                    :key="_index"
                    :class="{ 'hi-elevator__floor--active': _index === _current, 'hi-elevator__floor--disabled': !!_item?.disabled }"
                    :id="`hiElevatorFloor${_index}`"
                    @tap="handleFloorClick(_index)"
                >
                    <slot name="leftItem" :item="_item" :index="_index">
                        <view class="hi-elevator__floor__content">
                            {{ _item.text }}
                        </view>
                    </slot>
                </view>
            </scroll-view>
        </view>

        <!-- 右侧房间 -->
        <view class="hi-elevator__rooms">
            <swiper class="hi-elevator__swiper" :current="_current" vertical @change="onSwiperChange">
                <swiper-item class="hi-elevator__swiper__item hi-elevator__list" v-for="(_item, _index) in floors" :key="_index">
                    <scroll-view
                        class="hi-elevator__list__scroll-view"
                        scroll-y
                        :upper-threshold="upperThreshold"
                        :lower-threshold="lowerThreshold"
                        :refresher-enabled="refresherEnabled"
                        :refresher-threshold="refresherThreshold"
                        :refresher-default-style="refresherDefaultStyle"
                        :refresher-background="refresherBackground"
                        :scroll-anchoring="scrollAnchoring"
                        :refresher-triggered="_item?.refresherTriggered"
                        @scrolltoupper="_emits('scrolltoupper', _index)"
                        @scrolltolower="_emits('scrolltolower', _index)"
                        @scroll="_emits('scroll', $event, _index)"
                        @refresherpulling="_emits('refresherpulling', _index)"
                        @refresherrefresh="_emits('refresherrefresh', _index)"
                        @refresherrestore="_emits('refresherrestore', _index)"
                        @refresherabort="_emits('refresherabort', _index)"
                    >
                        <slot name="rightItem" :item="_item" :index="_index"></slot>
                    </scroll-view>
                </swiper-item>
            </swiper>
        </view>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed, watch, onMounted } from "vue";
    import props from "./props.js";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits([
        "change",
        "scrolltoupper",
        "scrolltolower",
        "scroll",
        "refresherpulling",
        "refresherrefresh",
        "refresherrestore",
        "refresherabort"
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

    // 激活的下标
    const _current = ref(0);

    // 左侧楼层 scroll-view 的 scroll-into-view 的值
    const scrollIntoViewId = computed(() => {
        return `hiElevatorFloor${_current.value}`;
    });

    // 侦听下标变化，实时向上提交事件
    watch(
        _current,
        (newCurrent) => {
            _emits("change", newCurrent);
        },
        { immediate: true }
    );

    // 设置默认激活项
    onMounted(() => {
        _current.value = _props.current ?? 0;
    });

    /**
     * 楼层点击事件
     * @param {Number} index 楼层的下标
     */
    function handleFloorClick(_index) {
        _current.value = _index;
    }

    /**
     * 右侧 swiper 切换事件
     */
    function onSwiperChange(e) {
        _current.value = e.detail.current;
    }
</script>

<style lang="scss" scoped>
    .hi-elevator {
        width: var(--hi-elevator-width, 100%);
        height: var(--hi-elevator-height, 100%);
        display: flex;
        flex: 1;

        &__floors {
            width: var(--hi-elevator-floors-width, 180rpx);
            flex-shrink: 0;
            height: var(--hi-elevator-floors-height);
            background: var(--hi-elevator-floors-background, #f1f3f4);
            overflow: hidden;
            font-size: var(--hi-elevator-floors-font-size);
            color: var(--hi-elevator-floors-font-color);
            text-align: var(--hi-elevator-floors-text-align, center);
            font-weight: var(--hi-elevator-floors-font-weight, 400);

            &__scroll-view {
                width: 100%;
                height: 100%;
            }
        }

        &__floor {
            &__content {
                padding: var(--hi-elevator-floor-padding, 1em 0.5em);
                position: relative;
                transition: var(--hi-elevator-floors-bar-transition, 0.3s ease-in-out);

                &::before {
                    content: "";
                    width: var(--hi-elevator-floors-bar-width, 0);
                    height: var(--hi-elevator-floors-bar-height, 0);
                    border-radius: var(--hi-elevator-floors-bar-border-radius, var(--hi-radius-small));
                    background: var(--hi-elevator-floors-bar-background, var(--hi-theme-main));
                    position: absolute;
                    left: var(--hi-elevator-floors-bar-left, 0);
                    top: var(--hi-elevator-floors-bar-top, 50%);
                    right: var(--hi-elevator-floors-bar-right, auto);
                    bottom: var(--hi-elevator-floors-bar-bottom, auto);
                    transform: translateY(-50%);
                    transition: inherit;
                    opacity: 0;
                    z-index: 1;
                }
            }

            &--active {
                background: var(--hi-elevator-floors-active-background, #ffffff);
                font-size: var(--hi-elevator-floors-active-font-size);
                color: var(--hi-elevator-floors-active-font-color, var(--hi-theme-main));
                font-weight: var(--hi-elevator-floors-active-font-weight, 800);

                .hi-elevator__floor__content::before {
                    width: var(--hi-elevator-floors-bar-width, 6rpx);
                    height: var(--hi-elevator-floors-bar-height, 1em);
                    opacity: 1;
                }
            }

            &--disabled {
                opacity: var(--hi-elevator-floors-disabled-opacity, var(--hi-opacity-disabled));
                pointer-events: none;
            }
        }

        &__rooms {
            flex: 1;
            overflow: hidden;
            height: var(--hi-elevator-rooms-height);
        }

        &__swiper {
            width: 100%;
            height: 100%;
        }

        &__list {
            position: relative;

            &__scroll-view {
                width: 100%;
                height: 100%;
                position: relative;
            }
        }
    }
</style>
