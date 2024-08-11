<!--
 * hi-ui - 倒计时组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__content">
                <hi-countdown :endDate="endDate"></hi-countdown>
                <hi-countdown :endDate="endDate" :mode="['d', 'h', 'm', 's']"></hi-countdown>
                <hi-countdown :endDate="endDate" :mode="['hh', 'mm', 'ss']"></hi-countdown>
                <hi-countdown :endDate="endDate" :mode="['h', 'm', 's']"></hi-countdown>
                <hi-countdown :endDate="endDate" :mode="['mm', 'ss']"></hi-countdown>
                <hi-countdown :endDate="endDate" :mode="['ss']"></hi-countdown>
            </view>
        </view>

        <!-- 自定义分隔符 -->
        <view class="demo-module">
            <view class="demo-module__title">自定义分隔符</view>
            <view class="demo-module__content">
                <hi-countdown :endDate="endDate" :separator="separator1"></hi-countdown>
            </view>
        </view>

        <!-- 主题 -->
        <view class="demo-module">
            <view class="demo-module__title">主题</view>
            <view class="demo-module__content">
                <hi-countdown :endDate="endDate" theme="main"></hi-countdown>
                <hi-countdown :endDate="endDate" theme="primary"></hi-countdown>
                <hi-countdown :endDate="endDate" theme="success"></hi-countdown>
                <hi-countdown :endDate="endDate" theme="warning"></hi-countdown>
                <hi-countdown :endDate="endDate" theme="error"></hi-countdown>
                <hi-countdown :endDate="endDate" theme="info"></hi-countdown>
            </view>
        </view>

        <!-- 数字为块块 -->
        <view class="demo-module">
            <view class="demo-module__title">数字为块块</view>
            <view class="demo-module__content">
                <hi-countdown :endDate="endDate" block></hi-countdown>
                <hi-countdown :endDate="endDate" block theme="primary"></hi-countdown>
                <hi-countdown :endDate="endDate" block theme="success"></hi-countdown>
                <hi-countdown :endDate="endDate" block theme="warning"></hi-countdown>
                <hi-countdown :endDate="endDate" block theme="error"></hi-countdown>
                <hi-countdown :endDate="endDate" block theme="info"></hi-countdown>
            </view>
        </view>

        <!-- 镂空 -->
        <view class="demo-module">
            <view class="demo-module__title">镂空</view>
            <view class="demo-module__content">
                <hi-countdown :endDate="endDate" block plain></hi-countdown>
                <hi-countdown :endDate="endDate" block plain theme="primary"></hi-countdown>
                <hi-countdown :endDate="endDate" block plain theme="success"></hi-countdown>
                <hi-countdown :endDate="endDate" block plain theme="warning"></hi-countdown>
                <hi-countdown :endDate="endDate" block plain theme="error"></hi-countdown>
                <hi-countdown :endDate="endDate" block plain theme="info"></hi-countdown>
            </view>
        </view>

        <!-- 自定义结束文本 -->
        <view class="demo-module">
            <view class="demo-module__title">自定义结束文本</view>
            <view class="demo-module__content">
                <hi-countdown :endDate="new Date()" theme="primary" endText="活动已结束~"></hi-countdown>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 结束日期
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const endDate = ref(date);

    // 自定义分隔符
    const separator1 = ref({
        days: "日",
        hours: "小时",
        minutes: "分钟",
        seconds: "秒"
    });
</script>

<style lang="scss" scoped>
    .demo-module {
        &__content {
            display: flex;
            flex-direction: column;
            gap: 30rpx;
        }
    }
</style>
