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
        default: "hi-hover-class"
    },

    // 商品数据
    // name: 商品名称
    // price: 商品价格
    // image: 商品图片
    // item.tags: 标签列表
    //     tag.color: 标签文本颜色
    //     tag.background: 标签背景
    //     tag.text: 标签文本
    item: {
        type: Object,
        default: () => ({})
    },

    // 商品图片的裁剪模式
    mode: {
        type: String,
        default: "aspectFill"
    },

    // 图片的配置项
    imageProps: {
        type: Object,
        default: () => {}
    },

    // 标题显示的行数
    line: {
        type: Number,
        default: 1
    },

    // 是否显示购物车按钮
    shoppingCart: {
        type: Boolean,
        default: true
    },

    // 购物车按钮的图标名称
    shoppingCartIconName: {
        type: String,
        default: "__gouwuche"
    },

    // 购物车图标的其他配置项
    shoppingCartIconProps: {
        type: Object,
        default: () => ({})
    }
};
