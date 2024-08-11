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

    // 图片的配置项
    imageProps: {
        type: Object,
        default: () => {}
    },

    // 删除图标的名称
    deleteIconName: {
        type: String,
        default: "__delete"
    },

    // 删除图标的其他配置
    deleteIconProps: {
        type: Object,
        default: () => ({})
    },

    // 是否显示删除按钮
    showDelete: {
        type: Boolean,
        default: true
    },

    // 步进器设置项
    numberStepProps: {
        type: Object,
        default: () => ({})
    }
};
