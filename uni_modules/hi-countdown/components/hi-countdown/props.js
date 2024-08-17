/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 显示的数据模式
    // dd | d | hh | h | mm | m | ss | s
    // 如果未设置，则对应的数据不显示
    mode: {
        type: Array,
        default: () => ["dd", "hh", "mm", "ss"]
    },

    // 倒计时结束后的文本
    endText: {
        type: String,
        default: ""
    },

    // 结束日期
    endDate: {
        type: Date,
        default: () => new Date()
    },

    // 分隔符
    // 如果 days、hours、minutes 对应的值为空则默认显示 ":"，seconds 为空则不显示
    separator: {
        type: Object,
        default: () => ({
            days: "天",
            hours: "时",
            minutes: "分",
            seconds: "秒"
        })
    }
};
