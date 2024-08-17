/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // label 文本
    label: {
        type: String,
        default: "合计："
    },

    // 价格
    price: {
        type: Number,
        default: 0
    },

    // 右侧按钮的配置项
    btnProps: {
        type: Object,
        default: () => {}
    }
};
