/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 文字、更多、关闭点击时的 hover-class
    hoverClass: {
        type: String,
        default: "hi-hover"
    },

    // 显示状态
    show: {
        type: Boolean,
        default: true
    },

    // 数据
    list: {
        type: Array,
        default: () => []
    },

    // 文本字段的key
    keyName: {
        type: String,
        default: "text"
    },

    // 是否显示通知图标
    showIcon: {
        type: Boolean,
        default: true
    },

    // 通知图标名称
    iconName: {
        type: String,
        default: "__gonggao"
    },

    // 是否显示更多按钮
    showArrow: {
        type: Boolean,
        default: false
    },

    // 是否显示关闭按钮
    showClose: {
        type: Boolean,
        default: false
    },

    // 箭头图标名称
    arrowIconName: {
        type: String,
        default: "__you"
    },

    // 关闭图标名称
    closeIconName: {
        type: String,
        default: "__shanchu"
    },

    // 是否纵向
    vertical: {
        type: Boolean,
        default: false
    },

    // 滚动持续时长，单位秒，duration 和 speed 两者只能存在一个
    duration: {
        type: Number,
        default: null
    },

    // 每秒滚动距离，单位像素，duration 和 speed 两者只能存在一个
    speed: {
        type: Number,
        default: null
    },

    // 滚动间隔，单位秒
    interval: {
        type: Number,
        default: 0
    },

    // 是否开启步进模式，开启步近模式后，文字默认超出一行后显示省略号
    step: {
        type: Boolean,
        default: false
    }
};
