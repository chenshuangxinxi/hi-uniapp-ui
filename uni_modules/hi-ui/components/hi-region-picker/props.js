/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 显示状态
    show: {
        type: Boolean,
        default: false
    },

    // 绑定数据
    modelValue: {
        type: Array,
        default: () => [0, 0, 0]
    },

    // 省市区完整数据
    region: {
        type: Object,
        default: () => undefined
    },

    // 省数据
    provinces: {
        type: Array,
        default: () => []
    },

    // 市数据
    cities: {
        type: Array,
        default: () => []
    },

    // 区数据
    areas: {
        type: Array,
        default: () => []
    },

    // 显示字段的 keyName
    keyName: {
        type: String,
        default: "name"
    },

    // item 的高度
    itemHeight: {
        type: [String],
        default: "50px"
    },

    // 点击遮罩是否关闭
    closeOnClickOverlay: {
        type: Boolean,
        default: true
    },

    // 是否显示loading
    loading: {
        type: Boolean,
        default: false
    },

    // 标题
    title: {
        type: String,
        default: ""
    },

    // 切换后是否子项下标归零
    returnZero: {
        type: Boolean,
        default: false
    }
};
