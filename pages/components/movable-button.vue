<!--
 * hi-movable-button - 可拖动按钮
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 默认 -->
        <hi-movable-button></hi-movable-button>

        <!-- 显示文字和徽标数 -->
        <hi-movable-button text="主页" position="center-center">
            <template #other>
                <hi-badge :value="9"></hi-badge>
            </template>
        </hi-movable-button>

        <!-- 初始位置 -->
        <hi-movable-button position="left-center"></hi-movable-button>
        <hi-movable-button position="left-top"></hi-movable-button>
        <hi-movable-button position="left-bottom"></hi-movable-button>
        <hi-movable-button position="right-top"></hi-movable-button>
        <hi-movable-button position="right-bottom"></hi-movable-button>
        <hi-movable-button position="center-top"></hi-movable-button>
        <hi-movable-button position="center-bottom"></hi-movable-button>
    </view>
</template>

<script setup></script>

<style lang="scss" scoped></style>
