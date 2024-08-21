/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // hover class
    hoverClass: {
        type: String,
        default: "hi-hover"
    },

    // 是否禁用
    disabled: {
        type: Boolean,
        default: false
    },

    // 使用 v-model 双向绑定值，单独使用时需要使用 v-model 绑定复选框的选中状态
    modelValue: {
        type: Boolean,
        default: false
    },

    // 复选框的值，在 hi-checkbox-group 组件中使用时需要绑定此值
    value: {
        type: [String, Number],
        default: ""
    },

    // 复选框的 label
    label: {
        type: String,
        default: ""
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

    // 是否异步变更
    async: {
        type: Boolean,
        default: false
    }
};
