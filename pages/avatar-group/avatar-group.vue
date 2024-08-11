<!--
 * hi-ui - 头像组组件
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
                <hi-avatar-group :list="avatars" keyName="avatar"></hi-avatar-group>
            </view>
        </view>

        <!-- 显示更多 -->
        <view class="demo-module">
            <view class="demo-module__title">显示更多</view>
            <view class="demo-module__content">
                <hi-avatar-group :list="avatars" keyName="avatar" showMore></hi-avatar-group>
            </view>
        </view>

        <!-- 头像动画 -->
        <view class="demo-module">
            <view class="demo-module__title">头像动画</view>
            <view class="demo-module__tips">使用动画时，头像的数量必须大于设置的显示数量</view>
            <view class="demo-module__content">
                <hi-avatar-group :list="avatars" keyName="avatar" animation showMore></hi-avatar-group>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 头像列表
    const avatars = ref([
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/images/temp_01.jpeg" },
        { avatar: "/static/images/zgm.jpg" },
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/images/temp_01.jpeg" },
        { avatar: "/static/images/zgm.jpg" },
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/images/temp_01.jpeg" },
        { avatar: "/static/images/zgm.jpg" },
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/images/temp_01.jpeg" },
        { avatar: "/static/images/zgm.jpg" },
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/images/temp_01.jpeg" },
        { avatar: "/static/images/zgm.jpg" }
    ]);
</script>

<style lang="scss" scoped>
    .demo-module {
        .hi-avatar-group {
            // --hi-avatar-group-avatar-size: 80rpx;
            // --hi-avatar-group-avatar-offset: 30rpx;
        }
    }
</style>
