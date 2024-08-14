/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // hover class
    hoverClass: {
        type: String,
        default: ""
    },

    // 标签文本
    text: {
        type: String,
        default: ""
    },

    // 主题
    theme: {
        type: String,
        default: ""
    },

    // 是否镂空
    plain: {
        type: Boolean,
        default: false
    },

    // 图标名称
    iconName: {
        type: String,
        default: ""
    },

    // 图标大小
    iconSize: {
        type: [String, Number],
        default: ""
    },

    // 图标颜色
    iconColor: {
        type: String,
        default: ""
    },

    // 图标裁剪模式
    iconMode: {
        type: String,
        default: ""
    },

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

    // 文字大小
    size: {
        type: String,
        default: ""
    },

    // 文字颜色
    color: {
        type: String,
        default: ""
    },

    // 边框颜色
    borderColor: {
        type: String,
        default: ""
    },

    // 圆角
    radius: {
        type: String,
        default: ""
    },

    // 背景
    bg: {
        type: String,
        default: ""
    },

    // 是否可关闭
    // 组件只提供关闭事件，关闭逻辑需自行处理
    closable: {
        type: Boolean,
        default: false
    },

    // 关闭图标的名称
    closeIconName: {
        type: String,
        default: "__shanchu"
    },

    // 关闭图标的大小
    closeIconSize: {
        type: [String, Number],
        default: ""
    },

    // 关闭图标的颜色
    closeIconColor: {
        type: String,
        default: ""
    },

    // 关闭图标的裁剪模式
    closeIconMode: {
        type: String,
        default: ""
    },

    // 关闭按钮是否相对定位
    closeAbsolute: {
        type: Boolean,
        default: false
    },

    // 关闭按钮的背景
    closeBg: {
        type: String,
        default: ""
    },

    // 关闭按钮的边框颜色
    closeBorderColor: {
        type: String,
        default: ""
    },

    // 关闭按钮的上
    closeTop: {
        type: String,
        default: ""
    },

    // 关闭按钮的右
    closeRight: {
        type: String,
        default: ""
    },

    // 关闭按钮的宽
    closeWidth: {
        type: String,
        default: ""
    },

    // 关闭按钮的高
    closeHeight: {
        type: String,
        default: ""
    },

    // 是否是圆角标签
    round: {
        type: Boolean,
        default: false
    },

    // 是否显示边框
    border: {
        type: Boolean,
        default: false
    },

    // 关闭按钮的hover class
    closeHoverClass: {
        type: String,
        default: "hi-hover"
    }
};
