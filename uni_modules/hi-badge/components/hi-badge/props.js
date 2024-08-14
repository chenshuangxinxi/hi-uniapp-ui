/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 主题
    theme: {
        type: String,
        default: ""
    },

    // 值
    value: {
        type: Number,
        default: 0
    },

    // 值为 0 时是否显示
    showZero: {
        type: Boolean,
        default: false
    },

    // 模式。
    // dot: 圆点模式
    // overflow: 值大于 max 时显示 ${max}+
    // ellipsis: 值大于 max 时显示 ${max}...
    // limit: 以 limit 属性的值作为判断条件，值大于 limit 时显示 ${value / limit} + ${suffix}
    mode: {
        type: String,
        default: ""
    },

    // 最大值
    max: {
        type: Number,
        default: 99
    },

    // limit 分割值
    limit: {
        type: Number,
        default: 1000
    },

    // limit 分割后的后缀
    suffix: {
        type: String,
        default: "k"
    },

    // limit 后要保留的小数位数
    decimals: {
        type: Number,
        default: 2
    },

    // limit 后是否舍弃默认为0的小数位数
    discardLastZero: {
        type: Boolean,
        default: true
    },

    // 背景
    bg: {
        type: String,
        default: ""
    },

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

    // 宽
    width: {
        type: String,
        default: ""
    },

    // 高
    height: {
        type: String,
        default: ""
    },

    // 圆角
    radius: {
        type: String,
        default: ""
    },

    // 上
    top: {
        type: String,
        default: ""
    },

    // 下
    bottom: {
        type: String,
        default: ""
    },

    // 左
    left: {
        type: String,
        default: ""
    },

    // 右
    right: {
        type: String,
        default: ""
    },

    // 定位方式
    position: {
        type: String,
        default: ""
    },

    // 圆点大小
    dotSize: {
        type: String,
        default: ""
    }
};
