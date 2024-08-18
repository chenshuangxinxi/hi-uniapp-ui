<!--
 * hi-radio-group - 单选框组
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__content">
                <hi-radio-group v-model="checked1">
                    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
                </hi-radio-group>
            </view>
        </view>

        <!-- 异步变更 -->
        <view class="demo-module">
            <view class="demo-module__title">异步变更</view>
            <view class="demo-module__content">
                <hi-radio-group v-model="checked5" async @asyncChange="onAsyncChange" theme="warning">
                    <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
                </hi-radio-group>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 数据
    const options = ref([
        { label: "鸡蛋", value: 1 },
        { label: "鸭蛋", value: 2 },
        { label: "鹅蛋", value: 3 },
        { label: "大米", value: 4 },
        { label: "小米", value: 5 },
        { label: "苹果", value: 6 },
        { label: "香蕉", value: 7 },
        { label: "橘子", value: 8 },
        { label: "葡萄", value: 9 },
        { label: "草莓", value: 10 },
        { label: "香瓜", value: 11 }
    ]);

    // 选中值
    const checked1 = ref(0);
    const checked5 = ref(0);

    /**
     * 异步变更事件
     * @param {Boolean} value 点击的单选框的值
     */
    function onAsyncChange(value) {
        const option = options.value.find((item) => item.value === value);
        uni.showModal({
            title: "提示",
            content: `点击了单选框${option.label}，是否切换？`,
            showCancel: true,
            confirmText: "切换",
            cancelText: "不切换",
            success: ({ confirm, cancel }) => {
                if (confirm) {
                    if (checked5.value === value) {
                        checked5.value = 0;
                    } else {
                        checked5.value = value;
                    }
                }
            }
        });
    }
</script>

<style lang="scss" scoped></style>
