<!--
 * hi-ui - 商品组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__content goods-list-wrapper">
                <view class="goods-list-item" v-for="(item, index) in goodsList" :key="index">
                    <hi-goods-aster :item="item"></hi-goods-aster>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 商品列表
    const goodsList = ref([
        {
            name: "人生得意须尽欢",
            price: 58,
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#ff0000", background: "rgba(255, 0, 0, 0.3)" },
                { text: "预售", color: "#ff9900", background: "rgba(255, 153, 0, 0.3)" }
            ]
        },
        {
            name: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: "58",
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#ff0000", background: "rgba(255, 0, 0, 0.3)" },
                { text: "预售", color: "#ff9900", background: "rgba(255, 153, 0, 0.3)" }
            ]
        },
        {
            name: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: "58.00",
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#ff0000", background: "rgba(255, 0, 0, 0.3)" },
                { text: "预售", color: "#ff9900", background: "rgba(255, 153, 0, 0.3)" }
            ]
        },
        {
            name: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: "58.05",
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#ff0000", background: "rgba(255, 0, 0, 0.3)" },
                { text: "预售", color: "#ff9900", background: "rgba(255, 153, 0, 0.3)" }
            ]
        },
        {
            name: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: "58.50",
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#ff0000", background: "rgba(255, 0, 0, 0.3)" },
                { text: "预售", color: "#ff9900", background: "rgba(255, 153, 0, 0.3)" }
            ]
        },
        {
            name: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: 58,
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#ff0000", background: "rgba(255, 0, 0, 0.3)" },
                { text: "预售", color: "#ff9900", background: "rgba(255, 153, 0, 0.3)" }
            ]
        },
        {
            name: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: 58,
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#ff0000", background: "rgba(255, 0, 0, 0.3)" },
                { text: "预售", color: "#ff9900", background: "rgba(255, 153, 0, 0.3)" }
            ]
        },
        {
            name: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: 58,
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#ff0000", background: "rgba(255, 0, 0, 0.3)" },
                { text: "预售", color: "#ff9900", background: "rgba(255, 153, 0, 0.3)" }
            ]
        },
        {
            name: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: 58,
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#ff0000", background: "rgba(255, 0, 0, 0.3)" },
                { text: "预售", color: "#ff9900", background: "rgba(255, 153, 0, 0.3)" }
            ]
        },
        {
            name: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: 58,
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#ff0000", background: "rgba(255, 0, 0, 0.3)" },
                { text: "预售", color: "#ff9900", background: "rgba(255, 153, 0, 0.3)" }
            ]
        }
    ]);
</script>

<style lang="scss" scoped>
    .demo-module {
        .goods-list-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30rpx;
        }

        .goods-list-item {
            background: #ffffff;
        }
    }
</style>
