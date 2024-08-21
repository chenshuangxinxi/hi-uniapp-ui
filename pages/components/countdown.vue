<!--
 * hi-countdown - 倒计时
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用" tips="默认显示的数字会补零">
            <hi-countdown :endDate="endDate" :mode="['dd', 'hh', 'mm', 'ss']"></hi-countdown>
        </module-demo>

        <!-- 不补零 -->
        <module-demo title="不补零">
            <hi-countdown :endDate="endDate" :mode="['d', 'h', 'm', 's']"></hi-countdown>
        </module-demo>

        <!-- 自定义显示项 -->
        <module-demo title="自定义显示项">
            <hi-countdown :endDate="endDate" :mode="['hh', 'mm', 'ss']"></hi-countdown>
        </module-demo>

        <!-- 自定义分隔符 -->
        <module-demo title="自定义分隔符">
            <hi-countdown :endDate="endDate" :separator="separator"></hi-countdown>
        </module-demo>

        <!-- 自定义结束文本 -->
        <module-demo title="自定义结束文本">
            <hi-countdown :endDate="new Date()" endText="活动已经结束啦，敬请期待下次活动吧~"></hi-countdown>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 结束日期
    const date = new Date();
    date.setDate(date.getDate() + 19);
    const endDate = ref(date);

    // 自定义分隔符
    const separator = ref({
        days: "日",
        hours: "小时",
        minutes: "分钟",
        seconds: "秒"
    });
</script>

<style lang="scss" scoped></style>
