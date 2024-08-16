/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
export default {
    // 加减按钮的 hover-class
    hoverClass: {
        type: String,
        default: "hi-hover"
    },

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

    // 加减图标的大小
    iconSize: {
        type: String,
        default: ""
    },

    // 加减图标的颜色
    iconColor: {
        type: String,
        default: ""
    },

    // 加减图标的裁剪模式
    iconMode: {
        type: String,
        default: ""
    },

    // 减号按钮图标的名称
    minusIconName: {
        type: String,
        default: "__jian"
    },

    // 减号图标颜色
    minusIconColor: {
        type: String,
        default: ""
    },

    // 减号图标大小
    minusIconSize: {
        type: String,
        default: ""
    },

    // 减号图标裁剪模式
    minusIconMode: {
        type: String,
        default: ""
    },

    // 加号按钮图标的名称
    plusIconName: {
        type: String,
        default: "__jia"
    },

    // 加号图标颜色
    plusIconColor: {
        type: String,
        default: ""
    },

    // 加号图标大小
    plusIconSize: {
        type: String,
        default: ""
    },

    // 加号图标裁剪模式
    plusIconMode: {
        type: String,
        default: ""
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
    },

    // 整体内容文字大小
    size: {
        type: String,
        default: ""
    },

    // 整体内容文字颜色
    color: {
        type: String,
        default: ""
    },

    // 背景
    bg: {
        type: String,
        default: ""
    },

    // 圆角大小
    radius: {
        type: String,
        default: ""
    },

    // 边框颜色
    borderColor: {
        type: String,
        default: ""
    },

    // 聚焦时的边框颜色
    focusBorderColor: {
        type: String,
        default: ""
    },

    // 是否显示边框
    showBorder: {
        type: Boolean,
        default: true
    },

    // 整体宽度
    width: {
        type: String,
        default: ""
    },

    // 整体高度
    height: {
        type: String,
        default: ""
    },

    // 按钮宽度
    btnWidth: {
        type: String,
        default: ""
    },

    // 输入框宽度
    inputWidth: {
        type: String,
        default: ""
    },

    // 输入框文字大小
    inputSize: {
        type: String,
        default: ""
    },

    // 输入框文字颜色
    inputColor: {
        type: String,
        default: ""
    },

    // 输入框背景
    inputBg: {
        type: String,
        default: ""
    }
};
