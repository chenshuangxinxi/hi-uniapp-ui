/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 组件中按钮的 hover-class
    hoverClass: {
        type: String,
        default: "hi-hover"
    },

    // 内容文字大小
    size: {
        type: String,
        default: ""
    },

    // 内容文字颜色
    color: {
        type: String,
        default: ""
    },

    // 高度
    height: {
        type: String,
        default: ""
    },

    // 内容文本字重
    weight: {
        type: [Number, String],
        default: undefined
    },

    // 标题文本
    title: {
        type: String,
        default: undefined
    },

    // 是否开启默认标题
    // 开启后如果未设置 title 属性，会显示在 pages.json 对应页面中配置的 style.navigationBarTitleText，如果 style.navigationBarTitleText 也没有配置，则会继续寻找 pages.json 中配置的 globalStyle.navigationBarTitleText
    autoTitle: {
        type: Boolean,
        default: true
    },

    // 标题对齐模式。只支持左对齐（left）和居中对齐（center）
    align: {
        type: String,
        default: "center"
    },

    // 标题颜色
    titleColor: {
        type: String,
        default: ""
    },

    // 标题文字尺寸
    titleSize: {
        type: String,
        default: ""
    },

    // 标题字重
    titleWeight: {
        type: [Number, String],
        default: undefined
    },

    // 是否显示返回按钮？
    showBack: {
        type: Boolean,
        default: true
    },

    // 是否点击返回按钮后自动返回？
    autoBack: {
        type: Boolean,
        default: true
    },

    // 是否自动判断是否显示返回按钮？
    // 判断逻辑为：当前页面是 tabBar 页面或 getCurrentPages().length <= 1 时，不显示返回按钮，否则显示
    autoShowBack: {
        type: Boolean,
        default: true
    },

    // 返回按钮文字
    backText: {
        type: String,
        default: ""
    },

    // 返回按钮图标名称
    backIconName: {
        type: String,
        default: "__zuo"
    },

    // 返回按钮图标颜色
    backIconColor: {
        type: String,
        default: ""
    },

    // 返回按钮图标尺寸
    backIconSize: {
        type: String,
        default: ""
    },

    // 返回按钮图标裁剪模式
    backIconMode: {
        type: String,
        default: ""
    },

    // 返回文字大小
    backTextSize: {
        type: String,
        default: ""
    },

    // 返回文字颜色
    backTextColor: {
        type: String,
        default: ""
    },

    // 返回文字字重
    backTextWeight: {
        type: [Number, String],
        default: undefined
    },

    // 返回按钮中图标和文字的间距
    backGap: {
        type: String,
        default: ""
    },

    // 按钮间距
    menuGap: {
        type: String,
        default: ""
    },

    // 按钮图标颜色
    menuIconColor: {
        type: String,
        default: ""
    },

    // 按钮图标尺寸
    menuIconSize: {
        type: String,
        default: ""
    },

    // 按钮图标裁剪模式
    menuIconMode: {
        type: String,
        default: ""
    },

    // 显示菜单按钮图标
    showMenuIcon: {
        type: Boolean,
        default: true
    },

    // 显示按钮图标文本
    showMenuText: {
        type: Boolean,
        default: false
    },

    // 菜单按钮文字大小
    menuTextSize: {
        type: String,
        default: ""
    },

    // 菜单按钮文字颜色
    menuTextColor: {
        type: String,
        default: ""
    },

    // 菜单按钮文字字重
    menuTextWeight: {
        type: [Number, String],
        default: undefined
    },

    // 左侧菜单数据
    // 数据格式为：
    // item.show: [Boolean] 是否显示？
    // item.style: [String, Array, Object] 按钮样式
    // item.hoverClass: [String] 按钮的 hover-class
    // item.showIcon: [Boolean] 是否显示图标
    // item.iconName: [String] 按钮图标名称
    // item.iconColor: [String] 按钮图标颜色
    // item.iconSize: [String] 按钮图标大小
    // item.iconMode: [String] 按钮图标裁剪模式
    // item.iconStyle: [String, Array, Object] 按钮图标的样式
    // item.showText: [Boolean] 是否显示文本
    // item.text: [String] 按钮文本
    // item.textStyle: [String, Array, Object] 按钮文本的样式
    leftMenu: {
        type: [Array, Object],
        default: () => null
    },

    // 右侧菜单数据
    // 数据格式参考上方 leftMenu
    rightMenu: {
        type: [Array, Object],
        default: () => null
    }
};
