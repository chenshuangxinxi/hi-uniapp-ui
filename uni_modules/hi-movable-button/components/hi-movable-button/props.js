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

    // 宽
    width: {
        type: String,
        default: "88rpx"
    },

    // 高
    height: {
        type: String,
        default: "88rpx"
    },

    // 图标
    iconName: {
        type: String,
        default: "__zhuye"
    },

    // 图标的其他配置
    iconProps: {
        type: Object,
        default: () => ({})
    },

    // 文字
    text: {
        type: String,
        default: ""
    },

    // 当里面的 movable-view 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个 movable-area
    scaleArea: {
        type: Boolean,
        default: false
    },

    // 初始位置
    // left-top、left-center、left-bottom、right-top、right-center、right-bottom、center-top、center-center、center-bottom
    position: {
        type: String,
        default: "right-center"
    },

    // movable-view 的移动方向，属性值有 all、vertical、horizontal、none
    direction: {
        type: String,
        default: "all"
    },

    // movable-view 是否带有惯性
    inertia: {
        type: Boolean,
        default: false
    },

    // 超过可移动区域后，movable-view是否还可以移动
    outOfBounds: {
        type: Boolean,
        default: false
    },

    // 阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快
    damping: {
        type: Number,
        default: 20
    },

    // 摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值
    friction: {
        type: Number,
        default: 2
    },

    // 是否禁用
    disabled: {
        type: Boolean,
        default: false
    },

    // 是否支持双指缩放，默认缩放手势生效区域是在 movable-view 内
    scale: {
        type: Boolean,
        default: false
    },

    // 定义缩放倍数最小值
    scaleMin: {
        type: Number,
        // 小程序设置后默认就会缩放到这个级别，所以小程序单独处理一下
        // #ifdef MP
        default: 1,
        // #endif
        // #ifndef MP
        default: 0.5
        // #endif
    },

    // 定义缩放倍数最大值
    scaleMax: {
        type: Number,
        default: 10
    },

    // 定义缩放倍数，支持小数
    scaleValue: {
        type: Number,
        default: 1
    },

    // 是否使用动画
    animation: {
        type: Boolean,
        default: true
    },

    // 是否显示徽标数？
    showBadge: {
        type: Boolean,
        default: false
    },

    // 徽标数的值
    badgeValue: {
        type: Number,
        default: 0
    },

    // 徽标数的其他配置
    badgeProps: {
        type: Object,
        default: () => ({})
    }
};
