/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // hover-class
    hoverClass: {
        type: String,
        default: "hi-hover"
    },

    // 商品数据
    // title: 商品名称
    // spec: 商品规格
    // price: 商品价格
    // image: 商品图片
    // number: 商品数量
    item: {
        type: Object,
        default: () => ({})
    },

    // 商品图片的裁剪模式
    mode: {
        type: String,
        default: "aspectFill"
    },

    // 删除图标的名称
    deleteIconName: {
        type: String,
        default: "__delete"
    },

    // 是否显示删除按钮
    showDelete: {
        type: Boolean,
        default: true
    },

    // 最大数量
    max: {
        type: Number,
        default: 99
    },

    // 最小数量
    min: {
        type: Number,
        default: 1
    },

    // 是否开启异步变更
    async: {
        type: Boolean,
        default: true
    },

    // 禁用输入框
    disabledInput: {
        type: Boolean,
        default: true
    }
};
