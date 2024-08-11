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
        default: "hi-hover-class"
    },

    // 过滤条件 items
    // 数据格式为：
    // item.value: key，需保证唯一性
    // item.label: 可选，文本
    // item.checkedLabel: 可选，选中时的文本
    // item.iconName: 可选，图标名称
    // item.checkedIconName: 可选，选中时的图标名称
    // item.iconProps: 可选，图标的其他属性
    // item.checkedIconProps: 可选，选中时的图标的其他属性
    // item.reverse: 可选，默认图标在前，文字在后，此数值为真时，图标在后，文字在前
    // item.disabled: 可选，是否禁用
    // item.checked: 是否选中/激活
    items: {
        type: Array,
        default: () => []
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

    // 右侧按钮图标的其他属性
    rightIconProps: {
        type: Object,
        default: () => ({})
    },

    // 右侧按钮文字
    rightText: {
        type: String,
        default: "筛选"
    },

    // 右侧按钮默认文字在前，图标在后，此数值为真时，图标在后，文字在前
    rightReverse: {
        type: Boolean,
        default: false
    }
};
