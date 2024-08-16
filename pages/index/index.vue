<!--
 * hi-ui - 基础组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础组件 -->
        <view class="components">
            <view class="components__title">基础组件</view>
            <view class="component" v-for="item in basicComponents" :key="item.name" @tap="handleComponentClick(item)">
                <hi-icon class="component__icon" :class="{ 'hi-ani-spin': item.spin }" :name="item.icon"></hi-icon>
                <view class="component__title">{{ item.title }}</view>
                <hi-icon class="component__arrow" name="__you"></hi-icon>
            </view>
        </view>

        <!-- 反馈组件 -->
        <view class="components">
            <view class="components__title">反馈组件</view>
            <view class="component" v-for="item in feedbackComponents" :key="item.name" @tap="handleComponentClick(item)">
                <hi-icon class="component__icon" :name="item.icon"></hi-icon>
                <view class="component__title">{{ item.title }}</view>
                <hi-icon class="component__arrow" name="__you"></hi-icon>
            </view>
        </view>

        <!-- 布局组件 -->
        <view class="components">
            <view class="components__title">布局组件</view>
            <view class="component" v-for="item in layoutComponents" :key="item.name" @tap="handleComponentClick(item)">
                <hi-icon class="component__icon" :name="item.icon"></hi-icon>
                <view class="component__title">{{ item.title }}</view>
                <hi-icon class="component__arrow" name="__you"></hi-icon>
            </view>
        </view>

        <!-- 表单组件 -->
        <view class="components">
            <view class="components__title">表单组件</view>
            <view class="component" v-for="item in formComponents" :key="item.name" @tap="handleComponentClick(item)">
                <hi-icon class="component__icon" :name="item.icon"></hi-icon>
                <view class="component__title">{{ item.title }}</view>
                <hi-icon class="component__arrow" name="__you"></hi-icon>
            </view>
        </view>

        <!-- 导航组件 -->
        <view class="components">
            <view class="components__title">导航组件</view>
            <view class="component" v-for="item in navComponents" :key="item.name" @tap="handleComponentClick(item)">
                <hi-icon class="component__icon" :name="item.icon"></hi-icon>
                <view class="component__title">{{ item.title }}</view>
                <hi-icon class="component__arrow" name="__you"></hi-icon>
            </view>
        </view>

        <!-- 展示组件 -->
        <view class="components">
            <view class="components__title">展示组件</view>
            <view class="component" v-for="item in displayComponents" :key="item.name" @tap="handleComponentClick(item)">
                <hi-icon class="component__icon" :name="item.icon"></hi-icon>
                <view class="component__title">{{ item.title }}</view>
                <hi-icon class="component__arrow" name="__you"></hi-icon>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 基础组件
    const basicComponents = ref([
        { title: "图标", icon: "/static/images/icons/icon.png", path: "/pages/icon/icon" },
        { title: "按钮", icon: "/static/images/icons/button.png", path: "/pages/button/button" },
        { title: "图片", icon: "/static/images/icons/image.png", path: "/pages/image/image" },
        { title: "徽标数", icon: "/static/images/icons/badge.png", path: "/pages/badge/badge" },
        { title: "标签", icon: "/static/images/icons/tag.png", path: "/pages/tag/tag" },
        { title: "loading - 加载", icon: "/static/images/icons/loading.png", path: "/pages/loading/loading", spin: true },
        { title: "loadmore - 加载更多", icon: "/static/images/icons/loadmore.png", path: "/pages/loadmore/loadmore" }
    ]);

    // 反馈组件
    const feedbackComponents = ref([
        { title: "通知公告", icon: "/static/images/icons/notice-bar.png", path: "/pages/notice-bar/notice-bar" },
        { title: "弹出层", icon: "/static/images/icons/popup.png", path: "/pages/popup/popup" }
    ]);

    // 布局组件
    const layoutComponents = ref([
        { title: "轮播", icon: "/static/images/icons/swiper.png", path: "/pages/swiper/swiper" },
        { title: "轮播指示器", icon: "/static/images/icons/swiper.png", path: "/pages/swiper-indicator/swiper-indicator" },
        { title: "可拖动按钮", icon: "/static/images/icons/movable-button.png", path: "/pages/movable-button/movable-button" },
        { title: "遮罩层", icon: "/static/images/icons/overlay.png", path: "/pages/overlay/overlay" }
    ]);

    // 表单组件
    const formComponents = ref([
        { title: "复选框", icon: "/static/images/icons/checkbox.png", path: "/pages/checkbox/checkbox" },
        { title: "复选框组", icon: "/static/images/icons/checkbox.png", path: "/pages/checkbox-group/checkbox-group" },
        { title: "单选框", icon: "/static/images/icons/radio.png", path: "/pages/radio/radio" },
        { title: "单选框组", icon: "/static/images/icons/radio.png", path: "/pages/radio-group/radio-group" },
        { title: "步进器", icon: "/static/images/icons/number-step.png", path: "/pages/number-step/number-step" }
    ]);

    // 导航组件
    const navComponents = ref([
        { title: "状态栏", icon: "/static/images/icons/status-bar.png", path: "/pages/status-bar/status-bar" },
        { title: "导航栏", icon: "/static/images/icons/navigation-bar.png", path: "/pages/navigation-bar/navigation-bar" },
        { title: "页面头部", icon: "/static/images/icons/page-header.png", path: "/pages/page-header/page-header" },
        { title: "内容为空", icon: "/static/images/icons/empty.png", path: "/pages/empty/empty" },
        { title: "电梯导航", icon: "/static/images/icons/elevator.png", path: "/pages/elevator/elevator" }
    ]);

    // 展示组件
    const displayComponents = ref([
        { title: "价格", icon: "/static/images/icons/price.png", path: "/pages/price/price" },
        { title: "过滤器", icon: "/static/images/icons/filter.png", path: "/pages/filter/filter" },
        { title: "倒计时", icon: "/static/images/icons/countdown.png", path: "/pages/countdown/countdown" },
        { title: "头像组", icon: "/static/images/icons/avatar-group.png", path: "/pages/avatar-group/avatar-group" }
    ]);

    /**
     * 组件列表项点击事件
     */
    const handleComponentClick = (item) => {
        uni.navigateTo({ url: item.path });
    };
</script>

<style lang="scss" scoped>
    .components {
        margin-bottom: 50rpx;

        &__title {
            font-weight: 700;
            margin-bottom: 20rpx;
        }
    }

    .component {
        display: flex;
        align-items: center;
        padding: 24rpx 32rpx;
        box-sizing: border-box;
        background: #ffffff;
        border-radius: var(--app-border-radius);
        margin-bottom: var(--app-gap);

        &__icon {
            flex-shrink: 0;
            font-size: 36rpx;
        }

        &__title {
            flex: 1;
            font-weight: 500;
            padding: 0 20rpx;
            box-sizing: border-box;
        }

        &__arrow {
            flex-shrink: 0;
            color: var(--app-font-color-light);
        }

        &:active {
            opacity: var(--app-active-opacity);
        }
    }
</style>
