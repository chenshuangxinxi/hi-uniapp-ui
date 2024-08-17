<!--
 * hi-ui - 固定在页面底部的组件
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
                <hi-fixed-bottom-camellia></hi-fixed-bottom-camellia>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 总价
    const totalPrice = ref(168);
</script>

<style lang="scss" scoped>
    .demo-module {
    }
</style>
