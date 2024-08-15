/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 数量
    count: {
        type: Number,
        default: 0
    },

    // 激活项下标
    current: {
        type: Number,
        default: 0
    },

    // 指示器模式
    // dots: 点指示器
    // line: 线指示器
    mode: {
        type: String,
        default: "dots"
    },

    // 位置
    // bottom-center: 底部; bottom-left: 底部靠左; bottom-right: 底部靠右; left-center: 左侧居中; left-bottom: 左侧靠下; right-center: 右侧居中; right-bottom: 右侧靠下;
    position: {
        type: String,
        default: "bottom-center"
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

    // 点指示器颜色
    dotColor: {
        type: String,
        default: ""
    },

    // 激活点指示器颜色
    activeDotColor: {
        type: String,
        default: ""
    },

    // 点指示器宽
    dotWidth: {
        type: String,
        default: ""
    },

    // 激活点指示器宽
    activeDotWidth: {
        type: String,
        default: ""
    },

    // 点指示器高
    dotHeight: {
        type: String,
        default: ""
    },

    // 激活点指示器高
    activeDotHeight: {
        type: String,
        default: ""
    },

    // 点指示器圆角
    dotRedius: {
        type: String,
        default: ""
    },

    // 激活点指示器圆角
    activeDotRedius: {
        type: String,
        default: ""
    },

    // 点指示器的间距
    dotGap: {
        type: String,
        default: ""
    },

    // line 指示器宽度
    lineWidth: {
        type: String,
        default: ""
    },

    // line 指示器高度
    lineHeight: {
        type: String,
        default: ""
    },

    // line 指示器颜色
    lineColor: {
        type: String,
        default: ""
    },

    // line 指示器滑标的颜色
    lineBarColor: {
        type: String,
        default: ""
    },

    // line 指示器的圆角大小
    lineRedius: {
        type: String,
        default: ""
    }
};
