<!--
 * hi-avatar-group - 头像组
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
        { avatar: "/static/logo.png" },
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/logo.png" },
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/logo.png" },
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/logo.png" },
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/logo.png" }
    ]);
</script>

<style lang="scss" scoped>
    .demo-module {
    }
</style>
