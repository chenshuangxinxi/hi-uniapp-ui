/**
 * hi-ui 入口文件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
const $hi = {
    // 配置
    config: {
        // 组件公共配置属性
        componentsOptions: {
            // 在组件定义时的选项中启动多 slot 支持
            multipleSlots: true,
            // 将自定义节点设置成虚拟的，更加接近 Vue 组件的表现。
            virtualHost: true,
            // [组件样式隔离方式](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB)
            // - isolated 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（一般情况下的默认值）；
            // - apply-shared 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
            // - shared 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 apply-shared 或 shared 的自定义组件。（这个选项在插件中不可用。）
            // 微信小程序在组件 options 中配置，支付宝小程序在 manifest.json -> mp-alipay 中配置
            styleIsolation: "shared"
        },

        // 图标组件配置
        icon: {
            // 扩展图标的类名前缀，如果想扩展多个图标库，将值设置为数组就可以
            // 例如：["app-iconfont", "my-iconfont"]
            prefix: ""
        },

        // webview 配置
        webview: {
            // 默认的 webview 页面路径
            defaultPagePath: "/pages/webview/webview"
        }
    }
};
uni.$hi = $hi;
export default $hi;
