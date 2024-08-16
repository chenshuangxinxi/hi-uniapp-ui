<!--
 * HiUi - 导航栏
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
                <hi-navigation-bar></hi-navigation-bar>
            </view>
        </view>

        <!-- 标题居中 -->
        <view class="demo-module">
            <view class="demo-module__title">标题居中</view>
            <view class="demo-module__content">
                <hi-navigation-bar align="center"></hi-navigation-bar>
            </view>
        </view>

        <!-- 返回按钮文字 -->
        <view class="demo-module">
            <view class="demo-module__title">返回按钮文字</view>
            <view class="demo-module__content">
                <hi-navigation-bar align="center" backText="返回"></hi-navigation-bar>
            </view>
        </view>

        <!-- 自定义菜单按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">自定义菜单按钮</view>
            <view class="demo-module__content">
                <hi-navigation-bar
                    align="center"
                    :leftMenu="menus"
                    :rightMenu="menus"
                    @leftMenuClick="handleLeftClick"
                    @rightMenuClick="handleRightClick"
                ></hi-navigation-bar>
            </view>
        </view>

        <!-- 自定义菜单按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">自定义菜单按钮</view>
            <view class="demo-module__content">
                <hi-navigation-bar
                    align="center"
                    :leftMenu="menus2"
                    :rightMenu="menus2"
                    @leftMenuClick="handleLeftClick"
                    @rightMenuClick="handleRightClick"
                ></hi-navigation-bar>
            </view>
        </view>

        <!-- 自定义菜单按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">自定义菜单按钮</view>
            <view class="demo-module__content">
                <hi-navigation-bar
                    align="center"
                    :leftMenu="menus3"
                    :rightMenu="menus3"
                    @leftMenuClick="handleLeftClick"
                    @rightMenuClick="handleRightClick"
                ></hi-navigation-bar>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 左侧菜单按钮
    const menus = ref([
        { show: true, iconName: "weixin", text: "微信" },
        { show: true, iconName: "douyin", text: "抖音" }
    ]);

    const menus2 = ref([
        { show: true, iconName: "weixin", text: "微信", showIcon: false, showText: true },
        { show: true, iconName: "douyin", text: "抖音", showIcon: false, showText: true }
    ]);

    const menus3 = ref([
        { show: true, iconName: "weixin", text: "微信", showText: true },
        { show: true, iconName: "douyin", text: "抖音", showText: true }
    ]);

    /**
     * @description 左侧按钮点击事件
     * @param {Object} item 按钮数据
     * @param {Number} index 按钮下标
     */
    function handleLeftClick(item, index) {
        uni.showToast({
            title: `点击了左侧下标为${index}的按钮`,
            icon: "none"
        });
    }

    /**
     * @description 右侧按钮点击事件
     * @param {Object} item 按钮数据
     * @param {Number} index 按钮下标
     */
    function handleRightClick(item, index) {
        uni.showToast({
            title: `点击了右侧下标为${index}的按钮`,
            icon: "none"
        });
    }
</script>

<style lang="scss" scoped>
    .demo-module {
    }
</style>
