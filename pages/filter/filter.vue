<!--
 * hi-filter - 过滤器
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
                <hi-filter :list="items" :current="current" @itemClick="handleItemClick"></hi-filter>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 筛选项
    const items = ref([
        { value: 1, text: "热销", iconName: "__rexiao", checkedIconName: "", checked: false },
        { value: 2, text: "新品", iconName: "__xinpin", checkedIconName: "", checked: false },
        {
            value: 3,
            text: "价格",
            iconName: "__paixu",
            checkedIconName: "",
            reverse: true,
            checked: false,
            childIndex: -1,
            children: [
                { value: 3.1, text: "升序", iconName: "__shengxu" },
                { value: 3.2, text: "降序", iconName: "__jiangxu" }
            ]
        }
    ]);
    const current = ref(0);

    /**
     * 筛选项点击事件
     * @param {Object} item 选项数据
     * @param {Number} index 选项索引
     */
    function handleItemClick(item, index) {
        // 没有 children 的情况
        if (!item.children) {
            // 已选中
            if (current.value === index) return;

            // 未选中
            current.value = index;
            return;
        }

        // 有 children 的情况
        uni.showActionSheet({
            itemList: item.children.map((child) => child.text),
            success: ({ tapIndex }) => {
                item.childIndex = tapIndex;
                item.checkedIconName = item.children[tapIndex].iconName;
                current.value = index;
            }
        });
    }
</script>

<style lang="scss" scoped>
    .demo-module {
        .gap {
            height: 10px;
        }

        .hi-filter {
            background: #ffffff;
            padding: 0.75em 1em;
        }
    }
</style>
