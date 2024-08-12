<!--
 * HiUi - 复选框组
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
                <hi-checkbox-group v-model="values1">
                    <hi-checkbox v-for="item in options" :key="item.value" :label="item.label" :value="item.value" theme="primary"></hi-checkbox>
                </hi-checkbox-group>
            </view>
        </view>

        <!-- 异步变更 -->
        <view class="demo-module">
            <view class="demo-module__title">异步变更</view>
            <view class="demo-module__content">
                <hi-checkbox-group v-model="values2" async @asyncChange="onAsyncChange">
                    <hi-checkbox v-for="item in options" :key="item.value" :label="item.label" :value="item.value" theme="success"></hi-checkbox>
                </hi-checkbox-group>
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
    const values1 = ref([]);
    const values2 = ref([]);

    /**
     * 异步变更事件
     * @param {Boolean} value 点击的复选框的值，点击的复选框的选中状态
     */
    function onAsyncChange(value, checked) {
        let option = options.value.find((item) => item.value === value);
        uni.showModal({
            title: "提示",
            content: `点击了复选框“${option?.label}”，复选框的当前选中状态为${checked ? "选中" : "未选中"}，请手动更新绑定的值来切换选中状态`,
            showCancel: true,
            confirmText: "切换状态",
            cancelText: "保持不变",
            success: ({ confirm, cancel }) => {
                if (confirm) {
                    if (!checked) {
                        values2.value.push(value);
                    } else {
                        values2.value = values2.value.filter((item) => item !== value);
                    }
                }
            }
        });
    }
</script>

<style lang="scss" scoped></style>
