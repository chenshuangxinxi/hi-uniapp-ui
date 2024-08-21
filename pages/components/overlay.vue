<!--
 * hi-overlay - 遮罩层
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用">
            <hi-button text="基础使用" @tap="handleClickBtn('', false)"></hi-button>
        </module-demo>

        <!-- 嵌入内容 -->
        <module-demo title="嵌入内容">
            <hi-button @tap="handleClickBtn('')" text="嵌入内容 - 默认"></hi-button>
            <hi-button @tap="handleClickBtn('left-top')" text="嵌入内容 - 左上"></hi-button>
            <hi-button @tap="handleClickBtn('left-center')" text="嵌入内容 - 左中"></hi-button>
            <hi-button @tap="handleClickBtn('left-bottom')" text="嵌入内容 - 左下"></hi-button>
            <hi-button @tap="handleClickBtn('center-top')" text="嵌入内容 - 中上"></hi-button>
            <hi-button @tap="handleClickBtn('center-center')" text="嵌入内容 - 中中"></hi-button>
            <hi-button @tap="handleClickBtn('center-bottom')" text="嵌入内容 - 中下"></hi-button>
            <hi-button @tap="handleClickBtn('right-top')" text="嵌入内容 - 右上"></hi-button>
            <hi-button @tap="handleClickBtn('right-center')" text="嵌入内容 - 右中"></hi-button>
            <hi-button @tap="handleClickBtn('right-bottom')" text="嵌入内容 - 右下"></hi-button>
        </module-demo>

        <!-- Overlay -->
        <hi-overlay :show="isShow" :align="align" @close="isShow = false">
            <view class="content" @tap.stop v-if="isShowContent"></view>
        </hi-overlay>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 显示状态
    const isShow = ref(false);
    const isShowContent = ref(true);

    // 内容对齐方式
    const align = ref("");

    /**
     * 嵌入内容
     */
    function handleClickBtn(mode, showContent = true) {
        isShowContent.value = showContent;
        align.value = mode;
        isShow.value = true;
    }
</script>

<style lang="scss" scoped>
    .content {
        width: 100px;
        height: 100px;
        background: #ffffff;
    }
</style>
