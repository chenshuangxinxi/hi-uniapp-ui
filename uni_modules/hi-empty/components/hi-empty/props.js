/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
export default {
    // 图标名称
    // 1. 当此值中包含“/”时，则被认为是图片路径，此时图标类型会被自动判断为图片图标
    // 2. 当此值是以双下划线开头时，则默认被认为是内置图标，配置扩展图标时请注意不要和内置图标的开头双下划线冲突
    // 3. 如果 uni.$hi.config.icon.prefix 有值，并且该属性的值不符合上方的规则，则此时会被自动判断为扩展图标
    // 4. 最后，当上方的条件都不满足时，此时会将该属性的值增加到组件的 class 上，也就是说如果传入的值为符合 iconfont 图标库命名规则，如 “my-iconfont my-iconfont” 并且引入了对应的图标库，此时图标也会正常渲染出来
    name: {
        type: String,
        default: "__kongshuju"
    },

    // 图标的其他配置
    iconProps: {
        type: Object,
        default: () => {}
    },

    // 文字
    text: {
        type: String,
        default: "Ops! 暂无数据~"
    },

    // 是否显示按钮
    btnShow: {
        type: Boolean,
        default: false
    },

    // 按钮主题
    btnTheme: {
        type: String,
        default: "main"
    },

    // 按钮文字
    btnText: {
        type: String,
        default: "继续逛逛"
    },

    // 按钮其他配置
    btnProps: {
        type: Object,
        default: () => {}
    }
};
