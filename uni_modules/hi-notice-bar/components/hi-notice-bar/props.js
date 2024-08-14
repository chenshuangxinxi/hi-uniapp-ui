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
    showNoticeIcon: {
        type: Boolean,
        default: true
    },

    // 通知图标名称
    noticeIconName: {
        type: String,
        default: "__gonggao"
    },

    // 通知图标颜色
    noticeIconColor: {
        type: String,
        default: ""
    },

    // 通知图标的大小
    noticeIconSize: {
        type: String,
        default: ""
    },

    // 通知图标的裁剪模式
    noticeIconMode: {
        type: String,
        default: ""
    },

    // 模式。arrow: 显示箭头图标，closable: 显示关闭图标，"arrow closable": 同时显示两个图标，为空则不显示图标
    mode: {
        type: String,
        default: "arrow"
    },

    // 箭头图标名称
    arrowIconName: {
        type: String,
        default: "__you"
    },

    // 箭头图标大小
    arrowIconSize: {
        type: String,
        default: ""
    },

    // 箭头图标颜色
    arrowIconColor: {
        type: String,
        default: ""
    },

    // 箭头图标的裁剪模式
    arrowIconMode: {
        type: String,
        default: ""
    },

    // 关闭图标名称
    closeIconName: {
        type: String,
        default: "__shanchu"
    },

    // 关闭图标大小
    closeIconSize: {
        type: String,
        default: ""
    },

    // 关闭图标颜色
    closeIconColor: {
        type: String,
        default: ""
    },

    // 关闭图标的裁剪模式
    closeIconMode: {
        type: String,
        default: ""
    },

    // 方向。row | column
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

    // 文本区域的高度
    height: {
        type: String,
        default: ""
    },

    // 内边距
    padding: {
        type: String,
        default: ""
    }
};
