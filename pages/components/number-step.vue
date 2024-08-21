<!--
 * hi-number-step - 步进器
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用">
            <hi-number-step v-model="value1"></hi-number-step>
        </module-demo>

        <!-- 设置最大/最小值 -->
        <module-demo title="设置最大/最小值">
            <hi-number-step v-model="value2" :min="-10" :max="10"></hi-number-step>
        </module-demo>

        <!-- 设置步进值 -->
        <module-demo title="设置步进值">
            <hi-number-step v-model="value3" :step="2"></hi-number-step>
        </module-demo>

        <!-- 整体禁用 -->
        <module-demo title="整体禁用">
            <hi-number-step v-model="value4" disabled></hi-number-step>
        </module-demo>

        <!-- 禁用减号按钮 -->
        <module-demo title="禁用减号按钮">
            <hi-number-step v-model="value5" disabledMinus></hi-number-step>
        </module-demo>

        <!-- 禁用加号按钮 -->
        <module-demo title="禁用加号按钮">
            <hi-number-step v-model="value6" disabledPlus></hi-number-step>
        </module-demo>

        <!-- 禁用输入框 -->
        <module-demo title="禁用输入框">
            <hi-number-step v-model="value7" disabledInput></hi-number-step>
        </module-demo>

        <!-- 异步变更 -->
        <module-demo title="异步变更">
            <hi-number-step v-model="value8" @asyncChange="onAsyncChange" async></hi-number-step>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 步进器的值
    const value1 = ref(1);
    const value2 = ref(1);
    const value3 = ref(1);
    const value4 = ref(1);
    const value5 = ref(1);
    const value6 = ref(1);
    const value7 = ref(1);
    const value8 = ref(1);

    /**
     * 异步变更事件
     * @param {Number} value 变更后的值
     */
    function onAsyncChange(value) {
        uni.showLoading({
            title: "",
            mask: true
        });

        let timer = setTimeout(() => {
            value8.value = 158;
            clearTimeout(timer);
            uni.hideLoading();
        }, 2500);
    }
</script>

<style lang="scss" scoped></style>
