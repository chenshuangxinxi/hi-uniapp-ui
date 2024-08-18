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
    }
};
