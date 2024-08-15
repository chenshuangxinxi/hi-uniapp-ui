/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
export default {
    // 显示状态
    modelValue: {
        type: Boolean,
        default: false
    },

    // 是否异步关闭
    async: {
        type: Boolean,
        default: false
    },

    // 内容对齐方式
    // left-top | left-center | left-bottom | center-top | center-center | center-bottom | right-top | right-center | right-bottom
    align: {
        type: String,
        default: "center-center"
    },

    // 过渡效果持续时间
    duration: {
        type: String,
        default: ""
    },

    // 背景
    bg: {
        type: String,
        default: ""
    }
};
