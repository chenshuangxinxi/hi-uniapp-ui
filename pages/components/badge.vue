<!--
 * hi-badge - 徽标数
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用">
            <view class="box">
                <hi-badge :value="0" showZero static></hi-badge>
                <hi-badge :value="99" static></hi-badge>
                <hi-badge :value="199" static></hi-badge>
                <hi-badge :value="999" static></hi-badge>
                <hi-badge :value="1999" static></hi-badge>
                <hi-badge :value="19999" static></hi-badge>
            </view>
        </module-demo>

        <!-- 圆点模式 -->
        <module-demo title="圆点模式">
            <view class="box">
                <hi-badge mode="dot" showZero static></hi-badge>
            </view>
        </module-demo>

        <!-- overflow 模式 -->
        <module-demo title="overflow 模式">
            <view class="box">
                <hi-badge :value="99" mode="overflow" static></hi-badge>
                <hi-badge :value="199" mode="overflow" static></hi-badge>
            </view>
        </module-demo>

        <!-- ellipsis 模式 -->
        <module-demo title="ellipsis 模式">
            <view class="box">
                <hi-badge :value="99" mode="ellipsis" static></hi-badge>
                <hi-badge :value="199" mode="ellipsis" static></hi-badge>
            </view>
        </module-demo>

        <!-- limit 模式 -->
        <module-demo title="limit 模式">
            <view class="box">
                <hi-badge :value="1999" mode="limit" static></hi-badge>
                <hi-badge :value="19999" mode="limit" static></hi-badge>
                <hi-badge :value="19999" mode="limit" static suffix="千"></hi-badge>
                <hi-badge :value="19999" mode="limit" static suffix="w"></hi-badge>
                <hi-badge :value="19999" mode="limit" static suffix="万"></hi-badge>
            </view>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .box {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .hi-badge {
        position: static;
    }
</style>
