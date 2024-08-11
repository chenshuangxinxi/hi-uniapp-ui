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
        default: "hi-hover-class"
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

    // 是否显示 loading 状态
    loading: {
        type: Boolean,
        default: true
    },

    // loading 图标的名称
    loadingIconName: {
        type: String,
        default: "__loading"
    },

    // loading 图标的其他配置
    loadingIconProps: {
        type: Object,
        default: () => ({})
    },

    // loading 文本
    loadingText: {
        type: String,
        default: "加载中..."
    },

    // 是否显示 error
    error: {
        type: Boolean,
        default: true
    },

    // error 图标的名称
    errorIconName: {
        type: String,
        default: "__image-error"
    },

    // error 图标的其他配置项
    errorIconProps: {
        type: Object,
        default: () => ({})
    },

    // error 状态的文本
    errorText: {
        type: String,
        default: "加载失败"
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
