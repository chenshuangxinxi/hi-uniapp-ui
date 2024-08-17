<!--
 * HiUi - 图标
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-icon" :class="_classes" :style="_styles">
        <!-- 字体图标 -->
        <text class="hi-icon__iconfont" :class="_iconfontClasses" v-if="!_isImage"></text>

        <!-- 图片图标 -->
        <image class="hi-icon__image" :src="name" :mode="mode" v-else></image>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { computed } from "vue";
    import props from "./props.js";
    import { isString, isArray } from "@/uni_modules/hi-functions";

    // props
    const _props = defineProps(props);

    // classes
    const _classes = computed(() => {
        const classes = [];

        // 图片图标
        if (_isImage.value) classes.push("hi-icon--image");

        return classes;
    });

    // 图标名称（类名）
    const _iconfontClasses = computed(() => {
        const classes = [];

        // 1. 不是图片图标
        if (!_props.name?.includes("/")) {
            // 1.1. 内置图标，以双下划线开头的默认被当作成内置图标
            if (_props.name.startsWith("__")) {
                classes.push(`hi_iconfont hi_iconfont${_props.name}`);
            }

            // 1.2. 扩展图标
            else {
                // 2.1. 设置了扩展图标前缀
                if (uni?.$hi?.config?.icon?.prefix) {
                    // 2.1.1. 扩展图标前缀是字符串
                    if (isString(uni.$hi.config.icon.prefix)) {
                        // 添加对应的类名
                        classes.push(`${uni.$hi.config.icon.prefix} ${uni.$hi.config.icon.prefix + _props.name}`);
                    }

                    // 2.1.2. 扩展图标前缀是数组（多扩展图标库）
                    if (isArray(uni.$hi.config.icon.prefix)) {
                        // 添加对应的类名
                        classes.push(...uni.$hi.config.icon.prefix.map((prefix) => `${prefix} ${prefix}-${_props.name}`));
                    }
                }

                // 2.2. 未设置扩展图标前缀，直接将传入的值加到类名上
                else {
                    classes.push(`${_props.name}`);
                }
            }
        }

        return classes;
    });

    // 图片图标?
    const _isImage = computed(() => _props.name?.includes("/"));
</script>

<style lang="scss" scoped>
    // HiUi 内置 iconfont 图标库
    @import "./hi-ui-iconfont.css";

    .hi-icon {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        // 字体图标
        &__iconfont {
            font-size: 1em;
        }

        // 图片图标
        &__image {
            display: inline-block;
            font-size: 1em;
            width: var(--hi-icon-image-width, 1em);
            height: var(--hi-icon-image-height, 1em);
        }

        &--image {
            width: var(--hi-icon-image-width, 1em);
            height: var(--hi-icon-image-height, 1em);
        }
    }
</style>
