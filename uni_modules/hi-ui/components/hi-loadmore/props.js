/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // hover-class
    hoverClass: {
        type: String,
        default: "hi-hover"
    },

    // 状态。loadmore: 加载更多，loading: 加载中，nomore: 没有更多
    status: {
        type: String,
        default: ""
    },

    // loading 图标名称
    iconName: {
        type: String,
        default: "__loading"
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
    }
};
