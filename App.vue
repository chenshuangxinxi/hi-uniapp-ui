<!--
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<script>
    export default {
        onLaunch: function () {
            console.log("App Launch");
        },
        onShow: function () {
            console.log("App Show");
        },
        onHide: function () {
            console.log("App Hide");
        }
    };
</script>

<style lang="scss">
    // 引入 hi-ui 主样式
    @import "@/uni_modules/hi-ui/index.scss";

    // 此演示项目图标库
    @import "@/iconfonts/iconfont.css";

    page {
        font-size: 14px;
        color: #333333;
        line-height: 1.5;
        background: #f8f8f8;
    }

    .page-view {
        padding: 15px;
    }
</style>
