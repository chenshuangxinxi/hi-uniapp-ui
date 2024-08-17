<!--
 * hi-ui - 商品/物品参数组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <view class="components">
            <view class="component" v-for="item in paramsCpmponents" :key="item.name" @tap="handleComponentClick(item)">
                <hi-icon class="component__icon" :name="item.icon"></hi-icon>
                <view class="component__title">{{ item.title }}</view>
                <hi-icon class="component__arrow" name="__you"></hi-icon>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 商品列表
    const paramsCpmponents = ref([{ title: "紫菀 - aster", icon: "/static/images/icons/params.png", path: "/subPackages/params/pages/aster" }]);

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
