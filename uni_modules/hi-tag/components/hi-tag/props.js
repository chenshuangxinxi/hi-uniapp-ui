/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 标签和关闭按钮的 hover class
    hoverClass: {
        type: String,
        default: "hi-hover"
    },

    // 标签文本
    text: {
        type: String,
        default: ""
    },

    // 图标名称
    iconName: {
        type: String,
        default: ""
    },

    // 是否可关闭
    // 组件只提供关闭事件，关闭逻辑需自行处理
    showClose: {
        type: Boolean,
        default: false
    },

    // 关闭图标的名称
    closeIconName: {
        type: String,
        default: "__shanchu"
    }
};
