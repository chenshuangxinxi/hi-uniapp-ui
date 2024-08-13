<!--
 * HiUi - 单选框
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__tips">单选组件需要放到 `hi-radio-group` 组件中使用</view>
            <view class="demo-module__content">
                <hi-radio-group v-model="checked1">
                    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
                </hi-radio-group>
            </view>
        </view>

        <!-- 主题 -->
        <view class="demo-module">
            <view class="demo-module__title">主题</view>
            <view class="demo-module__content">
                <hi-radio-group v-model="checked2">
                    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :theme="item.theme"></hi-radio>
                </hi-radio-group>
            </view>
        </view>

        <!-- 镂空 -->
        <view class="demo-module">
            <view class="demo-module__title">镂空</view>
            <view class="demo-module__content">
                <hi-radio-group v-model="checked3">
                    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :theme="item.theme" plain></hi-radio>
                </hi-radio-group>
            </view>
        </view>

        <!-- 禁用 -->
        <view class="demo-module">
            <view class="demo-module__title">禁用</view>
            <view class="demo-module__content">
                <hi-radio-group v-model="checked4">
                    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :theme="item.theme" disabled></hi-radio>
                </hi-radio-group>
            </view>
        </view>

        <!-- 方形 -->
        <view class="demo-module">
            <view class="demo-module__title">方形</view>
            <view class="demo-module__content">
                <hi-radio-group v-model="checked6">
                    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :theme="item.theme" square></hi-radio>
                </hi-radio-group>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 选项
    const options = ref([
        { label: "鸡蛋", value: 1, theme: "primary" },
        { label: "鸭蛋", value: 2, theme: "success" },
        { label: "鹅蛋", value: 3, theme: "warning" },
        { label: "大米", value: 4, theme: "error" },
        { label: "小米", value: 5, theme: "info" },
        { label: "苹果", value: 6, theme: "primary" },
        { label: "香蕉", value: 7, theme: "success" },
        { label: "橘子", value: 8, theme: "warning" },
        { label: "葡萄", value: 9, theme: "error" },
        { label: "草莓", value: 10, theme: "info" },
        { label: "香瓜", value: 11, theme: "primary" }
    ]);

    // 选中值
    const checked1 = ref(0);
    const checked2 = ref(0);
    const checked3 = ref(0);
    const checked4 = ref(0);
    const checked5 = ref(0);
    const checked6 = ref(0);
</script>

<style lang="scss" scoped>
    .demo-module {
        &__content {
            display: flex;
            flex-direction: column;
            gap: 20rpx;
        }
    }
</style>
