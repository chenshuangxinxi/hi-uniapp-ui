<!--
 * hi-ui - 分类组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__content list-wrapper">
                <view class="list-item" v-for="(item, index) in goodsList" :key="index">
                    <hi-classify-aster :item="item"></hi-classify-aster>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 分类列表
    const goodsList = ref([
        { image: "/static/images/temp.jpeg", name: "游戏外设游戏外设游戏外设游戏外设" },
        { image: "/static/images/temp.jpeg", name: "蓝牙音箱" },
        { image: "/static/images/temp.jpeg", name: "手机" },
        { image: "/static/images/temp.jpeg", name: "耳机" },
        { image: "/static/images/temp.jpeg", name: "相机" },
        { image: "/static/images/temp.jpeg", name: "笔记本" },
        { image: "/static/images/temp.jpeg", name: "充电宝" },
        { image: "/static/images/temp.jpeg", name: "充电器" },
        { image: "/static/images/temp.jpeg", name: "打印机" },
        { image: "/static/images/temp.jpeg", name: "游戏外设" },
        { image: "/static/images/temp.jpeg", name: "蓝牙音箱" },
        { image: "/static/images/temp.jpeg", name: "手机" },
        { image: "/static/images/temp.jpeg", name: "耳机" },
        { image: "/static/images/temp.jpeg", name: "相机" },
        { image: "/static/images/temp.jpeg", name: "笔记本" },
        { image: "/static/images/temp.jpeg", name: "充电宝" },
        { image: "/static/images/temp.jpeg", name: "充电器" },
        { image: "/static/images/temp.jpeg", name: "打印机" },
        { image: "/static/images/temp.jpeg", name: "游戏外设" },
        { image: "/static/images/temp.jpeg", name: "蓝牙音箱" },
        { image: "/static/images/temp.jpeg", name: "手机" },
        { image: "/static/images/temp.jpeg", name: "耳机" },
        { image: "/static/images/temp.jpeg", name: "相机" },
        { image: "/static/images/temp.jpeg", name: "笔记本" },
        { image: "/static/images/temp.jpeg", name: "充电宝" },
        { image: "/static/images/temp.jpeg", name: "充电器" },
        { image: "/static/images/temp.jpeg", name: "打印机" },
        { image: "/static/images/temp.jpeg", name: "游戏外设" },
        { image: "/static/images/temp.jpeg", name: "蓝牙音箱" },
        { image: "/static/images/temp.jpeg", name: "手机" },
        { image: "/static/images/temp.jpeg", name: "耳机" },
        { image: "/static/images/temp.jpeg", name: "相机" },
        { image: "/static/images/temp.jpeg", name: "笔记本" },
        { image: "/static/images/temp.jpeg", name: "充电宝" },
        { image: "/static/images/temp.jpeg", name: "充电器" },
        { image: "/static/images/temp.jpeg", name: "打印机" },
        { image: "/static/images/temp.jpeg", name: "游戏外设" },
        { image: "/static/images/temp.jpeg", name: "蓝牙音箱" },
        { image: "/static/images/temp.jpeg", name: "手机" },
        { image: "/static/images/temp.jpeg", name: "耳机" },
        { image: "/static/images/temp.jpeg", name: "相机" },
        { image: "/static/images/temp.jpeg", name: "笔记本" },
        { image: "/static/images/temp.jpeg", name: "充电宝" },
        { image: "/static/images/temp.jpeg", name: "充电器" },
        { image: "/static/images/temp.jpeg", name: "打印机" },
        { image: "/static/images/temp.jpeg", name: "游戏外设" },
        { image: "/static/images/temp.jpeg", name: "蓝牙音箱" },
        { image: "/static/images/temp.jpeg", name: "手机" },
        { image: "/static/images/temp.jpeg", name: "耳机" },
        { image: "/static/images/temp.jpeg", name: "相机" },
        { image: "/static/images/temp.jpeg", name: "笔记本" },
        { image: "/static/images/temp.jpeg", name: "充电宝" },
        { image: "/static/images/temp.jpeg", name: "充电器" },
        { image: "/static/images/temp.jpeg", name: "打印机" }
    ]);
</script>

<style lang="scss" scoped>
    .demo-module {
        .list-wrapper {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10rpx;
        }
    }
</style>
