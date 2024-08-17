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
    // item.showIcon: 是否显示图标
    // item.iconName: 图标名称
    // item.checkedIconName: 选中时的图标名称
    // item.iconColor: 图标颜色
    // item.checkedIconColor: 选中时的图标颜色
    // item.iconSize: 图标大小
    // item.checkedIconSize: 选中时的图标大小
    // item.iconMode: 图标裁剪模式
    // item.checkedIconMode: 选中时的图标裁剪模式
    // item.showText: 是否显示文字
    // item.text: 文本
    // item.checkedText: 选中时的文本
    // item.reverse: 默认图标在前，文字在后，此数值为真时，图标在后，文字在前
    // item.disabled: 是否禁用
    // item.checked: 是否选中/激活
    items: {
        type: Array,
        default: () => []
    },

    // item 图标大小
    itemIconSize: {
        type: String,
        default: ""
    },

    // item 图标颜色
    itemIconColor: {
        type: String,
        default: ""
    },

    // item 图标裁剪模式
    itemIconMode: {
        type: String,
        default: ""
    },

    // item 激活时图标大小
    checkedItemIconSize: {
        type: String,
        default: ""
    },

    // item 激活时图标颜色
    checkedItemIconColor: {
        type: String,
        default: ""
    },

    // item 激活时图标裁剪模式
    checkedItemIconMode: {
        type: String,
        default: ""
    },

    // item 文本大小
    itemTextSize: {
        type: String,
        default: ""
    },

    // item 文本颜色
    itemTextColor: {
        type: String,
        default: ""
    },

    // item 激活时文本大小
    checkedItemTextSize: {
        type: String,
        default: ""
    },

    // item 激活时文本颜色
    checkedItemTextColor: {
        type: String,
        default: ""
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
