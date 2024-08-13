/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 选中的值
    modelValue: {
        type: [Number, String],
        default: ""
    },

    // 选项之间的间距
    gap: {
        type: String,
        default: ""
    },

    // 是否异步变更
    async: {
        type: Boolean,
        default: false
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
