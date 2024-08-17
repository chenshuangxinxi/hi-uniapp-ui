<!--
 * hi-ui - 商品/物品参数组件
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
                <hi-params-aster :list="params"></hi-params-aster>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 商品参数
    const params = ref([
        { label: "包装", value: "彩盒" },
        { label: "材质", value: "PVC" },
        { label: "商品重量", value: "TBC" },
        { label: "商品尺寸", value: "L8.5*W10.7*15.2cm" },
        { label: "包装尺寸", value: "H15*W12*D8cm" }
    ]);
</script>

<style lang="scss" scoped>
    .demo-module {
    }
</style>
