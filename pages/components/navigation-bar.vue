<!--
 * hi-navigation-bar - 导航栏
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo
            title="基础使用"
            :tips="[
                '默认高度：44px',
                '默认背景：首先查找在 pages.json 中为页面配置的 navigationBarBackgroundColor，如果未配置，则查找在 pages.json 中全局配置的 navigationBarBackgroundColor',
                '默认预留出了小程序胶囊按钮区域'
            ]"
        >
            <hi-navigation-bar></hi-navigation-bar>
        </module-demo>

        <!-- 标题居左 -->
        <module-demo title="标题居左">
            <hi-navigation-bar align="left"></hi-navigation-bar>
        </module-demo>

        <!-- 返回文字 -->
        <module-demo title="返回文字">
            <hi-navigation-bar backText="返回"></hi-navigation-bar>
        </module-demo>

        <!-- 菜单按钮 -->
        <module-demo title="菜单按钮">
            <hi-navigation-bar :leftMenu="leftMenus1"></hi-navigation-bar>
            <hi-navigation-bar :rightMenu="rightMenus1"></hi-navigation-bar>
        </module-demo>

        <!-- 只显示图标 -->
        <module-demo title="只显示图标">
            <hi-navigation-bar :leftMenu="leftMenus2"></hi-navigation-bar>
            <hi-navigation-bar :rightMenu="rightMenus2"></hi-navigation-bar>
        </module-demo>

        <!-- 只显示文字 -->
        <module-demo title="只显示文字">
            <hi-navigation-bar :leftMenu="leftMenus3"></hi-navigation-bar>
            <hi-navigation-bar :rightMenu="rightMenus3"></hi-navigation-bar>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 左侧菜单按钮
    const leftMenus1 = ref([
        { iconName: "weixin", text: "微信" },
        { iconName: "douyin", text: "抖音" }
    ]);
    const leftMenus2 = ref([{ iconName: "weixin" }, { iconName: "douyin" }]);
    const leftMenus3 = ref([{ text: "微信" }, { text: "抖音" }]);

    // 右侧菜单按钮
    const rightMenus1 = ref([{ iconName: "douyin", text: "抖音" }]);
    const rightMenus2 = ref([{ iconName: "douyin" }]);
    const rightMenus3 = ref([{ text: "抖音" }]);
</script>

<style lang="scss" scoped>
    .hi-navigation-bar {
        width: 100%;
    }
</style>
