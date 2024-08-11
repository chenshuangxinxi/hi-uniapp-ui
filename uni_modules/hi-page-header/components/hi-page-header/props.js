/**
 * 组件属性
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 */
export default {
    // 是否显示状态栏？
    showStatusBar: {
        type: Boolean,
        default: true
    },

    // 状态栏配置属性
    statusBarProps: {
        type: Object,
        default: () => ({})
    },

    // 是否显示导航栏？
    showNavigationBar: {
        type: Boolean,
        default: true
    },

    // 导航栏配置属性
    navigationBarProps: {
        type: Object,
        default: () => ({})
    }
};
