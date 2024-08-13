/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
export default {
    // hover class
    hoverClass: {
        type: String,
        default: "hi-hover"
    },

    // 是否禁用
    disabled: {
        type: Boolean,
        default: false
    },

    // 禁用时的 class
    disabledClass: {
        type: String,
        default: "hi-disabled"
    },

    // 单选框的值
    value: {
        type: [String, Number],
        default: ""
    },

    // 单选框的 label
    label: {
        type: String,
        default: ""
    },

    // 图标名称
    iconName: {
        type: String,
        default: "__checked"
    },

    // 图标的颜色
    iconColor: {
        type: String,
        default: ""
    },

    // 图标的尺寸
    iconSize: {
        type: String,
        default: ""
    },

    // 图标的裁剪模式
    iconMode: {
        type: String,
        default: ""
    },

    // 单选框的大小
    size: {
        type: String,
        default: ""
    },

    // 单选框的颜色
    color: {
        type: String,
        default: ""
    },

    // 单选框选中时的颜色
    activeColor: {
        type: String,
        default: ""
    },

    // 边框颜色
    borderColor: {
        type: String,
        default: ""
    },

    // 选中时的边框颜色
    activeBorderColor: {
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

    // 圆角
    redius: {
        type: String,
        default: ""
    },

    // 是否是方形
    square: {
        type: Boolean,
        default: false
    }
};
