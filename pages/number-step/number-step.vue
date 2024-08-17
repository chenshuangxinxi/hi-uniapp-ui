<!--
 * hi-number-step - 步进器
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
                <hi-number-step v-model="number1"></hi-number-step>
            </view>
        </view>

        <!-- 设置最大/最小值 -->
        <view class="demo-module">
            <view class="demo-module__title">设置最大/最小值</view>
            <view class="demo-module__content">
                <hi-number-step v-model="number2" :min="-10" :max="10"></hi-number-step>
            </view>
        </view>

        <!-- 设置步进值 -->
        <view class="demo-module">
            <view class="demo-module__title">设置步进值</view>
            <view class="demo-module__content">
                <hi-number-step v-model="number3" :min="-10" :max="10" :step="2"></hi-number-step>
            </view>
        </view>

        <!-- 整体禁用 -->
        <view class="demo-module">
            <view class="demo-module__title">整体禁用</view>
            <view class="demo-module__content">
                <hi-number-step v-model="number4" disabled></hi-number-step>
            </view>
        </view>

        <!-- 禁用减号按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">禁用减号按钮</view>
            <view class="demo-module__content">
                <hi-number-step v-model="number5" disabledMinus></hi-number-step>
            </view>
        </view>

        <!-- 禁用加号按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">禁用加号按钮</view>
            <view class="demo-module__content">
                <hi-number-step v-model="number6" disabledPlus></hi-number-step>
            </view>
        </view>

        <!-- 禁用输入框 -->
        <view class="demo-module">
            <view class="demo-module__title">禁用输入框</view>
            <view class="demo-module__content">
                <hi-number-step v-model="number7" disabledInput></hi-number-step>
            </view>
        </view>

        <!-- 异步变更 -->
        <view class="demo-module">
            <view class="demo-module__title">异步变更</view>
            <view class="demo-module__content">
                <hi-number-step v-model="number8" @asyncChange="onChange" async></hi-number-step>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 步进器的值
    const number1 = ref(1);
    const number2 = ref(1);
    const number3 = ref(1);
    const number4 = ref(1);
    const number5 = ref(1);
    const number6 = ref(1);
    const number7 = ref(1);
    const number8 = ref(1);

    /**
     * 异步变更 change 事件
     * @param {Number} value 变更后的值
     */
    function onChange(value) {
        uni.showLoading({
            title: "",
            mask: true
        });

        let timer = setTimeout(() => {
            number8.value = 888;
            clearTimeout(timer);
            uni.hideLoading();
        }, 2500);
    }
</script>

<style lang="scss" scoped>
    .demo-module {
        .gap {
            height: 10px;
        }

        .hi-empty {
            background: #f8f8f8;
        }
    }
</style>
