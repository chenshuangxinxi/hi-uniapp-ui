/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
export default {
    // hover-class
    hoverClass: {
        type: String,
        default: "hi-hover"
    },

    // 内容文本字体颜色
    color: {
        type: String,
        default: ""
    },

    // 内容文本字体大小
    size: {
        type: String,
        default: ""
    },

    // 状态。loadmore: 加载更多，loading: 加载中，nomore: 没有更多
    status: {
        type: String,
        default: "loadmore"
    },

    // loading 图标名称
    iconName: {
        type: String,
        default: "__loading"
    },

    // loading 图标颜色
    iconColor: {
        type: String,
        default: ""
    },

    // loading 图标大小
    iconSize: {
        type: String,
        default: ""
    },

    // loading 图标裁剪模式
    iconMode: {
        type: String,
        default: ""
    },

    // loadmore 文字
    loadmoreText: {
        type: String,
        default: "加载更多"
    },

    // loading 文字
    loadingText: {
        type: String,
        default: "正在加载..."
    },

    // nomore 文字
    nomoreText: {
        type: String,
        default: " — 没有更多了 — "
    },

    // 布局方向
    direction: {
        type: String,
        default: "row"
    }
};
