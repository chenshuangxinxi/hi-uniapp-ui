<!--
 * hi-ui - 过滤器组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__tips">默认组件是无背景的，此处为了演示效果加了背景</view>
            <view class="demo-module__tips">该组件只提供样式，具体的选中/不选中的逻辑请自行实现</view>
            <view class="demo-module__content">
                <hi-filter :items="items" @itemClick="handleItemClick"></hi-filter>
            </view>
        </view>

        <!-- 选项超出后会水平滚动 -->
        <view class="demo-module demo-module--default">
            <view class="demo-module__title">选项超出后会水平滚动</view>
            <view class="demo-module__content">
                <hi-filter :items="items.concat(items)" @itemClick="handleItemClick"></hi-filter>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 筛选项
    const items = ref([
        { value: 1, label: "热销", iconName: "__rexiao", checkedIconName: "", checked: false },
        { value: 2, label: "新品", iconName: "__xinpin", checkedIconName: "", checked: false },
        {
            value: 3,
            label: "价格",
            iconName: "__paixu",
            checkedIconName: "",
            reverse: true,
            checked: false,
            childIndex: -1,
            children: [
                { value: 3.1, label: "升序", iconName: "__shengxu" },
                { value: 3.2, label: "降序", iconName: "__jiangxu" }
            ]
        }
    ]);

    /**
     * 筛选项点击事件
     * @param {Object} item 选项数据
     * @param {Number} index 选项索引
     */
    function handleItemClick(item, index) {
        // 没有 children 的情况
        if (!item.children) {
            // 已选中
            if (item.checked) return clearCheckedStatus();

            // 未选中
            item.checked = true;
            items.value[index] = item;
            clearCheckedStatus(index);
            return;
        }

        // 有 children 的情况
        uni.showActionSheet({
            itemList: item.children.map((child) => child.label),
            success: ({ tapIndex }) => {
                item.childIndex = tapIndex;
                item.checkedIconName = item.children[tapIndex].iconName;
                item.checked = true;
                items.value[index] = item;
                clearCheckedStatus(index);
            }
        });
    }

    /**
     * 清除选中状态
     * @param {Number} current 选项索引，该选项的状态不会被改变
     */
    function clearCheckedStatus(current) {
        items.value.forEach((item, index) => {
            if (current !== index) {
                item.checked = false;
                if (item?.children) item.childIndex = -1;
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
