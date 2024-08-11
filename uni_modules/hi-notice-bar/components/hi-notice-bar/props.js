/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
export default {
    // 使用 v-model 绑定显示状态
    modelValue: {
        type: Boolean,
        default: true
    },

    // 显示状态

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
    noticeIcon: {
        type: Boolean,
        default: true
    },

    // 通知图标名称
    noticeIconName: {
        type: String,
        default: "__gonggao"
    },

    // 通知图标的其他配置
    noticeIconProps: {
        type: Object,
        default: null
    },

    // 模式。arrow: 显示箭头图标，closable: 显示关闭图标，"arrow closable": 同时显示两个图标，为空则不显示图标
    mode: {
        type: String,
        default: "arrow"
    },

    // 箭头图标名称
    arrowName: {
        type: String,
        default: "__you"
    },

    // 箭头图标的其他配置
    arrowProps: {
        type: Object,
        default: null
    },

    // 关闭图标名称
    closeName: {
        type: String,
        default: "__shanchu"
    },

    // 关闭图标的其他配置
    closeProps: {
        type: Object,
        default: null
    },

    // 滚动模式。row | column
    direction: {
        type: String,
        default: "row"
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