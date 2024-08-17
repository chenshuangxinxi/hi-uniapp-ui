<!--
 * HiUi - 图标
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="icons">
            <view class="icons__title">基础使用</view>
            <view class="icons__list">
                <view class="icons__list__item" v-for="item in basicUseIcons" :key="item.name">
                    <hi-icon class="icons__list__item__icon" :name="item.name"></hi-icon>
                </view>
            </view>
        </view>

        <!-- 图片图标 -->
        <view class="icons">
            <view class="icons__title">图片图标</view>
            <view class="icons__list">
                <view class="icons__list__item" v-for="item in imgIcons" :key="item.src">
                    <hi-icon class="icons__list__item__icon" :name="item.src"></hi-icon>
                </view>
            </view>
        </view>

        <!-- 扩展图标 -->
        <view class="icons">
            <view class="icons__title">扩展图标</view>
            <view class="icons__list">
                <view class="icons__list__item" v-for="item in extendIcons" :key="item.name">
                    <hi-icon class="icons__list__item__icon" :name="item.name"></hi-icon>
                </view>
            </view>
        </view>

        <!-- 内置图标 -->
        <view class="icons">
            <view class="icons__title">内置图标</view>
            <view class="icons__tips">完善补充中</view>
            <view class="icons__list">
                <view class="icons__list__item" v-for="item in builtInIcons" :key="item.name" @tap="handleIconClick(item)">
                    <hi-icon class="icons__list__item__icon" :name="item.name"></hi-icon>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 基础使用
    const basicUseIcons = ref([
        { name: "__gonggao", theme: "primary" },
        { name: "__loading", theme: "success" },
        { name: "__shezhi", theme: "warning" },
        { name: "__shuaxin", theme: "error" },
        { name: "__shanchu", theme: "info" }
    ]);

    // 图片图标
    const imgIcons = ref([
        { src: "/static/images/icons/guoshu.png" },
        { src: "/static/images/icons/meiguihua.png" },
        { src: "/static/images/icons/penzai.png" },
        { src: "/static/images/icons/xiangrikui.png" },
        { src: "/static/images/icons/yehua.png" }
    ]);

    // 扩展图标
    const extendIcons = ref([{ name: "weixin" }, { name: "zhifubao" }, { name: "douyin" }, { name: "zuo" }, { name: "you" }]);

    // 内置图标
    const builtInIcons = ref([
        { name: "__dot", text: "点" },
        { name: "__fuzhi", text: "复制" },
        { name: "__gengduo", text: "更多" },
        { name: "__sousuo", text: "搜索" },
        { name: "__checked", text: "选中" },
        { name: "__delete", text: "删除" },
        { name: "__jian", text: "减" },
        { name: "__jia", text: "加" },
        { name: "__shaixuan", text: "筛选" },
        { name: "__jiangxu", text: "降序" },
        { name: "__shengxu", text: "升序" },
        { name: "__paixu", text: "排序" },
        { name: "__rexiao", text: "热销" },
        { name: "__gouwuche-fill", text: "购物车" },
        { name: "__zhuye", text: "主页" },
        { name: "__kongshuju", text: "空数据" },
        { name: "__gouwuche", text: "购物车" },
        { name: "__image-error", text: "图片加载失败" },
        { name: "__gonggao", text: "公告" },
        { name: "__loading", text: "加载" },
        { name: "__shezhi", text: "设置" },
        { name: "__you", text: "右" },
        { name: "__zuo", text: "左" },
        { name: "__shang", text: "上" },
        { name: "__xia", text: "下" },
        { name: "__shuaxin", text: "刷新" },
        { name: "__shanchu", text: "删除" }
    ]);

    /**
     * 内置图标点击事件
     */
    const handleIconClick = (item) => {
        // 复制到剪切板
        uni.setClipboardData({
            data: item.name,
            success: () => {
                uni.showToast({
                    title: "复制成功",
                    icon: "none",
                    mask: true
                });
            }
        });
    };
</script>

<style lang="scss" scoped>
    .icons {
        margin-bottom: 50rpx;
        box-sizing: border-box;

        &__title {
            font-weight: 700;
            margin-bottom: 20rpx;
        }

        &__tips {
            font-size: var(--app-font-size-tips);
            color: var(--app-font-color-light);
            margin-top: -8rpx;
            margin-bottom: 20rpx;
        }

        &__list {
            display: grid;
            grid-template-columns: repeat(auto-fill, 120rpx);
            justify-content: space-between;
            gap: 20rpx;

            &__item {
                width: 120rpx;
                height: 120rpx;
                background: #ffffff;
                border-radius: var(--app-border-radius);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .hi-icon {
                    font-size: 40rpx;
                }
            }
        }
    }
</style>
