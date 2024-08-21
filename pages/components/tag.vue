<!--
 * hi-tag - 标签
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用">
            <hi-tag text="标签"></hi-tag>
        </module-demo>

        <!-- 带图标 -->
        <module-demo title="带图标">
            <hi-tag text="标签" iconName="douyin"></hi-tag>
        </module-demo>

        <!-- 可关闭 -->
        <module-demo title="可关闭">
            <hi-tag text="标签" showClose @close="handleClose(1)"></hi-tag>
            <hi-tag text="标签" showClose iconName="weixin" @close="handleClose"></hi-tag>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    /**
     * 关闭按钮点击事件
     * @param {Number} order 关闭按钮的序号
     */
    function handleClose(order) {
        uni.showToast({
            title: `点击了标签的关闭按钮`,
            icon: "none"
        });
    }
</script>

<style lang="scss" scoped></style>
