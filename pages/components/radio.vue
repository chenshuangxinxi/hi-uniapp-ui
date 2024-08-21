<!--
 * hi-radio - 单选框
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用" tips="单选组件需要放到 hi-radio-group 组件中使用">
            <hi-radio-group v-model="checkedValue1">
                <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></hi-radio>
            </hi-radio-group>
        </module-demo>

        <!-- 禁用状态 -->
        <module-demo title="禁用状态" tips="给单选框单独设置禁用状态">
            <hi-radio-group v-model="checkedValue2">
                <hi-radio v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></hi-radio>
            </hi-radio-group>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 选项
    const options = ref([
        { label: "鸡蛋", value: 1, disabled: false },
        { label: "鸭蛋", value: 2, disabled: true },
        { label: "鹅蛋", value: 3, disabled: false },
        { label: "大米", value: 4, disabled: true },
        { label: "小米", value: 5, disabled: false },
        { label: "苹果", value: 6, disabled: false },
        { label: "香蕉", value: 7, disabled: true },
        { label: "橘子", value: 8, disabled: false },
        { label: "葡萄", value: 9, disabled: false },
        { label: "草莓", value: 10, disabled: true },
        { label: "香瓜", value: 11, disabled: false }
    ]);

    // 选中值
    const checkedValue1 = ref(0);
    const checkedValue2 = ref(0);
</script>

<style lang="scss" scoped></style>
