<!--
 * hi-checkbox - 复选框组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <view class="topic-tips">提示：此页面演示的都是单独使用时的用法，组合用法请查看 `hi-checkbox-group` 文档</view>
        <!-- 基础使用 -->
        <view class="demo-module">
            <view class="demo-module__title">基础使用</view>
            <view class="demo-module__content">
                <hi-checkbox v-model="checked1" alone label="选项"></hi-checkbox>
            </view>
        </view>

        <!-- 禁用 -->
        <view class="demo-module">
            <view class="demo-module__title">禁用</view>
            <view class="demo-module__content">
                <hi-checkbox v-model="checked2" label="选项" alone disabled></hi-checkbox>
            </view>
        </view>

        <!-- 异步变更 -->
        <view class="demo-module">
            <view class="demo-module__title">异步变更</view>
            <view class="demo-module__content">
                <hi-checkbox v-model="checked12" alone async @asyncChange="onChange12" plain label="选项"></hi-checkbox>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 单独使用
    const checked1 = ref(true);
    const checked2 = ref(true);
    const checked12 = ref(true);

    /**
     * 异步变更事件
     * @param {Boolean} checked 当前选中状态
     */
    function onChange12(checked) {
        uni.showModal({
            title: "提示",
            content: `点击了复选框，当前选中状态为${checked ? "选中" : "未选中"}`,
            showCancel: true,
            confirmText: "切换状态",
            cancelText: "保持不变",
            success: ({ confirm, cancel }) => {
                if (confirm) {
                    checked12.value = !checked12.value;
                }
            }
        });
    }
</script>

<style lang="scss" scoped>
    .topic-tips {
        color: var(--hi-theme-error);
        font-size: 26rpx;
        margin-bottom: 30rpx;
    }

    .demo-module {
        &__content {
            display: flex;
            flex-direction: column;
            gap: 20rpx;
        }
    }
</style>
