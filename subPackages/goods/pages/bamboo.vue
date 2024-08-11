<!--
 * hi-ui - 商品组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__content list-wrapper">
                <view class="list-item" v-for="(item, index) in goodsList" :key="index">
                    <hi-goods-bamboo :item="item"></hi-goods-bamboo>
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
            title: "弹丸一番•寻找独角兽快乐冬日系列全新未拆 随机人生得意须尽欢，莫使金樽空对月",
            price: 128,
            image: "/static/images/temp.jpeg",
            spec: "默认规格",
            number: 1
        },
        {
            title: "弹丸一番•寻找独角兽快乐冬日系列全新未拆 随机人生得意须尽欢，莫使金樽空对月",
            price: 63,
            image: "/static/images/temp.jpeg",
            spec: "默认规格",
            number: 1
        },
        {
            title: "独角兽售罄官方PeachRiCO桃子手办潮玩潮玩盲盒",
            price: 58,
            image: "/static/images/temp.jpeg",
            spec: "默认规格",
            number: 1
        },
        {
            title: "【寻找独角兽】｜RiCO宇宙系列",
            price: 206,
            image: "/static/images/temp.jpeg",
            spec: "默认规格",
            number: 1
        }
    ]);
</script>

<style lang="scss" scoped>
    .demo-module {
        .list-item {
            margin: 20rpx 0;
        }
    }
</style>
