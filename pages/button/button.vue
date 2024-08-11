<!--
 * hi-ui - 按钮组件演示页面
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__content">
                <hi-button text="基础使用"></hi-button>
            </view>
        </view>

        <!-- 主题按钮 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">主题按钮</view>
            <view class="demo-module__content">
                <hi-button text="主题按钮" theme="main"></hi-button>
                <hi-button text="主题按钮" theme="primary"></hi-button>
                <hi-button text="主题按钮" theme="success"></hi-button>
                <hi-button text="主题按钮" theme="warning"></hi-button>
                <hi-button text="主题按钮" theme="error"></hi-button>
                <hi-button text="主题按钮" theme="info"></hi-button>
            </view>
        </view>

        <!-- 镂空按钮 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">镂空按钮</view>
            <view class="demo-module__content">
                <hi-button text="镂空按钮" theme="main" plain></hi-button>
                <hi-button text="镂空按钮" theme="primary" plain></hi-button>
                <hi-button text="镂空按钮" theme="success" plain></hi-button>
                <hi-button text="镂空按钮" theme="warning" plain></hi-button>
                <hi-button text="镂空按钮" theme="error" plain></hi-button>
                <hi-button text="镂空按钮" theme="info" plain></hi-button>
            </view>
        </view>

        <!-- 禁用按钮 -->
        <view class="demo-module demo-module--disabled">
            <view class="demo-module__title">禁用按钮</view>
            <view class="demo-module__content">
                <hi-button text="禁用按钮" disabled></hi-button>
                <hi-button text="禁用按钮" theme="primary" disabled></hi-button>
                <hi-button text="禁用按钮" theme="success" disabled></hi-button>
                <hi-button text="禁用按钮" theme="warning" disabled></hi-button>
                <hi-button text="禁用按钮" theme="error" disabled></hi-button>
                <hi-button text="禁用按钮" theme="info" disabled></hi-button>
            </view>
        </view>

        <!-- 图标按钮 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">图标按钮</view>
            <view class="demo-module__content">
                <hi-button text="前置图标" prevIconName="__gonggao" theme="primary"></hi-button>
                <hi-button text="后置图标" nextIconName="__gonggao" theme="success"></hi-button>
                <hi-button text="前后图标" prevIconName="__shezhi" nextIconName="__gonggao" theme="warning"></hi-button>
            </view>
        </view>

        <!-- 加载按钮 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">加载按钮</view>
            <view class="demo-module__content">
                <hi-button text="加载按钮" loading theme="primary"></hi-button>
                <hi-button text="加载按钮" loading loadingText="正在努力加载中..." theme="success"></hi-button>
                <hi-button text="加载按钮" theme="warning" shape="circle" iconButton nextIconName="__gonggao" loading></hi-button>
            </view>
        </view>

        <!-- 按钮形状 -->
        <view class="demo-module demo-module--disabled">
            <view class="demo-module__title">按钮形状</view>
            <view class="demo-module__content">
                <hi-button text="圆角按钮" theme="primary" shape="round"></hi-button>
                <hi-button text="圆形按钮" theme="success" shape="circle" iconButton nextIconName="__gonggao"></hi-button>
            </view>
        </view>

        <!-- 块级按钮 -->
        <view class="demo-module demo-module--disabled">
            <view class="demo-module__title">块级按钮</view>
            <view class="demo-module__content">
                <hi-button text="块级按钮" theme="primary" block></hi-button>
                <hi-button text="块级按钮" theme="success" shape="round" block></hi-button>
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
