<!--
 * hi-cell - 单元格
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用">
            <hi-cell title="基础使用"></hi-cell>
        </module-demo>

        <!-- 显示图标 -->
        <module-demo title="显示图标">
            <hi-cell title="显示图标" leftIconName="/static/images/icons/phone.png"></hi-cell>
        </module-demo>

        <!-- 显示描述 -->
        <module-demo title="显示描述">
            <hi-cell title="显示描述" leftIconName="/static/images/icons/phone.png" desc="单元格描述"></hi-cell>
        </module-demo>

        <!-- 显示提示 -->
        <module-demo title="显示提示">
            <hi-cell title="显示提示" leftIconName="/static/images/icons/phone.png" desc="单元格描述" tips="我是单元格提示"></hi-cell>
        </module-demo>

        <!-- 垂直居中 -->
        <module-demo title="垂直居中">
            <hi-cell title="垂直居中" leftIconName="/static/images/icons/phone.png" desc="单元格描述" tips="我是单元格提示" center></hi-cell>
        </module-demo>

        <!-- 隐藏右侧箭头 -->
        <module-demo title="隐藏右侧箭头">
            <hi-cell
                title="隐藏右侧箭头"
                leftIconName="/static/images/icons/phone.png"
                desc="单元格描述"
                tips="我是单元格提示"
                center
                :showRight="false"
            ></hi-cell>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .hi-cell {
        width: 100%;
    }
</style>
