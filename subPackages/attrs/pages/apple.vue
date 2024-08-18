<!--
 * hi-ui - 扩展组件 - 属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__content">
                <zz-attrs-apple :list="attrs"></zz-attrs-apple>
            </view>
        </view>

        <!-- 设置列数 -->
        <view class="demo-module">
            <view class="demo-module__title">设置列数</view>
            <view class="demo-module__content">
                <zz-attrs-apple :list="attrs2" :columns="3"></zz-attrs-apple>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 商品属性
    const attrs = ref([
        { label: "IP", value: "海贼王" },
        { label: "品牌", value: "ANiMEL" },
        { label: "限购", value: "2件" },
        { label: "状态", value: "现货" }
    ]);

    // 商品属性
    const attrs2 = ref([
        { label: "IP", value: "海贼王" },
        { label: "品牌", value: "ANiMEL" },
        { label: "限购", value: "2件" },
        { label: "状态", value: "现货" },
        { label: "IP", value: "海贼王" },
        { label: "品牌", value: "ANiMEL" }
    ]);
</script>

<style lang="scss" scoped>
    .demo-module {
    }
</style>
