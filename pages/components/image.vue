<!--
 * hi-image - 图片
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用" tips="建议使用网络资源路径或以 '/static/' 开头的绝对路径">
            <hi-image src="/static/images/temp.jpeg"></hi-image>
        </module-demo>

        <!-- 加载状态 -->
        <module-demo title="加载状态" tips="需将网络信号调到 3G 查看效果">
            <hi-image src="/static/images/temp.jpeg"></hi-image>
        </module-demo>

        <!-- 失败状态 -->
        <module-demo title="失败状态">
            <hi-image src="/static/images/temp.jpedg" errorText="啊欧！图片加载失败了~"></hi-image>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";
</script>

<style lang="scss" scoped>
    .hi-image {
        background: #ffffff;
    }
</style>
