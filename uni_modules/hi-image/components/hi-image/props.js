/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 宽
    width: {
        type: String,
        default: ""
    },

    // 高
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
    showLoading: {
        type: Boolean,
        default: true
    },

    // loading 图标名称
    loadingIconName: {
        type: String,
        default: "__loading"
    },

    // loading 文本
    loadingText: {
        type: String,
        default: ""
    },

    // 是否显示 error 状态
    showError: {
        type: Boolean,
        default: true
    },

    // error 图标名称
    errorIconName: {
        type: String,
        default: "__image-error"
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
