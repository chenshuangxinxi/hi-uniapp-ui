/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 价格单位
    unit: {
        type: String,
        default: "¥"
    },

    // 价格
    value: {
        type: [String, Number],
        default: 0
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
    }
};
