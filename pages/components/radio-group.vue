<!--
 * hi-radio-group - 单选框组
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用">
            <hi-radio-group v-model="checkedValue1">
                <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
            </hi-radio-group>
        </module-demo>

        <!-- 异步变更 -->
        <module-demo title="异步变更">
            <hi-radio-group v-model="checkedValue2" async @asyncChange="onAsyncChange">
                <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
            </hi-radio-group>
        </module-demo>
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
    const checkedValue1 = ref(0);
    const checkedValue2 = ref(0);

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
                    if (checkedValue2.value === value) {
                        checkedValue2.value = 0;
                    } else {
                        checkedValue2.value = value;
                    }
                }
            }
        });
    }
</script>

<style lang="scss" scoped></style>
