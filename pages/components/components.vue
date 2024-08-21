<!--
 * hiui - 组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础组件 -->
        <module-menu title="基础组件">
            <hi-cell
                :title="item.title"
                :leftIconName="item.icon"
                :desc="item.desc"
                v-for="item in basicComponents"
                :key="item.name"
                @tap="handleComponentClick(item)"
            ></hi-cell>
        </module-menu>

        <!-- 反馈组件 -->
        <module-menu title="反馈组件">
            <hi-cell
                :title="item.title"
                :leftIconName="item.icon"
                :desc="item.desc"
                v-for="item in feedbackComponents"
                :key="item.name"
                @tap="handleComponentClick(item)"
            ></hi-cell>
        </module-menu>

        <!-- 布局组件 -->
        <module-menu title="布局组件">
            <hi-cell
                :title="item.title"
                :leftIconName="item.icon"
                :desc="item.desc"
                v-for="item in layoutComponents"
                :key="item.name"
                @tap="handleComponentClick(item)"
            ></hi-cell>
        </module-menu>

        <!-- 表单组件 -->
        <module-menu title="表单组件">
            <hi-cell
                :title="item.title"
                :leftIconName="item.icon"
                :desc="item.desc"
                v-for="item in formComponents"
                :key="item.name"
                @tap="handleComponentClick(item)"
            ></hi-cell>
        </module-menu>

        <!-- 导航组件 -->
        <module-menu title="导航组件">
            <hi-cell
                :title="item.title"
                :leftIconName="item.icon"
                :desc="item.desc"
                v-for="item in navComponents"
                :key="item.name"
                @tap="handleComponentClick(item)"
            ></hi-cell>
        </module-menu>

        <!-- 展示组件 -->
        <module-menu title="展示组件">
            <hi-cell
                :title="item.title"
                :leftIconName="item.icon"
                :desc="item.desc"
                v-for="item in displayComponents"
                :key="item.name"
                @tap="handleComponentClick(item)"
            ></hi-cell>
        </module-menu>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 基础组件
    const basicComponents = ref([
        { title: "图标", desc: "Icon", icon: "/static/images/icons/icon.png", path: "/pages/components/icon" },
        { title: "按钮", desc: "Button", icon: "/static/images/icons/button.png", path: "/pages/components/button" },
        { title: "图片", desc: "Image", icon: "/static/images/icons/image.png", path: "/pages/components/image" },
        { title: "徽标数", desc: "Badge", icon: "/static/images/icons/badge.png", path: "/pages/components/badge" },
        { title: "标签", desc: "Tag", icon: "/static/images/icons/tag.png", path: "/pages/components/tag" },
        { title: "加载", desc: "Loading", icon: "/static/images/icons/loading.png", path: "/pages/components/loading", spin: true },
        { title: "加载更多", desc: "LoadMore", icon: "/static/images/icons/loadmore.png", path: "/pages/components/loadmore" }
    ]);

    // 反馈组件
    const feedbackComponents = ref([
        { title: "滚动通知", desc: "NoticeBar", icon: "/static/images/icons/notice-bar.png", path: "/pages/components/notice-bar" },
        { title: "弹出层", desc: "Popup", icon: "/static/images/icons/popup.png", path: "/pages/components/popup" }
    ]);

    // 布局组件
    const layoutComponents = ref([
        { title: "轮播", desc: "Swiper", icon: "/static/images/icons/swiper.png", path: "/pages/components/swiper" },
        { title: "轮播指示器", desc: "SwiperIndicator", icon: "/static/images/icons/swiper.png", path: "/pages/components/swiper-indicator" },
        { title: "可拖动按钮", desc: "MovableButton", icon: "/static/images/icons/movable-button.png", path: "/pages/components/movable-button" },
        { title: "遮罩层", desc: "Overlay", icon: "/static/images/icons/overlay.png", path: "/pages/components/overlay" },
        { title: "列表", desc: "List", icon: "/static/images/icons/list.png", path: "/pages/components/list" },
        { title: "单元格", desc: "Cell", icon: "/static/images/icons/cell.png", path: "/pages/components/cell" },
        { title: "宫格", desc: "Grid", icon: "/static/images/icons/grid.png", path: "/pages/components/grid" }
    ]);

    // 表单组件
    const formComponents = ref([
        { title: "复选框", desc: "Checkbox", icon: "/static/images/icons/checkbox.png", path: "/pages/components/checkbox" },
        { title: "复选框组", desc: "CheckboxGroup", icon: "/static/images/icons/checkbox.png", path: "/pages/components/checkbox-group" },
        { title: "单选框", desc: "Radio", icon: "/static/images/icons/radio.png", path: "/pages/components/radio" },
        { title: "单选框组", desc: "RadioGroup", icon: "/static/images/icons/radio.png", path: "/pages/components/radio-group" },
        { title: "步进器", desc: "NumberStep", icon: "/static/images/icons/number-step.png", path: "/pages/components/number-step" },
        { title: "省市区选择器", desc: "RegionPicker", icon: "/static/images/icons/region.png", path: "/pages/components/region-picker" }
    ]);

    // 导航组件
    const navComponents = ref([
        { title: "状态栏", desc: "StatusBar", icon: "/static/images/icons/status-bar.png", path: "/pages/components/status-bar" },
        { title: "导航栏", desc: "NavigationBar", icon: "/static/images/icons/navigation-bar.png", path: "/pages/components/navigation-bar" },
        { title: "内容为空", desc: "Empty", icon: "/static/images/icons/empty.png", path: "/pages/components/empty" },
        { title: "电梯导航", desc: "Elevator", icon: "/static/images/icons/elevator.png", path: "/pages/components/elevator" }
    ]);

    // 展示组件
    const displayComponents = ref([
        { title: "价格", desc: "Price", icon: "/static/images/icons/price.png", path: "/pages/components/price" },
        { title: "过滤器", desc: "Filter", icon: "/static/images/icons/filter.png", path: "/pages/components/filter" },
        { title: "倒计时", desc: "Countdown", icon: "/static/images/icons/countdown.png", path: "/pages/components/countdown" },
        { title: "头像组", desc: "AvatarGroup", icon: "/static/images/icons/avatar-group.png", path: "/pages/components/avatar-group" }
    ]);

    /**
     * 组件列表项点击事件
     */
    const handleComponentClick = (item) => {
        uni.navigateTo({ url: item.path });
    };
</script>

<style lang="scss" scoped></style>
