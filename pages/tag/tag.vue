<!--
 * hi-ui - 标签组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__content">
                <hi-tag text="标签"></hi-tag>
            </view>
        </view>

        <!-- 标签主题 -->
        <view class="demo-module">
            <view class="demo-module__title">标签主题</view>
            <view class="demo-module__content">
                <hi-tag text="标签" theme="main"></hi-tag>
                <hi-tag text="标签" theme="primary"></hi-tag>
                <hi-tag text="标签" theme="success"></hi-tag>
                <hi-tag text="标签" theme="warning"></hi-tag>
                <hi-tag text="标签" theme="error"></hi-tag>
                <hi-tag text="标签" theme="info"></hi-tag>
            </view>
        </view>

        <!-- 镂空标签 -->
        <view class="demo-module">
            <view class="demo-module__title">镂空标签</view>
            <view class="demo-module__content">
                <hi-tag text="标签" plain theme="main"></hi-tag>
                <hi-tag text="标签" plain theme="primary"></hi-tag>
                <hi-tag text="标签" plain theme="success"></hi-tag>
                <hi-tag text="标签" plain theme="warning"></hi-tag>
                <hi-tag text="标签" plain theme="error"></hi-tag>
                <hi-tag text="标签" plain theme="info"></hi-tag>
            </view>
        </view>

        <!-- 带图标 -->
        <view class="demo-module">
            <view class="demo-module__title">带图标</view>
            <view class="demo-module__content">
                <hi-tag text="标签" plain theme="primary" iconName="__shaixuan"></hi-tag>
                <hi-tag text="标签" plain theme="success" iconName="__zhuye"></hi-tag>
                <hi-tag text="标签" plain theme="warning" iconName="__gouwuche"></hi-tag>
                <hi-tag text="标签" plain theme="error" iconName="__rexiao"></hi-tag>
                <hi-tag text="标签" plain theme="info" iconName="__xinpin"></hi-tag>
            </view>
        </view>

        <!-- 显示关闭按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">显示关闭按钮</view>
            <view class="demo-module__content">
                <hi-tag text="标签" plain closable theme="primary" iconName="__shaixuan" @close="handleClose(1)"></hi-tag>
                <hi-tag text="标签" plain closable theme="success" iconName="__zhuye" @close="handleClose(2)"></hi-tag>
                <hi-tag text="标签" plain closable theme="warning" iconName="__gouwuche" @close="handleClose(3)"></hi-tag>
                <hi-tag text="标签" plain closable theme="error" iconName="__rexiao" @close="handleClose(4)"></hi-tag>
                <hi-tag text="标签" plain closable theme="info" iconName="__xinpin" @close="handleClose(5)"></hi-tag>
            </view>
        </view>

        <!-- 实现个性化样式 -->
        <view class="demo-module">
            <view class="demo-module__title">实现个性化样式</view>
            <view class="demo-module__content">
                <hi-tag text="返弹丸币x3" round iconName="/static/images/icons/pill.png" class="custom-tag"></hi-tag>
            </view>
        </view>
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
            title: `点击了第${order}个标签的关闭按钮`,
            icon: "none"
        });
    }
</script>

<style lang="scss" scoped>
    .demo-module {
        &__content {
            display: flex;
            flex-wrap: wrap;
            gap: 20rpx;
        }

        .custom-tag {
            --hi-tag-padding: 0 0.6em 0 0;
            --hi-tag-icon-image-width: auto;
            --hi-tag-icon-image-height: 100%;
            --hi-tag-background: #f1f3f4;
            --hi-tag-text-font-color: #6269fd;
            --hi-tag-border-width: 0;
        }
    }
</style>
