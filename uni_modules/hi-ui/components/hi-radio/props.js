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
        default: "hi-hover"
    },

    // 是否禁用
    disabled: {
        type: Boolean,
        default: false
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
    }
};
