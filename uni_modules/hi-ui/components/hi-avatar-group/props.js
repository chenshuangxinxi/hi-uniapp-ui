/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 列表
    list: {
        type: Array,
        default: () => []
    },

    // 头像图片属性的 keyName
    keyName: {
        type: String,
        default: "avatar"
    },

    // 展示的数量
    count: {
        type: Number,
        default: 5
    },

    // 头像偏移量
    offset: {
        type: String,
        default: "-16rpx"
    },

    // 是否开启动画
    animation: {
        type: Boolean,
        default: false
    },

    // 动画间隔时间，毫秒
    delay: {
        type: Number,
        default: 3000
    },

    // 图片的裁剪模式
    mode: {
        type: String,
        default: "scaleToFill"
    },

    // 头像宽高
    size: {
        type: String,
        default: "40rpx"
    },

    // 是否显示更多按钮
    showMore: {
        type: Boolean,
        default: false
    },

    // 更多按钮图标名称
    moreIconName: {
        type: String,
        default: "__gengduo"
    }
};
