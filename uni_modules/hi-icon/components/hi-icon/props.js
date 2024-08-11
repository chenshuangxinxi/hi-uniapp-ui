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
        default: ""
    },

    // 是否禁用
    disabled: {
        type: Boolean,
        default: false
    },

    // disabled class
    disabledClass: {
        type: String,
        default: "hi-disabled"
    },

    // 图标名称
    // 1. 当此值中包含“/”时，则被认为是图片路径，此时图标类型会被自动判断为图片图标
    // 2. 当此值是以双下划线开头时，则默认被认为是内置图标，配置扩展图标时请注意不要和内置图标的开头双下划线冲突
    // 3. 如果 uni.$hi.config.icon.prefix 有值，并且该属性的值不符合上方的规则，则此时会被自动判断为扩展图标
    // 4. 最后，当上方的条件都不满足时，此时会将该属性的值增加到组件的 class 上，也就是说如果传入的值为符合 iconfont 图标库命名规则，如 “my-iconfont my-iconfont” 并且引入了对应的图标库，此时图标也会正常渲染出来
    name: {
        type: String,
        default: ""
    },

    // 图标大小
    size: {
        type: String,
        default: ""
    },

    // 图标颜色
    color: {
        type: String,
        default: ""
    },

    // 图片图标的裁剪、缩放模式
    mode: {
        type: String,
        default: "aspectFit"
    }
};
