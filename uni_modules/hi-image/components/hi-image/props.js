/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
export default {
    // hover-class
    hoverClass: {
        type: String,
        default: "hi-hover"
    },

    // 是否开启预览?
    preview: {
        type: Boolean,
        default: false
    },

    // 图片宽度
    width: {
        type: String,
        default: ""
    },

    // 图片高度
    height: {
        type: String,
        default: ""
    },

    // 图片地址
    src: {
        type: String,
        default: ""
    },

    // 图片裁剪模式
    mode: {
        type: String,
        default: "aspectFit"
    },

    // 是否关闭loading
    closeLoading: {
        type: Boolean,
        default: false
    },

    // loading 图标名称
    loadingIconName: {
        type: String,
        default: "__loading"
    },

    // loading 图标大小
    loadingIconSize: {
        type: String,
        default: ""
    },

    // loading 图标颜色
    loadingIconColor: {
        type: String,
        default: ""
    },

    // loading 图标裁剪模式
    loadingIconMode: {
        type: String,
        default: ""
    },

    // loading 文本
    loadingText: {
        type: String,
        default: ""
    },

    // 是否关闭 error 状态
    closeError: {
        type: Boolean,
        default: false
    },

    // error 图标名称
    errorIconName: {
        type: String,
        default: "__image-error"
    },

    // error 图标大小
    errorIconSize: {
        type: String,
        default: ""
    },

    // error 图标颜色
    errorIconColor: {
        type: String,
        default: ""
    },

    // error 图标裁剪模式
    errorIconMode: {
        type: String,
        default: ""
    },

    // 圆角
    radius: {
        type: String,
        default: ""
    },

    // 是否圆形图片
    circle: {
        type: Boolean,
        default: false
    },

    // 是否自动撑满到父元素的宽高100%
    fill: {
        type: Boolean,
        default: false
    },

    // error 状态的文本
    errorText: {
        type: String,
        default: ""
    },

    // 是否开启懒加载
    lazyLoad: {
        type: Boolean,
        default: true
    },

    // 是否显示动画效果
    fadeShow: {
        type: Boolean,
        default: true
    },

    // 在系统不支持webp的情况下是否单独启用webp。默认false，只支持网络资源
    webp: {
        type: Boolean,
        default: true
    },

    // 开启长按图片显示识别小程序码菜单
    showMenuByLongpress: {
        type: Boolean,
        default: true
    },

    // 是否能拖动图片
    draggable: {
        type: Boolean,
        default: false
    }
};
