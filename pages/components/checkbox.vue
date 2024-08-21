<!--
 * hi-checkbox - 复选框组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用" tips="此处演示的都是单独使用时的用法，组合用法请查看 hi-checkbox-group 文档">
            <hi-checkbox v-model="isChecked1" alone label="选项"></hi-checkbox>
        </module-demo>

        <!-- 禁用状态 -->
        <module-demo title="禁用状态">
            <hi-checkbox v-model="isChecked2" label="选项" alone disabled></hi-checkbox>
        </module-demo>

        <!-- 异步变更 -->
        <module-demo title="异步变更">
            <hi-checkbox v-model="isChecked3" alone async @asyncChange="onAsyncChange" label="选项"></hi-checkbox>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 单独使用
    const isChecked1 = ref(true);
    const isChecked2 = ref(true);
    const isChecked3 = ref(true);

    /**
     * 异步变更事件
     * @param {Boolean} checked 当前选中状态
     */
    function onAsyncChange(checked) {
        uni.showModal({
            title: "提示",
            content: `点击了复选框，当前选中状态为${checked ? "选中" : "未选中"}`,
            showCancel: true,
            confirmText: "切换状态",
            cancelText: "保持不变",
            success: ({ confirm, cancel }) => {
                if (confirm) {
                    isChecked3.value = !isChecked3.value;
                }
            }
        });
    }
</script>

<style lang="scss" scoped></style>
