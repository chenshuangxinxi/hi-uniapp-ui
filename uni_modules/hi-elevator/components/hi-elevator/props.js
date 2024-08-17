/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 */
export default {
    // 列表数据
    // 数据结构为：
    // item.text: 显示的文本
    // item.disabled: 是否禁用？设置禁用后需自行处理右侧对应显示的内容
    list: {
        type: Array,
        default: () => []
    },

    // 默认选中项的索引
    current: {
        type: Number,
        default: 0
    }
};
