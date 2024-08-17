/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
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

    // 文字粗细
    weight: {
        type: String,
        default: ""
    },

    // 价格单位
    unit: {
        type: String,
        default: "¥"
    },

    // 单位大小
    unitSize: {
        type: String,
        default: ""
    },

    // 单位颜色
    unitColor: {
        type: String,
        default: ""
    },

    // 单位粗细
    unitWeight: {
        type: String,
        default: ""
    },

    // 价格
    value: {
        type: [String, Number],
        default: 0
    },

    // 价格颜色
    valueColor: {
        type: String,
        default: ""
    },

    // 价格大小
    valueSize: {
        type: String,
        default: ""
    },

    // 价格粗细
    valueWeight: {
        type: String,
        default: ""
    },

    // 小数点位数的长度，要保留几位就写几个0
    decimals: {
        type: String,
        default: "00"
    },

    // 千位符
    thousands: {
        type: String,
        default: ","
    },

    // 是否显示固定的小数位数，关闭后，小数位为0的则不显示
    fixed: {
        type: Boolean,
        default: false
    },

    // 是否显示删除线？
    showDelete: {
        type: Boolean,
        default: false
    },

    // 删除线高度
    deleteHeight: {
        type: String,
        default: ""
    },

    // 删除线宽度
    deleteWidth: {
        type: String,
        default: ""
    },

    // 删除线颜色
    deleteColor: {
        type: String,
        default: ""
    }
};
