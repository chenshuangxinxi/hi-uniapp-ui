<!--
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
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
    // 引入 hi-styles 主样式
    @import "@/uni_modules/hi-styles/index.scss";

    // 此演示项目图标库
    @import "@/iconfonts/hi-uniapp-ui.css";

    page {
        --app-font-color: #333333;
        --app-font-color-light: #999999;
        --app-font-size: 28rpx;
        --app-font-size-tips: 24rpx;
        --app-line-height: 1.5;
        --app-border-radius: 16rpx;
        --app-gap: 24rpx;
        --app-active-opacity: 0.85;

        font-size: var(--app-font-size);
        color: var(--app-font-color);
        line-height: var(--app-line-height);
        background: #f8f8f8;
    }

    .page-view {
        padding: 32rpx;
        box-sizing: border-box;
    }

    .demo-module {
        margin-bottom: 50rpx;

        &__title {
            font-weight: 700;
            margin-bottom: 20rpx;
        }

        &__tips {
            font-size: var(--app-font-size-tips);
            color: var(--app-font-color-light);
            margin-top: -8rpx;
            margin-bottom: 20rpx;
        }
    }
</style>
