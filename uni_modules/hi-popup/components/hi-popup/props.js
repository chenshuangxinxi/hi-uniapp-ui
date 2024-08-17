/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 关闭按钮的 hover-class
    hoverClass: {
        type: String,
        default: "hi-hover"
    },

    // 显示状态
    show: {
        type: Boolean,
        default: false
    },

    // 模式
    // top、bottom、left、right、center
    mode: {
        type: String,
        default: "center"
    },

    // 是否显示 Header，包括标题和关闭按钮
    showHeader: {
        type: Boolean,
        default: true
    },

    // 标题
    title: {
        type: String,
        default: ""
    },

    // 是否显示关闭按钮
    showClose: {
        type: Boolean,
        default: true
    },

    // 关闭按钮图标名称
    closeIconName: {
        type: String,
        default: "__shanchu"
    },

    // 是否显示 Footer
    showFooter: {
        type: Boolean,
        default: true
    },

    // 高度
    height: {
        type: String,
        default: ""
    },

    // 最大高度
    maxHeight: {
        type: String,
        default: ""
    },

    // 宽度
    width: {
        type: String,
        default: ""
    },

    // 最大宽度
    maxWidth: {
        type: String,
        default: ""
    },

    // 是否显示遮罩
    showMask: {
        type: Boolean,
        default: true
    },

    // 遮罩是否可点击关闭
    maskClickable: {
        type: Boolean,
        default: false
    }
};
