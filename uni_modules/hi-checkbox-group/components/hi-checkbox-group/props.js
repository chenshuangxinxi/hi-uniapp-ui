/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 选中的值
    modelValue: {
        type: Array,
        default: () => []
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
    }
};
