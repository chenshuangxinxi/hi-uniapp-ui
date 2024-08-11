/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
export default {
    // 使用 v-model 双向绑定值
    modelValue: {
        type: Number,
        default: 1
    },

    // 计数器步长
    step: {
        type: Number,
        default: 1
    },

    // 最大值
    max: {
        type: Number,
        default: Infinity
    },

    // 最小值
    min: {
        type: Number,
        default: -Infinity
    },

    // 减号按钮图标的名称
    minusIconName: {
        type: String,
        default: "__jian"
    },

    // 减号按钮图标的其他配置
    minusIconProps: {
        type: Object,
        default: () => ({})
    },

    // 加号按钮图标的名称
    plusIconName: {
        type: String,
        default: "__jia"
    },

    // 加号按钮图标的其他配置
    plusIconProps: {
        type: Object,
        default: () => ({})
    },

    // 是否禁用减号按钮
    disabledMinus: {
        type: Boolean,
        default: false
    },

    // 是否禁用加号按钮
    disabledPlus: {
        type: Boolean,
        default: false
    },

    // 是否显示减号按钮
    showMinus: {
        type: Boolean,
        default: true
    },

    // 是否显示加号按钮
    showPlus: {
        type: Boolean,
        default: true
    },

    // 是否禁用输入框
    disabledInput: {
        type: Boolean,
        default: false
    },

    // 是否禁用全部
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
