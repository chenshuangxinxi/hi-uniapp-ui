/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
export default {
    // 楼层数据（左侧导航数据）
    // 数据结构为：
    // item.text: 显示的内容
    // item.disabled: 是否禁用？设置禁用后需自行处理右侧对应显示的内容
    // item.refresherTriggered: 设置右侧内容的当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发
    floors: {
        type: Array,
        default: () => []
    },

    // 默认选中项的索引
    current: {
        type: Number,
        default: 0
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

    // 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性。
    scrollAnchoring: {
        type: Boolean,
        default: false
    }
};
