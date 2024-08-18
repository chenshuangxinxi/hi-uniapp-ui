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

    // 过滤条件 items
    // 数据格式为：
    // item.class: 类名
    // item.style: 样式
    // item.iconName: 图标名称
    // item.checkedIconName: 选中时的图标名称
    // item.text: 文本
    // item.disabled: 是否禁用
    list: {
        type: Array,
        default: () => []
    },

    // 选中项的下标
    current: {
        type: Number,
        default: 0
    },

    // 是否显示右侧内容
    showRight: {
        type: Boolean,
        default: true
    },

    // 右侧按钮图标名称
    rightIconName: {
        type: String,
        default: "__shaixuan"
    },

    // 右侧按钮文字
    rightText: {
        type: String,
        default: "筛选"
    }
};
