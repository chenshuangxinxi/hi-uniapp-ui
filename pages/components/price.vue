<!--
 * hi-price - 价格
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用">
            <hi-price value="158"></hi-price>
        </module-demo>

        <!-- 默认会舍弃小数位末尾为0的位数 -->
        <module-demo title="默认会舍弃小数位末尾为0的位数">
            <hi-price value="158"></hi-price>
            <hi-price value="158.6"></hi-price>
            <hi-price value="158.568"></hi-price>
        </module-demo>

        <!-- 保留固定的2位小数 -->
        <module-demo title="保留固定的2位小数">
            <hi-price value="158" fixed></hi-price>
            <hi-price value="158.6" fixed></hi-price>
            <hi-price value="158.568" fixed></hi-price>
        </module-demo>

        <!-- 删除线 -->
        <module-demo title="删除线">
            <hi-price value="158" showDelete></hi-price>
            <hi-price value="158.6" showDelete></hi-price>
            <hi-price value="158.568" showDelete></hi-price>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped></style>
