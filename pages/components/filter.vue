<!--
 * hi-filter - 过滤器
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 单选 -->
        <module-demo title="单选" tips="该组件只提供布局，不提供逻辑">
            <hi-filter :list="items" :current="current1" @itemClick="handleItemClick1"></hi-filter>
        </module-demo>

        <!-- 多选 -->
        <module-demo title="多选" tips="该组件只提供布局，不提供逻辑">
            <hi-filter :list="items" :current="current2" @itemClick="handleItemClick2"></hi-filter>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 选中项
    const current1 = ref(-1);
    const current2 = ref([]);

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

    /**
     * 筛选项点击事件
     * @param {Object} item 选项数据
     * @param {Number} index 选项索引
     */
    function handleItemClick1(item, index) {
        // 没有 children 的情况
        if (!item.children) {
            // 已选中
            if (current1.value === index) return;

            // 未选中
            current1.value = index;
            return;
        }

        // 有 children 的情况
        uni.showActionSheet({
            itemList: item.children.map((child) => child.text),
            success: ({ tapIndex }) => {
                item.childIndex = tapIndex;
                item.checkedIconName = item.children[tapIndex].iconName;
                current1.value = index;
            }
        });
    }

    /**
     * 筛选项点击事件
     * @param {Object} item 选项数据
     * @param {Number} index 选项索引
     */
    function handleItemClick2(item, index) {
        console.log("item", item, index);
        // 没有 children 的情况
        if (!item.children) {
            // 已选中
            if (current2.value.includes(index)) {
                current2.value.splice(current2.value.indexOf(index), 1);
                return;
            }

            // 未选中
            current2.value.push(index);
            return;
        }

        // 有 children 的情况
        uni.showActionSheet({
            itemList: item.children.map((child) => child.text),
            success: ({ tapIndex }) => {
                item.childIndex = tapIndex;
                item.checkedIconName = item.children[tapIndex].iconName;
                if (current2.value.includes(index)) return;
                current2.value.push(index);
            },
            fail: function (res) {
                if (current2.value.includes(index)) {
                    current2.value.splice(current2.value.indexOf(index), 1);
                }
            }
        });
    }
</script>

<style lang="scss" scoped>
    .hi-filter {
        background: #ffffff;
        padding: 0.75em 1em;
        width: 100%;
    }
</style>
