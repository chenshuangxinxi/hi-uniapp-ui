<!--
 * hi-notice-bar - 通知公告
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 横向滚动 -->
        <view class="demo-module">
            <view class="demo-module__title">横向滚动</view>
            <view class="demo-module__content">
                <hi-notice-bar :list="list"></hi-notice-bar>
            </view>
        </view>

        <!-- 纵向滚动 -->
        <view class="demo-module">
            <view class="demo-module__title">纵向滚动</view>
            <view class="demo-module__content">
                <hi-notice-bar :list="list" vertical></hi-notice-bar>
            </view>
        </view>

        <!-- 每秒移动固定距离 -->
        <view class="demo-module">
            <view class="demo-module__title">每秒移动固定距离</view>
            <view class="demo-module__content">
                <hi-notice-bar :list="list" :speed="50"></hi-notice-bar>
            </view>
        </view>

        <!-- 关闭按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">关闭按钮</view>
            <view class="demo-module__content">
                <hi-notice-bar :list="list" showClose></hi-notice-bar>
            </view>
        </view>

        <!-- 显示箭头 -->
        <view class="demo-module">
            <view class="demo-module__title">显示箭头</view>
            <view class="demo-module__content">
                <hi-notice-bar :list="list" showArrow></hi-notice-bar>
            </view>
        </view>

        <!-- 设置滚动间隔 -->
        <view class="demo-module">
            <view class="demo-module__title">设置滚动间隔</view>
            <view class="demo-module__content">
                <hi-notice-bar :list="list" :interval="1.5"></hi-notice-bar>
            </view>
        </view>

        <!-- 步近模式 -->
        <view class="demo-module demo-module--styles">
            <view class="demo-module__title">步近模式</view>
            <view class="demo-module__content">
                <hi-notice-bar :list="list" step :interval="2.5"></hi-notice-bar>
                <view class="gap"></view>
                <hi-notice-bar :list="list" vertical step :interval="2.5"></hi-notice-bar>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 轮播数据
    const list = ref([
        { id: 1, text: "床前明月光，疑是地上霜。举头望明月，低头思故乡。" },
        { id: 2, text: "试问闲愁都几许？一川烟草，满城风絮，梅子黄时雨。" },
        { id: 3, text: "万里归来颜愈少，微笑，笑时犹带岭梅香。试问岭南应不好，却道：此心安处是吾乡。" },
        { id: 4, text: "春未绿，鬓先丝，人间别久不成悲。谁教岁岁红莲夜，两处沉吟各自知。" },
        { id: 5, text: "双飞燕子几时回？夹岸桃花蘸水开。春雨断桥人不度，小舟撑出柳阴来。" },
        { id: 6, text: "水且涸，荷叶出地寻丈，因列坐其下。上不见日，清风徐来，绿云自动。" },
        { id: 7, text: "满室天香仙子家，一琴一剑一杯茶。羽衣常带烟霞色，不染人间桃李花。" }
    ]);
</script>

<style lang="scss" scoped>
    .demo-module {
        .gap {
            height: 10px;
        }
        .hi-notice-bar {
            background: #f5af55;
            color: #ffffff;
            padding: 8px;
        }
    }
</style>
