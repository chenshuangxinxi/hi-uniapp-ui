/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
export default {
    // 使用 v-model 双向绑定值
    modelValue: {
        type: Boolean,
        default: false
    },

    // 是否单独使用
    alone: {
        type: Boolean,
        default: false
    },

    // 图标名称
    iconName: {
        type: String,
        default: "__checked"
    },

    // 图标的其他配置
    iconProps: {
        type: Object,
        default: () => ({})
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

    // 是否禁用
    disabled: {
        type: Boolean,
        default: false
    },

    // 大小
    size: {
        type: String,
        default: ""
    },

    // 计数器步长
    step: {
        type: Number,
        default: 1
    },

    // 是否禁用
    disabled: {
        type: Boolean,
        default: false
    },

    // 是否异步变更
    async: {
        type: Boolean,
        default: false
    }
};
