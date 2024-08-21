<!--
 * hi-avatar-group - 头像组
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用">
            <hi-avatar-group :list="avatars" keyName="avatar"></hi-avatar-group>
        </module-demo>

        <!-- 显示更多 -->
        <module-demo title="显示更多">
            <hi-avatar-group :list="avatars" keyName="avatar" showMore></hi-avatar-group>
        </module-demo>

        <!-- 显示更多 -->
        <module-demo title="显示更多" tips="动画可能会有抖动">
            <hi-avatar-group :list="avatars" keyName="avatar" animation showMore></hi-avatar-group>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 头像列表
    const avatars = ref([
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/logo.jpg" },
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/logo.jpg" },
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/logo.jpg" },
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/logo.jpg" },
        { avatar: "/static/images/temp.jpeg" },
        { avatar: "/static/logo.jpg" }
    ]);
</script>

<style lang="scss" scoped></style>
