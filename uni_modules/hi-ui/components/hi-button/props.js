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

    // 是否禁用?
    disabled: {
        type: Boolean,
        default: false
    },

    // 是否显示 loading
    loading: {
        type: Boolean,
        default: false
    },

    // loading 文本
    loadingText: {
        type: String,
        default: "加载中..."
    },

    // loading 图标名称
    loadingIconName: {
        type: String,
        default: "__loading"
    },

    // 左侧图标名称
    leftIconName: {
        type: String,
        default: ""
    },

    // 右侧图标名称
    rightIconName: {
        type: String,
        default: ""
    },

    // 按钮文字
    text: {
        type: String,
        default: ""
    },

    // 副文字
    subText: {
        type: String,
        default: ""
    },

    // 下面是 uni-app button 组件自带的属性
    // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
    formType: {
        type: String,
        default: ""
    },

    // 开放能力
    openType: {
        type: String,
        default: ""
    },

    // 按住后多久出现点击态，单位毫秒
    hoverStartTime: {
        type: Number,
        default: 20
    },

    // 手指松开后点击态保留时间，单位毫秒
    hoverStayTime: {
        type: Number,
        default: 70
    },

    // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
    appParameter: {
        type: String,
        default: ""
    },

    // 指定是否阻止本节点的祖先节点出现点击态
    hoverStopPropagation: {
        type: Boolean,
        default: false
    },

    // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。
    lang: {
        type: String,
        default: "zh_CN"
    },

    // 会话来源，open-type="contact"时有效
    sessionFrom: {
        type: String,
        default: ""
    },

    // 会话内消息卡片标题，open-type="contact"时有效
    sendMessageTitle: {
        type: String,
        default: ""
    },

    // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
    sendMessagePath: {
        type: String,
        default: ""
    },

    // 会话内消息卡片图片，open-type="contact"时有效
    sendMessageImg: {
        type: String,
        default: ""
    },

    // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
    showMessageCard: {
        type: Boolean,
        default: false
    },

    // 打开群资料卡时，传递的群号
    groupId: {
        type: String,
        default: ""
    },

    // 打开频道页面时，传递的频道号
    guildId: {
        type: String,
        default: ""
    },

    // 打开公众号资料卡时，传递的号码
    publicId: {
        type: String,
        default: ""
    },

    // 客服的抖音号
    dataImId: {
        type: String,
        default: ""
    },

    // IM卡片类型
    dataImType: {
        type: String,
        default: ""
    },

    // 商品的id，仅支持泛知识课程库和生活服务商品库中的商品
    dataGoodsId: {
        type: String,
        default: ""
    },

    // 订单的id，仅支持交易2.0订单
    dataOrderId: {
        type: String,
        default: ""
    },

    // 商品类型，“1”代表生活服务，“2”代表泛知识。
    dataBizLine: {
        type: String,
        default: ""
    }
};
