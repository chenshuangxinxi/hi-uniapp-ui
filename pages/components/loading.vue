<!--
 * hi-loading - 加载
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用">
            <hi-loading></hi-loading>
        </module-demo>

        <!-- 加载提示 -->
        <module-demo title="加载提示">
            <hi-loading text="加载中..."></hi-loading>
            <hi-loading text="正在努力加载中..."></hi-loading>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped></style>
