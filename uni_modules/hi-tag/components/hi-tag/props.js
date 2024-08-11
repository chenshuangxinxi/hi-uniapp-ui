/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
export default {
    // 标签文本
    text: {
        type: String,
        default: ""
    },

    // 主题
    theme: {
        type: String,
        default: ""
    },

    // 是否镂空
    plain: {
        type: Boolean,
        default: false
    },

    // 图标名称
    iconName: {
        type: String,
        default: ""
    },

    // 图标的其他配置项
    iconProps: {
        type: Object,
        default: () => ({})
    },

    // 是否可关闭
    // 组件只提供关闭事件，关闭逻辑需自行处理
    closable: {
        type: Boolean,
        default: false
    },

    // 关闭图标的名称
    closeIconName: {
        type: String,
        default: "__shanchu"
    },

    // 关闭图标的其他配置项
    closeIconProps: {
        type: Object,
        default: () => ({})
    },

    // 是否是圆角标签
    round: {
        type: Boolean,
        default: false
    },
};
