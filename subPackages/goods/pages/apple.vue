<!--
 * zz-goods-apple - 商品组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__content">
                <hi-list class="goods-list-item" gap="20rpx">
                    <zz-goods-apple :item="item" v-for="(item, index) in goodsList" :key="index"></zz-goods-apple>
                </hi-list>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 商品列表
    const goodsList = ref([
        {
            title: "人生得意须尽欢",
            price: 58,
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#6C7DFC", background: "#F4F1FF" },
                { text: "预售", color: "#6C7DFC", background: "#F4F1FF" }
            ]
        },
        {
            title: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: "58",
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#6C7DFC", background: "#F4F1FF" },
                { text: "预售", color: "#6C7DFC", background: "#F4F1FF" }
            ]
        },
        {
            title: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: "58.00",
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#6C7DFC", background: "#F4F1FF" },
                { text: "预售", color: "#6C7DFC", background: "#F4F1FF" }
            ]
        },
        {
            title: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: "58.05",
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#6C7DFC", background: "#F4F1FF" },
                { text: "预售", color: "#6C7DFC", background: "#F4F1FF" }
            ]
        },
        {
            title: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: "58.50",
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#6C7DFC", background: "#F4F1FF" },
                { text: "预售", color: "#6C7DFC", background: "#F4F1FF" }
            ]
        },
        {
            title: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: 58,
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#6C7DFC", background: "#F4F1FF" },
                { text: "预售", color: "#6C7DFC", background: "#F4F1FF" }
            ]
        },
        {
            title: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: 58,
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#6C7DFC", background: "#F4F1FF" },
                { text: "预售", color: "#6C7DFC", background: "#F4F1FF" }
            ]
        },
        {
            title: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: 58,
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#6C7DFC", background: "#F4F1FF" },
                { text: "预售", color: "#6C7DFC", background: "#F4F1FF" }
            ]
        },
        {
            title: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: 58,
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#6C7DFC", background: "#F4F1FF" },
                { text: "预售", color: "#6C7DFC", background: "#F4F1FF" }
            ]
        },
        {
            title: "人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来",
            price: 58,
            image: "/static/images/temp.jpeg",
            tags: [
                { text: "限购", color: "#6C7DFC", background: "#F4F1FF" },
                { text: "预售", color: "#6C7DFC", background: "#F4F1FF" }
            ]
        }
    ]);
</script>

<style lang="scss" scoped>
    .demo-module {
    }
</style>
