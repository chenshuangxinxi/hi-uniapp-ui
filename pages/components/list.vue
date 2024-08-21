<!--
 * hi-list - 列表
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用" tips="默认两列">
            <hi-list :length="6">
                <view class="item" v-for="i in 6" :key="i">列表项</view>
            </hi-list>
        </module-demo>

        <!-- 设置列数 -->
        <module-demo title="设置列数">
            <hi-list columns="3" :length="6">
                <view class="item" v-for="i in 6" :key="i">列表项</view>
            </hi-list>
        </module-demo>

        <!-- 设置间距 -->
        <module-demo title="设置间距">
            <hi-list columns="3" gap="15px" :length="6">
                <view class="item" v-for="i in 6" :key="i">列表项</view>
            </hi-list>
        </module-demo>

        <!-- 显示数据状态 -->
        <module-demo title="显示数据状态">
            <hi-list columns="3" loadmoreStatus="loading" :length="6">
                <view class="item" v-for="i in 6" :key="i">列表项</view>
            </hi-list>
        </module-demo>

        <!-- 显示空内容 -->
        <module-demo title="显示空内容">
            <hi-list columns="3" loadmoreStatus="loading" :length="0">
                <view class="item" v-for="i in 6" :key="i">列表项</view>
            </hi-list>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .hi-list {
        width: 100%;
    }

    .item {
        height: 120px;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
    }
</style>
