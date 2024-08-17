<!--
 * hi-button - 按钮
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
                <hi-button text="基础使用"></hi-button>
            </view>
        </view>

        <!-- 禁用按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">禁用按钮</view>
            <view class="demo-module__content">
                <hi-button text="禁用按钮" disabled></hi-button>
            </view>
        </view>

        <!-- 图标按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">图标按钮</view>
            <view class="demo-module__content">
                <hi-button text="前置图标" leftIconName="__gonggao" theme="primary"></hi-button>
                <hi-button text="后置图标" rightIconName="__fuzhi" theme="success"></hi-button>
                <hi-button text="前后图标" leftIconName="__gonggao" rightIconName="__fuzhi" theme="warning"></hi-button>
            </view>
        </view>

        <!-- 加载按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">加载按钮</view>
            <view class="demo-module__content">
                <hi-button text="加载按钮" loading></hi-button>
                <hi-button text="加载按钮" loading loadingText="正在努力加载中..."></hi-button>
            </view>
        </view>

        <!-- 副文字按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">副文字按钮</view>
            <view class="demo-module__content">
                <hi-button text="带副文字的按钮" subText="我是副文字"></hi-button>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .demo-module {
        &__content {
            display: flex;
            flex-wrap: wrap;
            gap: 10rpx;

            .hi-button {
                margin: 0;
            }
        }
    }
</style>
