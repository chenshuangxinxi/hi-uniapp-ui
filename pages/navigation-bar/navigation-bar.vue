<!--
 * hi-ui - 导航栏组件演示页面
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
                    :leftMenu="leftIcons1"
                    :rightMenu="rightIcons1"
                    @leftClick="handleLeftClick"
                    @rightClick="handleRightClick"
                ></hi-navigation-bar>
            </view>
        </view>

        <!-- 自定义菜单按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">自定义菜单按钮</view>
            <view class="demo-module__content">
                <hi-navigation-bar
                    align="center"
                    :leftMenu="leftIcons2"
                    :rightMenu="rightIcons2"
                    @leftClick="handleLeftClick"
                    @rightClick="handleRightClick"
                ></hi-navigation-bar>
            </view>
        </view>

        <!-- 自定义菜单按钮 -->
        <view class="demo-module">
            <view class="demo-module__title">自定义菜单按钮</view>
            <view class="demo-module__content">
                <hi-navigation-bar
                    align="center"
                    :leftMenu="leftIcons"
                    :rightMenu="rightIcons"
                    @leftClick="handleLeftClick"
                    @rightClick="handleRightClick"
                ></hi-navigation-bar>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 左侧菜单按钮
    const leftIcons = ref([
        { show: true, iconProps: { name: "weixin" }, text: "微信" },
        { show: true, iconProps: { name: "douyin" }, text: "抖音" }
    ]);
    const leftIcons1 = ref([
        { show: true, iconProps: { name: "weixin" } },
        { show: true, iconProps: { name: "douyin" } }
    ]);
    const leftIcons2 = ref([
        { show: true, text: "微信" },
        { show: true, text: "抖音" }
    ]);

    // 右侧菜单按钮
    const rightIcons = ref([
        { show: true, iconProps: { name: "__gonggao" }, text: "公告" },
        { show: true, iconProps: { name: "__shezhi" }, text: "设置" }
    ]);
    const rightIcons1 = ref([
        { show: true, iconProps: { name: "__gonggao" } },
        { show: true, iconProps: { name: "__shezhi" } }
    ]);
    const rightIcons2 = ref([
        { show: true, text: "公告" },
        { show: true, text: "设置" }
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
