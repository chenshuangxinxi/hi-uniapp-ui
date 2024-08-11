<!--
 * hi-ui - 遮罩层组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title"></view>
            <view class="demo-module__content">
                <hi-overlay v-model="show1"></hi-overlay>
                <hi-button @tap="handleClickBtn1" theme="primary" text="基础使用"></hi-button>
            </view>
        </view>

        <!-- 异步关闭 -->
        <view class="demo-module">
            <view class="demo-module__title"></view>
            <view class="demo-module__content">
                <hi-overlay v-model="show2" @asyncClose="onClose2" async></hi-overlay>
                <hi-button @tap="handleClickBtn2" theme="success" text="异步关闭"></hi-button>
            </view>
        </view>

        <!-- 嵌入内容 -->
        <view class="demo-module">
            <view class="demo-module__title"></view>
            <view class="demo-module__content">
                <hi-overlay v-model="show3" :align="align">
                    <view class="content" @tap.stop></view>
                </hi-overlay>
                <hi-button @tap="handleClickBtn3('')" theme="warning" text="嵌入内容 - 默认"></hi-button>
                <hi-button @tap="handleClickBtn3('left-top')" theme="error" text="嵌入内容 - 左上"></hi-button>
                <hi-button @tap="handleClickBtn3('left-center')" theme="info" text="嵌入内容 - 左中"></hi-button>
                <hi-button @tap="handleClickBtn3('left-bottom')" theme="primary" text="嵌入内容 - 左下"></hi-button>
                <hi-button @tap="handleClickBtn3('center-top')" theme="success" text="嵌入内容 - 中上"></hi-button>
                <hi-button @tap="handleClickBtn3('center-center')" theme="warning" text="嵌入内容 - 中中"></hi-button>
                <hi-button @tap="handleClickBtn3('center-bottom')" theme="error" text="嵌入内容 - 中下"></hi-button>
                <hi-button @tap="handleClickBtn3('right-top')" theme="info" text="嵌入内容 - 右上"></hi-button>
                <hi-button @tap="handleClickBtn3('right-center')" theme="primary" text="嵌入内容 - 右中"></hi-button>
                <hi-button @tap="handleClickBtn3('right-bottom')" theme="success" text="嵌入内容 - 右下"></hi-button>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 显示状态
    const show1 = ref(false);
    const show2 = ref(false);
    const show3 = ref(false);

    // 内容对齐方式
    const align = ref("");

    /**
     * 基础使用
     */
    function handleClickBtn1() {
        show1.value = true;
    }

    /**
     * 异步关闭
     */
    function handleClickBtn2() {
        show2.value = true;
    }

    /**
     * 异步关闭
     */
    function onClose2() {
        uni.showLoading({
            title: "",
            mask: true
        });
        let timer = setTimeout(() => {
            show2.value = false;
            clearTimeout(timer);
            uni.hideLoading();
        }, 2500);
    }

    /**
     * 嵌入内容
     */
    function handleClickBtn3(mode) {
        align.value = mode;
        show3.value = true;
    }
</script>

<style lang="scss" scoped>
    .demo-module {
        &__content {
            display: flex;
            flex-direction: column;
            gap: 20rpx;
        }

        .content {
            width: 100px;
            height: 100px;
            background: #ffffff;
        }
    }
</style>
