<!--
 * hi-button - 按钮
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo
            title="基础使用"
            :tips="['按钮组件不再提供主题等相关配置', '建议在全局自定义按钮主题等公共类名，在使用时手动添加想要的类名进行自定义按钮']"
        >
            <hi-button text="基础使用"></hi-button>
        </module-demo>

        <!-- 禁用状态 -->
        <module-demo title="禁用状态">
            <hi-button text="禁用状态" disabled></hi-button>
        </module-demo>

        <!-- 加载状态 -->
        <module-demo title="加载状态">
            <hi-button text="加载状态" loading></hi-button>
        </module-demo>

        <!-- 显示图标 -->
        <module-demo title="显示图标">
            <hi-button text="前置图标" leftIconName="__gonggao"></hi-button>
            <hi-button text="后置图标" rightIconName="__fuzhi"></hi-button>
            <hi-button text="前后图标" leftIconName="__gonggao" rightIconName="__fuzhi"></hi-button>
        </module-demo>

        <!-- 副文字 -->
        <view class="demo-module">
            <view class="demo-module__title">副文字</view>
            <view class="demo-module__content">
                <hi-button text="余额支付" subText="¥1000"></hi-button>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped></style>
