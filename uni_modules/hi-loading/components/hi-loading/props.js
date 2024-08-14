/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 文字颜色
    color: {
        type: String,
        default: ""
    },

    // 文字大小
    size: {
        type: String,
        default: ""
    },

    // 图标名称
    iconName: {
        type: String,
        default: "__loading"
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
        default: "widthFix"
    },

    // 文字
    text: {
        type: String,
        default: ""
    },

    // 方向
    direction: {
        type: String,
        default: "row"
    }
};
