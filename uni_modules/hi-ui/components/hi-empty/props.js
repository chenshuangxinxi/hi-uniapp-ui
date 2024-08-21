/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 图标名称
    iconName: {
        type: String,
        default: "__kongshuju"
    },

    // 图标裁剪模式
    iconMode: {
        type: String,
        default: ""
    },

    // 提示文字
    tips: {
        type: String,
        default: "Ops! 暂无数据~"
    },

    // 是否显示按钮
    showBtn: {
        type: Boolean,
        default: false
    },

    // 按钮文字
    btnText: {
        type: String,
        default: "继续逛逛"
    },

    // 按钮其他配置
    btnProps: {
        type: Object,
        default: () => ({})
    }
};
