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

    // 是否垂直居中
    center: {
        type: Boolean,
        default: false
    },

    // 左侧图标名称
    leftIconName: {
        type: String,
        default: ""
    },

    // 标题
    title: {
        type: String,
        default: ""
    },

    // 描述
    desc: {
        type: String,
        default: ""
    },

    // 提示
    tips: {
        type: String,
        default: ""
    },

    // 是否显示右侧内容（图标）
    showRight: {
        type: Boolean,
        default: true
    },

    // 右侧图标名称
    rightIconName: {
        type: String,
        default: "__you"
    }
};
