/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 数据列表长度
    length: {
        type: Number,
        default: 0
    },

    // 列数
    columns: {
        type: [Number, String],
        default: 2
    },

    // 行/列间距
    gap: {
        type: String,
        default: ""
    },

    // 行间距
    rowGap: {
        type: String,
        default: ""
    },

    // 列间距
    columnGap: {
        type: String,
        default: ""
    },

    // 是否显示空内容
    showEmpty: {
        type: Boolean,
        default: true
    },

    // 空内容配置项
    emptyOpts: {
        type: Object,
        default: () => ({})
    },

    // 是否显示加载状态
    showLoadmore: {
        type: Boolean,
        default: true
    },

    // 数据加载状态
    loadmoreStatus: {
        type: String,
        default: ""
    },

    // 加载状态组件的配置
    loadmoreOpts: {
        type: Object,
        default: () => ({})
    }
};
