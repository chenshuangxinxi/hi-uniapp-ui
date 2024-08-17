<!--
 * hi-countdown - 倒计时
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
                <hi-countdown :endDate="endDate" :mode="['dd', 'hh', 'mm', 'ss']"></hi-countdown>
                <hi-countdown :endDate="endDate" :mode="['d', 'h', 'm', 's']"></hi-countdown>
            </view>
        </view>

        <!-- 自定义分隔符 -->
        <view class="demo-module">
            <view class="demo-module__title">自定义分隔符</view>
            <view class="demo-module__content">
                <hi-countdown :endDate="endDate" :separator="separator"></hi-countdown>
            </view>
        </view>

        <!-- 自定义结束文本 -->
        <view class="demo-module">
            <view class="demo-module__title">自定义结束文本</view>
            <view class="demo-module__content">
                <hi-countdown :endDate="new Date()" endText="活动已结束~"></hi-countdown>
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
    const separator = ref({
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
