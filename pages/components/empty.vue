<!--
 * hi-empty - 内容为空
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用">
            <hi-empty></hi-empty>
        </module-demo>

        <!-- 显示按钮 -->
        <module-demo title="显示按钮">
            <hi-empty showBtn></hi-empty>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .hi-empty {
        background: #ffffff;
        width: 100%;
    }
</style>
