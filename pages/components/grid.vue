<!--
 * hi-grid - 宫格
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用" tips="默认5列">
            <hi-grid>
                <view class="item" v-for="i in 6" :key="i">宫格项</view>
            </hi-grid>
        </module-demo>

        <!-- 设置列数 -->
        <module-demo title="设置列数">
            <hi-grid columns="3">
                <view class="item" v-for="i in 6" :key="i">宫格项</view>
            </hi-grid>
        </module-demo>

        <!-- 设置间距 -->
        <module-demo title="设置间距">
            <hi-grid columns="3" gap="15px">
                <view class="item" v-for="i in 6" :key="i">宫格项</view>
            </hi-grid>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .hi-grid {
        width: 100%;
    }

    .item {
        height: 50px;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
    }
</style>
