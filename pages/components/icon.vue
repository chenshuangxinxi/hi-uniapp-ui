<!--
 * hi-icon - 图标
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="page-view">
        <!-- 基础使用 -->
        <module-demo title="基础使用">
            <hi-grid>
                <view class="item" v-for="item in basicUseIcons" :key="item.name">
                    <hi-icon class="icon" :name="item.name"></hi-icon>
                </view>
            </hi-grid>
        </module-demo>

        <!-- 图片图标 -->
        <module-demo title="图片图标" tips="建议使用网络资源路径或以 '/static/' 开头的绝对路径">
            <hi-grid>
                <view class="item" v-for="item in imgIcons" :key="item.name">
                    <hi-icon class="icon" :name="item.name"></hi-icon>
                </view>
            </hi-grid>
        </module-demo>

        <!-- 扩展图标 -->
        <module-demo title="扩展图标" tips="需在 'main.js' 中配置扩展图标前缀">
            <hi-grid>
                <view class="item" v-for="item in extendIcons" :key="item.name">
                    <hi-icon class="icon" :name="item.name"></hi-icon>
                </view>
            </hi-grid>
        </module-demo>

        <!-- 内置图标 -->
        <module-demo title="内置图标" tips="补充完善中...">
            <hi-grid>
                <view class="item" v-for="item in builtInIcons" :key="item.name" @tap="handleIconClick(item)">
                    <hi-icon class="icon" :name="item.name"></hi-icon>
                </view>
            </hi-grid>
        </module-demo>
    </view>
</template>

<script setup>
    import { ref } from "vue";

    // 基础使用
    const basicUseIcons = ref([{ name: "__gonggao" }, { name: "__loading" }, { name: "__shezhi" }, { name: "__shuaxin" }, { name: "__shanchu" }]);

    // 图片图标
    const imgIcons = ref([{ name: "/static/images/icons/company.png" }, { name: "/static/images/icons/phone.png" }]);

    // 扩展图标
    const extendIcons = ref([{ name: "weixin" }, { name: "zhifubao" }, { name: "douyin" }]);

    // 内置图标
    const builtInIcons = ref([
        { name: "__dizhi", text: "地址" },
        { name: "__bianji", text: "编辑" },
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
    .hi-grid {
        width: 100%;
    }

    .item {
        height: 60px;
        background: #ffffff;
        border-radius: var(--hi-radius-default);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .icon {
        font-size: 20px;
    }
</style>
