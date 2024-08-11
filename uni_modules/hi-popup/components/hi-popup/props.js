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

    // 模式
    // top、bottom、left、right、center
    mode: {
        type: String,
        default: "center"
    },

    // 过渡效果持续时间
    duration: {
        type: String,
        default: ""
    },

    // 是否显示 Header，包括标题和关闭按钮
    showHead: {
        type: Boolean,
        default: true
    },

    // 是否显示标题
    showTitle: {
        type: Boolean,
        default: true
    },

    // 标题
    title: {
        type: String,
        default: ""
    },

    // 是否显示关闭按钮
    showClose: {
        type: Boolean,
        default: true
    },

    // 关闭按钮的图标名称
    closeIconName: {
        type: String,
        default: "__shanchu"
    },

    // 关闭按钮的其他配置
    closeIconProps: {
        type: Object,
        default: () => ({})
    },

    // 是否显示 Footer
    showFoot: {
        type: Boolean,
        default: true
    },

    // 高度
    height: {
        type: String,
        default: ""
    },

    // 最大高度
    maxHeight: {
        type: String,
        default: ""
    },

    // 宽度
    width: {
        type: String,
        default: ""
    },

    // 遮罩是否可点击关闭
    overlayClickable: {
        type: Boolean,
        default: false
    },

    // 距顶部/左边多远时（单位px），触发 scrolltoupper 事件
    upperThreshold: {
        type: Number,
        default: 50
    },

    // 距底部/右边多远时（单位px），触发 scrolltolower 事件
    lowerThreshold: {
        type: Number,
        default: 50
    },

    // 开启自定义下拉刷新
    refresherEnabled: {
        type: Boolean,
        default: false
    },

    // 设置自定义下拉刷新阈值
    refresherThreshold: {
        type: Number,
        default: 45
    },

    // 设置自定义下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式
    refresherDefaultStyle: {
        type: String,
        default: "black"
    },

    // 设置自定义下拉刷新区域背景颜色
    refresherBackground: {
        type: String,
        default: "#fff"
    },

    // 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发
    refresherTriggered: {
        type: Boolean,
        default: false
    },

    // 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性。
    scrollAnchoring: {
        type: Boolean,
        default: false
    }
};
