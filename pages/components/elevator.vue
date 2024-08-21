<!--
 * hi-elevator - 电梯导航
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <hi-elevator :list="list">
            <template #rightItem="{ item, index }">
                <view class="list" v-if="!item?.disabled">
                    <view class="list-item" v-for="(_item, _current) in lists[index]" :key="_current">
                        <image class="list-item-image" :src="_item.image" mode="widthFix" />
                    </view>
                </view>
                <view class="list-disabled" v-else>啊欧，您没有权限查看此分类下的数据！</view>
            </template>
        </hi-elevator>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 电梯数据
    const list = ref([
        { text: "热门" },
        { text: "数码" },
        { text: "美妆" },
        { text: "礼品卡" },
        { text: "百货" },
        { text: "家电" },
        { text: "手表" },
        { text: "配饰" },
        { text: "潮玩" },
        { text: "食品", disabled: true },
        { text: "鞋子" },
        { text: "热门" },
        { text: "数码" },
        { text: "美妆" },
        { text: "礼品卡" },
        { text: "百货" },
        { text: "家电" },
        { text: "手表" },
        { text: "配饰" },
        { text: "潮玩" },
        { text: "食品" },
        { text: "鞋子" },
        { text: "热门" },
        { text: "数码" },
        { text: "美妆" },
        { text: "礼品卡" },
        { text: "百货" },
        { text: "家电" },
        { text: "手表" },
        { text: "配饰" },
        { text: "潮玩" },
        { text: "食品" },
        { text: "鞋子" }
    ]);

    // 右侧内容数据
    const lists = ref(
        new Array(33).fill([
            { image: "/static/images/temp.jpeg", name: "游戏外设" },
            { image: "/static/images/temp.jpeg", name: "蓝牙音箱" },
            { image: "/static/images/temp.jpeg", name: "手机" },
            { image: "/static/images/temp.jpeg", name: "耳机" },
            { image: "/static/images/temp.jpeg", name: "相机" },
            { image: "/static/images/temp.jpeg", name: "笔记本" },
            { image: "/static/images/temp.jpeg", name: "充电宝" },
            { image: "/static/images/temp.jpeg", name: "充电器" },
            { image: "/static/images/temp.jpeg", name: "打印机" }
        ])
    );
</script>

<style lang="scss" scoped>
    .page-view {
        // #ifdef H5
        height: calc(100vh - var(--window-top) - var(--window-bottom));
        // #endif

        // #ifndef H5
        height: 100vh;
        // #endif

        padding: 0;

        .list {
            padding: 0 30rpx;

            &-item {
                margin: 20rpx 0;

                &-image {
                    width: 100%;
                }
            }

            &-disabled {
                padding: 30rpx 80rpx;
                color: var(--app-font-color-light);
                text-align: center;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
            }
        }
    }
</style>
